import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import "./style.css";
import axios from "axios";

import {BiSun} from "react-icons/bi";
import { WeatherContext } from "../../weatherContext"

function Future() {
    const { current } = useContext(WeatherContext);
    const [date, SetDate] = useState("");
    const [currentForCast, setCurrentForCast] = useState([]);
    const [loading, setLoading] = useState(true)
    const [lower, setLower] = useState("")
    console.log(current)
    
    useEffect(() => {
        var today = new Date();
        SetDate(`${parseInt(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`)

        // this is undefined, but thign work when commented out. Need to find
        // out how to make it no undefined.
        setLower(current.name)
    }, [])

    useLayoutEffect(() => {
        // setLower(current.name)
        console.log(lower)
        console.log(current.name)
        var url = `https://api.openweathermap.org/data/2.5/forecast?q=${current.name}&appid=4efedc1a1f5a11132edead6e391117fd`;
        
        console.log(url)

        axios.get(url).then((data) => {
            console.log(data)
            let tempData = []
            data.data.list.map((data) => {
                if (data.dt_txt.includes("12:00:00")){
                    tempData.push(data)
                }
            })
            // console.log(tempData)
            //this is undefined on the second map on line 58.
            setCurrentForCast(tempData)
            setLoading(false)
        }).catch((err) => {
            // console.log(err)
            setLoading(true)
        })

    }, [current])

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
                        // console.log(data)
                        // console.log(lower)
                        return(
                            <div className="day">
                                <h3 className="dayDate">{getDate(data.dt_txt)}</h3>
                                <p>{data.weather[0].icon}</p>
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