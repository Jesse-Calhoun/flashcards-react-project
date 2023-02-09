


const CollectionContainer = ({collections, getCardsInCollection}) => {
    
    const collectionOptions = collections.map((collection) => {
        return <button onClick={handleClick}>{collection.title}</button>
        function handleClick(){
            getCardsInCollection(collection)
        }
    });
    
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