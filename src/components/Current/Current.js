import React from "react";
import "./style.css";

function Current() {
    return (
        <div id="current">
            <div id="title">
                <p id="cityName"><strong>City Name</strong></p>
                <p id="date"><strong>(8/2/2021)</strong></p>
            </div>
            <div id="currentData">
                <p id="cityTemp">Temperature: *F</p>
                <p id="cityHumidity">Humidity: %</p>
                <p id="cityWind">Wind Speed: MPH</p>
                <p id="cityUV">UV Index: </p>
            </div>
            
        </div>
    )
}

export default Current;