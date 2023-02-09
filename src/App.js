import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';


function App() {

  const [collections,setCollections] = useState([])
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCollections();
  }, [])

  useEffect(() => {
    getCardsInCollection();
  }, [cards])

  async function getAllCollections(){
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  
  async function getCardsInCollection(collection) {
    let url = "http://127.0.0.1:8000/api/collections/" + collection.id + "/cards/";
    let response = await axios.get(url);
    setCards(response.data)
  }
 

  return (
    <div>
      <Header/>
      <Sidebar collections={collections} getCardsInCollection={getCardsInCollection} />
    </div>
  );
}

export default App;
