import React, { useState } from 'react';
import AddNewFlashcard from '../AddNewFlashcard/AddNewFlashcard';
import Card from '../Card/Card';
import axios from 'axios';
import './CardViewer.css'

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
        let response = await axios.delete(`http://127.0.0.1:8000/api/collections/${currentCollection}/cards/${cardId}/`)
        if (response.status === 204){
            await getCardsInCollection(currentCollection)
        }
    }

    function handleDelete(event){
        event.preventDefault();
        deleteFlashcard(collectionId, cards[index].id);
        setIndex(0)
        let adjustedcards = cards.filter(function( element ) {
            return element !== undefined;
         });
        setCards(adjustedcards)
    }

    return (
        <section id="card-viewer">
            <div className='col-xs-9 padding center-align border-only original-background-color' >
                <div className='card-viewer'>
                    <div className='move-right'>
                        <button onClick={handleDelete} className='button'>Delete</button>
                    </div>
                    <div >
                        <Card card={cards[index]} />
                    </div>
                </div>
                <div className='under-card-area'>
                        <div className='col-sm-4'>
                            <button onClick={handlePrevious}>Previous</button>
                        </div>
                        <div className='col-sm-4'>Flashcard {index+1} of {cards.length}</div>
                        <div className='col-sm-4'>
                            <button onClick={handleNext}>Next</button>
                        </div>
                </div>
            </div>
            <div className='align-items-end '>
                <AddNewFlashcard getCardsInCollection={getCardsInCollection} collectionId={collectionId} />
            </div>
        </section>
    )}

export default CardViewer;