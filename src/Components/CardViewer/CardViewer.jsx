import React, { useState } from 'react';
import AddNewFlashcard from '../AddNewFlashcard/AddNewFlashcard';
import Card from '../Card/Card';

const CardViewer = ({cards, getCardsInCollection, collectionId}) => {
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
        if (index > 0){
            setIndex(index - 1);
        }
        else {
            setIndex(cards.length - 1);
        }
    }

    return (
        <section id="card-viewer">
            <AddNewFlashcard getCardsInCollection={getCardsInCollection} collectionId={collectionId} />
            <div>
                <Card card={cards[index]}/>
            </div>
            <div>
            <div>{index+1}/{cards.length}</div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )}
 
export default CardViewer;