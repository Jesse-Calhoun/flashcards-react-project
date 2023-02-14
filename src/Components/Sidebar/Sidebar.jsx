import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';
import './Sidebar.css'

const SideBar = ({collections, getCardsInCollection}) => {
    return (     
    <section id='sidebar' className='sidebar'>
        <CollectionContainer collections={collections} getCardsInCollection={getCardsInCollection}/>
    </section> );
}
 
export default SideBar;