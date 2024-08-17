import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox(){

  
    let [city,setCity] = useState("");

    const getData = async ()=>{
        const respons = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonResons = await respons.json();
        console.log(jsonResons);
    }

    

    const handleInput = (evt) =>{
        setCity(evt.target.value);
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        getData();
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