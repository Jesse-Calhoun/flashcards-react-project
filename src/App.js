import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/Sidebar';
import CardContainer from './Components/CardContainer/CardContainer';
// import Main from './Components/Main/Main';



function App() {

  const [collections,setCollections] = useState([])
  const [cards, setCards] = useState([{word: 'Select a collection', definition: 'Select a collection.'}])

  useEffect(() => {
    getAllCollections();
    getCardsInCollection(1)
  }, [])



  async function getAllCollections(){
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCardsInCollection(collectionId) {
    let url = "http://127.0.0.1:8000/api/collections/" + collectionId + "/cards/";
    const response = await axios.get(url);
    setCards(response.data)
    console.log(cards)
  }

  return (
    <div>
      <Header/>
      {/* <Main collections={collections}/> */}
      <SideBar collections={collections} getCardsInCollection={getCardsInCollection} />
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
