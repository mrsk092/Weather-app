import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export default function SearchBox(){


   

    let [city,setCity] = useState("");

    let handleInput = (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        setCity("");
    }
    
    return (

    <div className='container'>

        <h1>Search for the weather</h1>
        
           <form onSubmit={handleSubmit} >

           <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleInput} value={city}/>

           <br></br><br></br>

           <Button variant="contained" type='submit'>Search</Button>

           </form>
    </div>
    )
}