import Collection from "../Collection/Collection";


const CollectionContainer = ({collections, getCardsInCollection}) => {
    const collectionOptions = collections.map((collection) => <Collection collection={collection} getCardsInCollection={getCardsInCollection}/>)
    return ( 
        <div>
            <h3>Collections</h3>
            <ul>
                {collectionOptions}
            </ul>
        </div>
     );
}

export default CollectionContainer;
