import React,{ useEffect, useContext, useState } from "react";
import "./style.css";
import axios from "axios";

import Current from "./../Current/Current";
import Future from "./../Future/Future";
import { WeatherContext } from "../../weatherContext"

function Weather() {
    const { current, setCurrent } = useContext(WeatherContext);
    const [currentForCast, setCurrentForCast] = useState([]);


    useEffect(() => {
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +  current.name + "&appid=4efedc1a1f5a11132edead6e391117fd";
        if (current != null) {
            axios.get(url).then((data) => {
                let tempData = []
                data.data.list.map((data) => {
                    if (data.dt_txt.includes("12:00:00")){
                        // console.log(data)
                        tempData.push(data)
                    }
                    // console.log(data.dt_txt )
                })
                // console.log(data.data.list)
                setCurrentForCast(tempData)
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