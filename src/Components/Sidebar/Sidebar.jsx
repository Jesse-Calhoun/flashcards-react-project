import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const SideBar = ({collections, getCardsInCollection}) => {
    return (     
    <section id='sidebar'>
        <CollectionContainer collections={collections} getCardsInCollection={getCardsInCollection}/>
    </section> );
}
 
export default SideBar;