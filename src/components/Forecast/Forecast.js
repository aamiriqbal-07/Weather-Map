import React from 'react';
import { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css'


const Forecast = () => {
    
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('imperial');
    const uriEncodedCity = encodeURIComponent(city);
   let [responseObj, setResponseObj] = useState({});
   function getForecast(e) {

    e.preventDefault();
    if (city.length === 0) {
        return setError(true);
    }
    setError(false);
    fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "e65d70816bmsh4510e844af62f18p17bdebjsn7454634f560f",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(response => 
    response.json()
)
.then(responseObj => {

    setResponseObj(responseObj);
    setLoading(false);
})
.catch(err => {
    setError(true);
    setLoading(false);
    console.error(err.status);
});

}
   return (
    <div>
        <h2>Find Current Weather Conditions</h2>
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={classes.textInput}
                    />
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label className={classes.Radio}>
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className={classes.Button} type="submit">Get Forecast</button>
            </form>

        {error === true ?
            <div><p>Please enter a city Name</p></div> :

            <Conditions responseObj={responseObj} 
            error={error}
            loading={loading}/>
            }
    </div>
   )
}

export default Forecast;