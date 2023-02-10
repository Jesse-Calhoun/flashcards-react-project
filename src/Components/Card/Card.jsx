const Card = ({card}) => {
    return (
        <div>
            <div>{card.word}</div>
            <div>{card.definition}</div>
        </div>
    );
}
 
export default Card;