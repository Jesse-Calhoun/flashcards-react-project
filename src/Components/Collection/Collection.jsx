

const Collection = ({collection, getCardsInCollection, chosenCollection, setChosenCollection}) => {
    function handleClick(){
        setChosenCollection(collection)
        getCardsInCollection(chosenCollection)
    }
    return ( 
        <section id='collection-button' >
            <button onClick={handleClick}>{collection.title}</button>
        </section>
     );
}
 
export default Collection;