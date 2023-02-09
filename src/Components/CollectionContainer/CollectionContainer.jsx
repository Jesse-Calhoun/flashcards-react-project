import Collection from "../Collection/Collection";


const CollectionContainer = ({collections}) => {
    const collectionOptions = collections.map((collection) => <Collection collection={collection} />)
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