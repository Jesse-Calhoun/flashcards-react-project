import React, { useState } from 'react';

const Card = ({card}) => {

    const [isFlipped,setIsFlipped] = useState(false)

    function handleFlip(){
        setIsFlipped(!isFlipped)
    }

    
    return (
        <section>
            <div onClick={handleFlip}>
                {/* condition ? exprIfTrue : exprIfFalse <-----ternary statement, could switch word and definition as long as line 5 false is changed to true*/}
                {isFlipped ? card.definition : card.word}
            </div>
        </section>
    );
}
 
export default Card;