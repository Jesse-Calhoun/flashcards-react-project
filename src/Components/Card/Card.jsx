import React, { useState } from 'react';

const Card = ({card}) => {

    const [isFlipped,setIsFlipped] = useState(false)

    function handleFlip(){
        setIsFlipped(!isFlipped)
    }

    
    return (
        <section>
            <h3 onClick={handleFlip} className='card'>
                {/* condition ? exprIfTrue : exprIfFalse <-----ternary statement, could switch word and definition as long as line 5 false is changed to true*/}
                {isFlipped ? card.definition : card.word}
            </h3>
        </section>
    );
}
 
export default Card;