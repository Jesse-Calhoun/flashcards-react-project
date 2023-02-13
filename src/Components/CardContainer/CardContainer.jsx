import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards, getCardsInCollection, collectionId}) => {

    return ( 
        <CardViewer cards={cards} getCardsInCollection={getCardsInCollection} collectionId={collectionId}/>
     );
}
 
export default CardContainer;