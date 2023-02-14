import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/Sidebar';
import CardContainer from './Components/CardContainer/CardContainer';
import './App.css'



function App() {

  const [collections,setCollections] = useState([])
  const [cards, setCards] = useState([{word: 'Welcome to Flashcards please select a collection.', definition: 'Select a collection.'}])
  const [collectionId, setCollectionId] = useState(0)

  useEffect(() => {
    getAllCollections();
    getCardsInCollection(1);
  }, [])
  



  async function getAllCollections(){
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCardsInCollection(collectionId) {
    let url = "http://127.0.0.1:8000/api/collections/" + collectionId + "/cards/";
    let response = await axios.get(url);
    setCards(response.data)
    setCollectionId(collectionId)
    console.log(cards)
  }
  

  return (
    <div className='body'>
      <Header/>
      <div className='col-xs-2' id='sidebar'>
        <SideBar collections={collections} getCardsInCollection={getCardsInCollection}/>
      </div>
      <div className='col-xs-10' id='card-container' >
        <CardContainer cards={cards}  getCardsInCollection={getCardsInCollection}  collectionId={collectionId} setCards={setCards}/>
      </div>
    </div>
  );
}

export default App;
