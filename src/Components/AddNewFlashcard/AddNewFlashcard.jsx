import axios from 'axios';
import React, { useState } from 'react';


const AddNewFlashcard = ({getCardsInCollection, collectionId}) => {
    const [word, setWord] = useState('')
    const [definition, setDefinition] = useState('')


    async function addNewFlashcard(newFlashcard){
        let url = "http://127.0.0.1:8000/api/collections/" + collectionId + "/cards/";
        let response = await axios.post(url, newFlashcard)
        // setCards(response.data)
        if (response.status === 201 ){
            await getCardsInCollection(collectionId)
            // await setCards(response.data)
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        let newFlashcard = {
            word: word,
            definition: definition
        };
        addNewFlashcard(newFlashcard)
    }



    return ( 
        <form onSubmit={handleSubmit}>
            <h4>Add New Flashcard</h4>
            <div>
                <label>Word</label>
                <input type="text" onChange={(event) => setWord(event.target.value)} value={word} />
            </div>
            <div>
                <label> Definition</label>
                <input type="text" onChange={(event) => setDefinition(event.target.value)} value={definition} />
            </div>
            <button type='submit'>Submit</button>
        </form>
     );
}
 
export default AddNewFlashcard;