import axios from 'axios';
import React, { useState } from 'react';
import './AddNewFlashcard.css'

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
        <form onSubmit={handleSubmit} className='col-xs-3 add-new-card-box' >
            <h5>Add New Flashcard</h5>
            <div>
                <label>Word</label>
                <div id='new-word-input'>
                    <input type="text" placeholder='New Word'  onChange={(event) => setWord(event.target.value)} value={word} />
                </div>
            </div>
            <div>
                <label>Definition</label>
                <div id='new-def-input' >
                    <input type="text" placeholder='New Definition' onChange={(event) => setDefinition(event.target.value)} value={definition} />
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddNewFlashcard;