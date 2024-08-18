if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, defaultCall);
  } else {
    
  }
  
  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }
  
  function defaultCall() {
    
  }