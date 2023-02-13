import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards, getCardsInCollection, collectionId, setCards}) => {

    return ( 
        <CardViewer cards={cards} getCardsInCollection={getCardsInCollection} collectionId={collectionId} setCards={setCards}/>
     );
}
 
export default CardContainer;