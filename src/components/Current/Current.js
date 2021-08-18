import React, { useContext, useEffect, useState } from "react";
import "./style.css";

import { WeatherContext } from "./../../weatherContext"

function Current() {
    // This component gets data for teh currnt city and renders it.
    const { current } = useContext(WeatherContext);
    const [date, SetDate] = useState("");

    // This effect get the current date and formats it.
    useEffect(() => {
        var today = new Date();
        SetDate(`${parseInt(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`)
    }, [])
    
    return (
        
        <div id="current">
            <div id="title">
                <p id="cityName"><strong>{current.name} </strong></p>
                <p id="date"><strong>{`(${date})`}</strong></p>
            </div>
            <div id="currentData">
                {current.main != null ?
                    <>
                    <img src={`http://openweathermap.org/img/w/${current.weather[0].icon}.png`} alt="weather icon"/>
                    <p id="cityTemp">Temperature: {Math.round((1.8 * (current.main.temp - 273) + 32) *10) /10}*F</p>
                    <p id="cityHumidity">Humidity:{current.main.humidity} %</p>
                    <p id="cityWind">Wind Speed: {current.wind.speed}MPH</p>
                    </>
                    :
                    <>
                    <p id="cityTemp">Temperature: 0*F</p>
                    <p id="cityHumidity">Humidity: 0%</p>
                    <p id="cityWind">Wind Speed: MPH</p>
                    </>
                }
            </div>
        </div> 
    )
}

export default Current;