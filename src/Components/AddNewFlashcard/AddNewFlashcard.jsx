import axios from 'axios';
import React, { useState } from 'react';


const AddNewFlashcard = ({getCardsInCollection, collectionId}) => {
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')


    async function addNewFlashcard(newFlashcard){
        let url = "http://127.0.0.1:8000/api/collections/" + collectionId + "/cards/";
        let response = await axios.post(url, newFlashcard)
        if (response.status === 201 ){
            await getCardsInCollection(collectionId)
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        let newFlashcard = {
            word,
            definition
        };
        addNewFlashcard(newFlashcard)
        setWord('')
        setDefinition('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <h5>Add New Flashcard</h5>
            <div id='new-word-input'>
                <label><h6>Word</h6></label>
                <input type="text" placeholder='New Word'  onChange={(event) => setWord(event.target.value)} value={word} />
            </div>
            <div id='new-def-input' >
                <label> <h6>Definition</h6></label>
                <input type="text" placeholder='New Definition' onChange={(event) => setDefinition(event.target.value)} value={definition} />
            </div>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddNewFlashcard;