import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards}) => {

    const cardChoices = cards.map((card) => <CardViewer card={card}/>)

    return ( 
        <div>{cardChoices}</div>
     );
}
 
export default CardContainer;