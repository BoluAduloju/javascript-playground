const apikey = "46f80a02ecae410460d59960ded6e1c6";
const weatherDataEl = documnet.getElementById("weather-data");
const cityInputEl = documnet.getElemntById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputEl.value;
    console.log(city.Value);
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
       if(!response.ok){
        throw new Error("Network response was not ok")
       }

       const data = await response.json()

       console.log(data);
    } catch(error){

    }
}

