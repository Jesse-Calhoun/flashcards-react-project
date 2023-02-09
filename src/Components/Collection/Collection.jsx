

const Collection = ({collection, getCardsInCollection}) => {
    function handleClick(){
        getCardsInCollection(collection)
    }
    return ( 
        <button onClick={handleClick}>{collection.title}</button>
     );
}
 
export default Collection;