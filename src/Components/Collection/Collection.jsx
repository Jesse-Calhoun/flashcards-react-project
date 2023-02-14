import './Collection.css'

const Collection = ({collection, getCardsInCollection}) => {
    function handleClick(){
        getCardsInCollection(collection.id)
    }
    return ( 
        <section id='collection-button' className="align-left" >
            <button onClick={handleClick} className='collection-button'>{collection.title}</button>
        </section>
     );
}
 
export default Collection;