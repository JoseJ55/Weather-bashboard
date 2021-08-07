import React, { useContext, useEffect, useState } from "react";
import "./style.css";

import { WeatherContext } from "./../../weatherContext"

function Current() {
    const { current, setCurrent } = useContext(WeatherContext);
    const [date, SetDate] = useState("");
    console.log(current)

    useEffect(() => {
        var today = new Date();
        SetDate(`${parseInt(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`)
    })
    
    return (
        <div id="current">
            <div id="title">
                <p id="cityName"><strong>{current.name} </strong></p>
                <p id="date"><strong>{`(${date})`}</strong></p>
            </div>
            <div id="currentData">
                <p id="cityTemp">Temperature: {current.main.temp}*F</p>
                <p id="cityHumidity">Humidity:{current.main.humidity} %</p>
                <p id="cityWind">Wind Speed: {current.wind.speed}MPH</p>
                <p id="cityUV">UV Index: </p>
            </div>
        </div> 
    )
}

export default Current;