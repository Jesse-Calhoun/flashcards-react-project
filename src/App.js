import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Sidebar from './Components/Sidebar/Sidebar';
// import Header from './Components/Header/Header';
// import CardContainer from './Components/CardContainer/CardContainer';


function App() {

  const [collections,setCollections] = useState([])
  // const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCollections();
  }, [])

  // useEffect(() => {
  //   getCardsInCollection();
  // }, [])

  async function getAllCollections(){
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  
  // async function getCardsInCollection(collection) {
  //   collection.id = 2
  //   let url = "http://127.0.0.1:8000/api/collections/" + collection.id + "/cards/";
  //   const response = await axios.get(url);
  //   setCards(response.data)
  // }

  // getAllCollections()
  console.log(collections)
  // console.log(cards) 

  return (
    <div id='app'>
      <h3>Collections</h3>
      {/* <button onClick={getCardsInCollection}>Flutter</button> */}
      {/* <Header/>
      <Sidebar collections={collections} getCardsInCollection={getCardsInCollection} getAllCollections={getAllCollections} />
      <CardContainer cards={cards}/> */}
    </div>
  );
}

export default App;
