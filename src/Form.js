import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

const DATA = "http://localhost:3004/amiibo"

function Form({setNintendoGameCharacters}) {
    const history = useHistory() // using the use history hook once a form is submitted
    const defaultForm = { // sets form data
        "id": "",
        "amiiboSeries": "",
        "name": "",
        "image": ""
    }
    
    const [formData, setFormData] = useState(defaultForm)//saving the data to be called back by a call back function and resent

    function handleChange(event) { //adding the new character data 
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })

    }

    function handleSubmit (event) {
        event.preventDefault()
        
        fetch(DATA, {
            method: 'Post',
            headers:{
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                id: formData.image,
                amiiboSeries: formData.amiiboSeries,
                name: formData.name,
                image: formData.image
            })
        })

        fetch(DATA)
        .then(response => response.json())
        .then(data => setNintendoGameCharacters(data)) //adding new data to state
        setFormData(defaultForm) // this will empty out the form data
        history.push('/') // this will send you to the home page

    }






    return (
        <div>
         
        <form onSubmit={handleSubmit}>
            <h1>Add New Character</h1>
            <ul>
                <label>
                    Character Game:
                    <input
                    name="amiiboSeries"
                    type="text"
                    placeholder="Character Game"
                    onChange={handleChange}
                    required />
                </label>
            </ul>
            <ul>
                <label>
                    Character Name:
                    <input
                    name="name"
                    type="text"
                    placeholder="Character Name"
                    onChange={handleChange}
                    required />
                </label>
            </ul>
            <ul>
                <label>
                    Image Url:
                    <input
                    name="image"
                    type="text"
                    placeholder="Image Url"
                    onChange={handleChange}
                    required />
                </label>
            </ul>
            <button>Submit</button>
        </form>
        
         </div>
    )

}

export default Form