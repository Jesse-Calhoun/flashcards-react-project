

const Collection = ({collection, getCardsInCollection}) => {

    function handleSubmit(){
        getCardsInCollection(collection.id)
    }

    return ( 
        <button onClick={handleSubmit}>{collection.title}</button>
     );
}
 
export default Collection;