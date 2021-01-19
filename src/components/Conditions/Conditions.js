import React from 'react';
import Forecast from '../Forecast/Forecast'
import classes from './Conditions.module.css'

const conditions = (props) => {
   return (
       <div className={classes.Wrapper}>
           {props.error && <small>Please add a valid City. {props.responseObj.message}</small>}
           {/* {props.loading && <div className={classes.Loader} />} */}
           {props.responseObj.cod !== 200 ?
                <div>
                    <p><strong>{props.responseObj.message}</strong></p>
                </div>
           : null
           }
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}, {props.responseObj.sys.country} ({props.responseObj.coord.lon}, {props.responseObj.coord.lat})</strong></p>
                   <p>Current Temperature: <strong>{Math.round(props.responseObj.main.temp)} degrees.</strong></p>
                   <p>Humidity: <strong>{Math.round(props.responseObj.main.humidity)}.</strong></p>
                   <p>Air Pressure: <strong>{Math.round(props.responseObj.main.pressure)} pa.</strong></p>
                   <p>Humidity: <strong>{Math.round(props.responseObj.main.humidity)}.</strong></p>
                   <p>Weather: <strong>{props.responseObj.weather[0].description}.</strong></p>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;