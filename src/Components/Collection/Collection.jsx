

const Collection = ({collection, getCardsInCollection}) => {
    function handleClick(){
        getCardsInCollection(collection.id)
    }
    return ( 
        <section id='collection-button' >
            <button onClick={handleClick}>{collection.title}</button>
        </section>
     );
}
 
export default Collection;