import React, { useState } from 'react';

const Card = ({card}) => {

    const [isFlipped,setIsFlipped] = useState(false)

    function handleFlip(){
        setIsFlipped(!isFlipped)
    }
    return (
        <div onClick={handleFlip}>
            {isFlipped ? card.definition : card.word}
        </div>
    );
}
 
export default Card;