import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import './SearchBox.css';
let CITY;

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default function SearchBox({updataInfo}) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, defaultCall);
    } else {
      getData();
    }
    
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

        getDataFirstCall(latitude,longitude);
    }
    
    function defaultCall() {
      getData();
    }
  },[]);

  const theme = useTheme();

  const getDataFirstCall = async (lat,lon)=>{
  try {
      
    const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const jsonResponse = await response.json();
    

    const result = {
      city:jsonResponse.name,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    
    updataInfo(result);
    setError("");
  } catch (error) {
    setError(error.message);
}
     
  }

  const getData = async () => {
    try {
        CITY = city.trim();
       if(!CITY){
         CITY ="indore";
       }
      const response = await fetch(`${BASE_URL}?q=${CITY}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const jsonResponse = await response.json();

      const result = {
        city:CITY,
        temp: jsonResponse.main.temp,
        temp_max: jsonResponse.main.temp_max,
        temp_min: jsonResponse.main.temp_min,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      
      updataInfo(result);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getData();
    setCity("");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          required
          onChange={handleInput}
          value={city}
          sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }} 
        />

        <br />

        {error && (
          <div className="errorContainer">
            <Stack x={{ width: '20%' }} spacing={2}>
              <Alert severity="error" sx={{ backgroundColor: theme.palette.background.paper, color: theme.palette.text.primary }}>
                {error}
              </Alert>
            </Stack>
          </div>
        )}

        <Button style={{ marginTop: "20px" }} variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
