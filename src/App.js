import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header/Header';
import SideBar from './Components/Sidebar/Sidebar';



function App() {

  const [collections,setCollections] = useState([])
  // const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCollections();
  }, [])

  async function getAllCollections(){
    const response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  return (
    <div>
      <Header/>
      <SideBar collections={collections}/>
    </div>
  );
}

export default App;
