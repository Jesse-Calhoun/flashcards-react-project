import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const SideBar = ({collections, getCardsInCollection}) => {
    return (     
    <div>
        <CollectionContainer collections={collections} getCardsInCollection={getCardsInCollection} />
    </div> );
}
 
export default SideBar;