import React from 'react';
import CardViewer from '../CardViewer/CardViewer';

const CardContainer = ({cards, chosenCollection, getAllCollections}) => {

    return ( 
        <CardViewer cards={cards} chosenCollection={chosenCollection} getAllCollections={getAllCollections} />
     );
}
 
export default CardContainer;