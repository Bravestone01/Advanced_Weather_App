const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '25d33acc09msh041d5dd67aff89dp108720jsn25a53fc8daf0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city;
    

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='  + city , options)
.then(response => response.json())
.then((response) => {
  
    console.log(response)
    // cloud_pct.innerHTML = response.cloud_pct 
    temp.innerHTML = response.temp +'°C'
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like 
    humidity.innerHTML = response.humidity +"%"
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp +'°C'
    max_temp.innerHTML = response.max_temp +'°C'
    wind_speed.innerHTML = response.wind_speed + " km/hr"
    wind_speed2.innerHTML = response.wind_speed 
    wind_degrees.innerHTML = response.wind_degrees 
    sunrise.innerHTML = response.sunrise 
    sunset.innerHTML = response.sunset 

})
.catch(err => console.error(err));};

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Karachi");


// Fetch weather data for Dubai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Dubai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);

  cloud_pct3.innerHTML = response.cloud_pct
  temp3.innerHTML = response.temp +'°C'
    feels_like3.innerHTML = response.feels_like 
    humidity3.innerHTML = response.humidity +"%"
    min_temp3.innerHTML = response.min_temp +'°C'
    max_temp3.innerHTML = response.max_temp +'°C'
    wind_speed3.innerHTML = response.wind_speed + "km/hr"
    wind_degrees3.innerHTML = response.wind_degrees 
    sunrise3.innerHTML = response.sunrise 
    sunset3.innerHTML = response.sunset 
  

        // Handle Dubai weather data here
    })
    .catch(err => console.error(err));

    


// Fetch weather data for Hyderabad
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad', options)
.then(response => response.json())
.then((response) => {
    console.log(response);

    cloud_pct4.innerHTML = response.cloud_pct
    temp4.innerHTML = response.temp+'°C'
      feels_like4.innerHTML = response.feels_like 
      humidity4.innerHTML = response.humidity + "%"
      min_temp4.innerHTML = response.min_temp +'°C'
      max_temp4.innerHTML = response.max_temp +'°C'
      wind_speed4.innerHTML = response.wind_speed + "km/hr"
      wind_degrees4.innerHTML = response.wind_degrees 
      sunrise4.innerHTML = response.sunrise 
      sunset4.innerHTML = response.sunset 
    // Handle Hyderabad weather data here
})
.catch(err => console.error(err));



// Fetch weather data for Nawabshah
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Nawabshah', options)
.then(response => response.json())
.then((response) => {
    console.log(response);

    cloud_pct5.innerHTML = response.cloud_pct
    temp5.innerHTML = response.temp+'°C'
    feels_like5.innerHTML = response.feels_like
    humidity5.innerHTML = response.humidity + " %"
    min_temp5.innerHTML = response.min_temp+'°C'
    max_temp5.innerHTML = response.max_temp+'°C'
    wind_speed5.innerHTML = response.wind_speed + "km/hr"
    wind_degrees5.innerHTML = response.wind_degrees
    sunrise5.innerHTML = response.sunrise
    sunset5.innerHTML = response.sunset

    // Handle Nawabshah weather data here
})
.catch(err => console.error(err));



// Fetch weather data for Matli
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Matli', options)
.then(response => response.json())
.then((response) => {
    console.log(response);
    cloud_pct6.innerHTML = response.cloud_pct
    temp6.innerHTML = response.temp+'°C'
    feels_like6.innerHTML = response.feels_like
    humidity6.innerHTML = response.humidity + " %"
    min_temp6.innerHTML = response.min_temp+'°C'
    max_temp6.innerHTML = response.max_temp+'°C'
    wind_speed6.innerHTML = response.wind_speed + "km/hr"
    wind_degrees6.innerHTML = response.wind_degrees
    sunrise6.innerHTML = response.sunrise
    sunset6.innerHTML = response.sunset

    // Handle Matli weather data here
})
.catch(err => console.error(err));


