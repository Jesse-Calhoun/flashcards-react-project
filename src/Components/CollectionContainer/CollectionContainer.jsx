import Collection from "../Collection/Collection";


const CollectionContainer = ({collections, getCardsInCollection}) => {
    
    const collectionOptions = collections.map((collection) => <Collection collection={collection} getCardsInCollection={getCardsInCollection} />);
    
    return ( 
        <section id='collection-container' >
            <h3>Collections</h3>
            <ul>
                {collectionOptions}
            </ul>
        </section>
     );
}

export default CollectionContainer;