// import React, { useState } from 'react';
// import axios from 'axios';
// import CardContainer from "../CardContainer/CardContainer";
// import SideBar from "../Sidebar/Sidebar";


// const Main = ({collections}) => {

//     const [cards, setCards] = useState([])

//     async function getCardsInCollection(collection) {
//         let url = "http://127.0.0.1:8000/api/collections/" + collection.id + "/cards/";
//         const response = await axios.get(url);
//         setCards(response.data)
//         console.log(cards)
//       }


//     return (
//         <section>
//             <SideBar collections={collections} getCardsInCollection={getCardsInCollection} />
//             <CardContainer cards={cards}/>
//         </section>
//     );
// }
 
// export default Main;