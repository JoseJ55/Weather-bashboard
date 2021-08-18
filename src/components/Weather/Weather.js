import React,{ useEffect, useContext } from "react";
import "./style.css";
import axios from "axios";

import Current from "./../Current/Current";
import Future from "./../Future/Future";
import { WeatherContext } from "../../weatherContext"

function Weather() {
    // This component get the forcast and orginizes the data for the current
    // time for each day. It also holds the other components that render the data.
    const { current } = useContext(WeatherContext);

    useEffect(() => {
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +  current.name + "&appid=4efedc1a1f5a11132edead6e391117fd";
        if (current != null) {
            axios.get(url).then((data) => {
                let tempData = []
                data.data.list.map((data) => {
                    if (data.dt_txt.includes("12:00:00")){
                        tempData.push(data)
                    }
                })
            })
        }
    }, [])

    return(
        <div id="weather">
            <Current />
            <Future />
        </div>
    )
}

export default Weather;