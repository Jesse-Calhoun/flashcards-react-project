import React from 'react';

const CardContainer = ({cards}) => {

    const cardChoices = cards.map((card) => {
        return(
            <div>
                <div>{card.id}</div>
                <div>{card.word}</div>
                <div>{card.definition}</div>
            </div>
        )
    })

    return ( 
        <div>{cardChoices}</div>
     );
}
 
export default CardContainer;