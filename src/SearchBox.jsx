import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';


export default function SearchBox(){

    let [city,setCity] = useState("");
    
    let handleInput = (evt) =>{
        setCity(evt.target.value);
    }
    
    return (
    <div className='container'>
        <h1>Search for the weather</h1>
           <form >
           <TextField id="outlined-basic" label="City Name" variant="outlined" required onChange={handleInput} value={city}/>
           <br></br><br></br>
           <Button variant="contained" type='submit'>Search</Button>

           </form>
    </div>
    )
}