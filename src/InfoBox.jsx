import React from 'react';
import './InfoBox.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import coldImage from './assets/cold.jpg';
import hotImage from './assets/hot.jpg';
import rainImage from './assets/rain.jpg';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
  

  const theme = useTheme();

  return (
    <div className="infoBox">
      <Card
        sx={{
          maxWidth: 345,
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image={info.humidity>70 ? (info.temp>15 ? rainImage : coldImage) : hotImage  }
          title="weather image"
        />
        <CardContent>
          <div id='cityContainer'>
          <Typography gutterBottom variant="h5" component="div">
            <div>{info.city}</div> <div > {info.humidity>70 ? (info.temp>15 ? <ThunderstormIcon/> : <AcUnitIcon/>) : <WbSunnyIcon/>  }</div>
          </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            Temperature: {info.temp}°C
            <br />
            Max Temp: {info.temp_max}°C
            <br />
            Min Temp: {info.temp_min}°C
            <br />
            Humidity: {info.humidity}%
            <br /> <br />
            The weather can be described as <i>{info.weather}</i> and Feels like {info.feelsLike}°C
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
