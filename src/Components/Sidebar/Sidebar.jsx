import React from 'react';

const SideBar = ({collections, getCardsInCollection}) => {
    return (     
    <div>
        <CollectionContainer collections={collections} getCardsInCollection={getCardsInCollection}/>
    </div> );
}
 
export default SideBar;