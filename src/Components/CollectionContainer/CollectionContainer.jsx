import Collection from "../Collection/Collection";
import './CollectionContainer.css'


const CollectionContainer = ({collections, getCardsInCollection }) => {
    
    const collectionOptions = collections.map((collection) => <Collection collection={collection} getCardsInCollection={getCardsInCollection}/>);
    
    return ( 
        <section id='collection-container' >
            <em><h2 className="align-center">Collections</h2></em>
            <ul id='collection-options'>
                {collectionOptions}
            </ul>
        </section>
     );
}

export default CollectionContainer;