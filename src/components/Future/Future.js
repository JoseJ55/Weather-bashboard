import React, { useState, useContext, useLayoutEffect } from "react";
import "./style.css";
import axios from "axios";

import { WeatherContext } from "../../weatherContext"

function Future() {
    // This component renders the forcast for the next five days for the city
    // searched and the current time.
    const { current } = useContext(WeatherContext);
    const [currentForCast, setCurrentForCast] = useState([]);
    const [loading, setLoading] = useState(true)

    // This effect gets the forcast of the current city searched, and if there
    // isn't a current city yet it will only render "Loading".
    useLayoutEffect(() => {
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${current.name}&appid=4efedc1a1f5a11132edead6e391117fd`;
        
        axios.get(url).then((data) => {
            let tempData = []
            data.data.list.map((data) => {
                if (data.dt_txt.includes("12:00:00")){
                    tempData.push(data)
                }
            })

            setCurrentForCast(tempData)
            setLoading(false)
        }).catch((err) => {
            // console.log(err)
            setLoading(true)
        })

    }, [current])

    // This function get the date of the forcasted day and formats them to "mm/dd/yyyy".
    const getDate = (text) => {
        let tempText = text.split(" ")
        let t = tempText[0].split("-")
        let newtext = `${t[1]}/${t[2]}/${t[0]}`
        return(newtext)
    }

    return (
        <div id="future">
            <p id="futureTitle"><strong>5-Day Focast</strong></p>
            <div id="days">
                {loading ? 
                    <p>Loading...</p>
                    :
                    currentForCast.map((data) => {
                        return(
                            <div className="day">
                                <h3 className="dayDate">{getDate(data.dt_txt)}</h3>
                                <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/>
                                <p>Temp: {Math.round((1.8 * (data.main.temp - 273) + 32) *10) /10}*F</p>
                                <p>Humidity: {data.main.humidity}%</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Future;