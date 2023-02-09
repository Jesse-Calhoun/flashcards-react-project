import React from 'react';
import CollectionContainer from '../CollectionContainer/CollectionContainer';

const SideBar = ({collections}) => {
    return (     
    <section id='sidebar'>
        <CollectionContainer collections={collections}  />
    </section> );
}
 
export default SideBar;