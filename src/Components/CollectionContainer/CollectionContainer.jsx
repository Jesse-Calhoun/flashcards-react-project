import Collection from "../Collection/Collection";


const CollectionContainer = ({collections, getCardsInCollection, chosenCollection, setChosenCollection}) => {
    
    const collectionOptions = collections.map((collection) => <Collection collection={collection} getCardsInCollection={getCardsInCollection} chosenCollection={chosenCollection} setChosenCollection={setChosenCollection} />);
    
    return ( 
        <section id='collection-container' >
            <em><div>Collections</div></em>
            <ul id='collection-options'>
                {collectionOptions}
            </ul>
        </section>
     );
}

export default CollectionContainer;