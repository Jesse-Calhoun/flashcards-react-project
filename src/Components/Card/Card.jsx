import React from 'react';

const Card = ({cards}) => {
    return ( 
        <div>
            {cards.map((card) => {
                return (
                    <label>
                        <p>{card.word}</p>
                        <p>{card.definition}</p>
                    </label>
                )
            })}
        </div> 
    );
}
 
export default Card;