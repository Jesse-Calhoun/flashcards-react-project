import React, { useState } from 'react';

const CardViewer = ({cards}) => {
    const [index, setIndex] = useState(0)
    let selectedCards = cards


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
            setIndex(cards.length-1);
        }
    }

    return (
        <section id="card-viewer">
            <div>
                <div>{cards[index].word}</div>
                <div>{cards[index].definition}</div>
            </div>
            <div>
            <div>{selectedCards[index].id}/{selectedCards.length}</div>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </section>
    )}
 
export default CardViewer;