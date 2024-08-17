import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import coldImage from './assets/cold.jpg';
import hotImage from './assets/hot.jpg';
import rainImage from './assets/rain.jpg';

export default function InfoBox() {
  let info = {
    temp: 18,
    temp_max: 32.2,
    temp_min: 30,
    humidity: 47,
    feelsLike: 'heaven',
    weather: 'haze',
  };

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
          image={info.temp > 30 ? hotImage : info.temp < 15 ? coldImage : rainImage}
          title="weather image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Temperature: {info.temp}°C
            <br />
            Max Temp: {info.temp_max}°C
            <br />
            Min Temp: {info.temp_min}°C
            <br />
            Humidity: {info.humidity}%
            <br />
            Feels Like: {info.feelsLike}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
