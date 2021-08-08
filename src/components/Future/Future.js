import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";

import {BiSun} from "react-icons/bi";
import { WeatherContext } from "./../../weatherContext"

function Future() {
    const { current, setCurrent } = useContext(WeatherContext);
    const [date, SetDate] = useState("");
    const [currentForCast, setCurrentForCast] = useState([]);

    useEffect(() => {
        var today = new Date();
        SetDate(`${parseInt(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`)
    }, [])

    useEffect(() => {
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +  current.name.toLowerCase() + "&appid=4efedc1a1f5a11132edead6e391117fd"
        
        axios.get(url).then((data) => {
            console.log(data)
        })
    }, [current])

    const [fake, setFake] = useState([
        {
            date: "8/3/2021",
            icon: <BiSun/>,
            temp: 58,
            humidity: 85
        },
        {
            date: "8/4/2021",
            icon: <BiSun/>,
            temp: 58,
            humidity: 85
        },
        {
            date: "8/5/2021",
            icon: <BiSun/>,
            temp: 58,
            humidity: 85
        },
        {
            date: "8/6/2021",
            icon: <BiSun/>,
            temp: 58,
            humidity: 85
        },
        {
            date: "8/7/2021",
            icon: <BiSun/>,
            temp: 58,
            humidity: 85
        }
    ])

    return (
        <div id="future">
            <p id="futureTitle"><strong>5-Day Focast</strong></p>
            <div id="days">
            {/* {current.main != null ? */}
                {fake.map((data) => {
                    return(
                        <div className="day">
                            <h3 className="dayDate">{data.date}</h3>
                            <p>{data.icon}</p>
                            <p>Temp: {data.temp}*F</p>
                            <p>Humidity: {data.humidity}%</p>
                        </div>
                    )
                })}
                {/* : */}

            {/* } */}
            </div>
        </div>
    )
}

export default Future;