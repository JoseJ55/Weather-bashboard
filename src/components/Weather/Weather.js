import React from "react";
import "./style.css";

import Current from "./../Current/Current";
import Future from "./../Future/Future";

function Weather() {
    return(
        <div id="weather">
            <Current />
            <Future />
        </div>
    )
}

export default Weather;