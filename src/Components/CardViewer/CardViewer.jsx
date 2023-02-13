import React, { useState } from 'react';
import AddNewFlashcard from '../AddNewFlashcard/AddNewFlashcard';
import Card from '../Card/Card';
import axios from 'axios';

const CardViewer = ({cards, getCardsInCollection, collectionId, setCards}) => {
    const [index, setIndex] = useState(0)
    


    function handleNext(){
        if (cards.length === 0){
            return alert ('Please select collection.')
        }
        else if (cards.length <= index + 1){
            setIndex(0)
        }
        else (setIndex(index+1))
    }

    function handlePrevious(){
        if (cards.length === 0) {
            return alert('You must select a card Collection before starting!');
        }
        else if (index > 0){
            setIndex(index - 1);
        }
        else {
            setIndex(cards.length - 1);
        }
    }

    async function deleteFlashcard(currentCollection, cardId){
        let response = axios.delete(`http://127.0.0.1:8000/api/collections/${currentCollection}/cards/${cardId}/`)
        if (response.status === 204){
            await getCardsInCollection(currentCollection)
        }
    }

    function handleDelete(event){
        event.preventDefault();
        deleteFlashcard(collectionId, cards[index].id);
        delete cards[index] 
        setIndex(0)
        let adjustedcards = cards.filter(function( element ) {
            return element !== undefined;
         });
        setCards(adjustedcards)
    }

    return (
        <section id="card-viewer">
            <AddNewFlashcard getCardsInCollection={getCardsInCollection} collectionId={collectionId} />
            <div>
                <Card card={cards[index]}/>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
            <div>
            <div>{index+1}/{cards.length}</div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )}

export default CardViewer;