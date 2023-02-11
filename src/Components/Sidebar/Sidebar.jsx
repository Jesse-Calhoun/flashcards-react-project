import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const SideBar = ({collections, getCardsInCollection, chosenCollection, setChosenCollection}) => {
    return (     
    <section id='sidebar'>
        <CollectionContainer collections={collections} getCardsInCollection={getCardsInCollection} chosenCollection={chosenCollection} setChosenCollection={setChosenCollection} />
    </section> );
}
 
export default SideBar;