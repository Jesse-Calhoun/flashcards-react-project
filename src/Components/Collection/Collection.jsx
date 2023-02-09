

const Collection = ({collection, getCardsInCollection}) => {
    function handleClick(){
        getCardsInCollection(collection)
    }
    return ( 
        <section id='collection-button' >
            <button onClick={handleClick}>{collection.title}</button>
        </section>
     );
}
 
export default Collection;