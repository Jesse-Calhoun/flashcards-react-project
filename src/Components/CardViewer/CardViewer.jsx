const CardViewer = ({card}) => {
    return (
        <section id="card-viewer">
            <div>{card.id}</div>
            <div>{card.word}</div>
             <div>{card.definition}</div>
        </section>
    )}
 
export default CardViewer;