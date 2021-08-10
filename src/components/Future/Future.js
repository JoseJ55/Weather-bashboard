import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";

import {BiSun} from "react-icons/bi";
import { WeatherContext } from "./../../weatherContext"

function Future() {
    const { current, setCurrent } = useContext(WeatherContext);
    const [date, SetDate] = useState("");
    const [currentForCast, setCurrentForCast] = useState({});
    console.log(current)
    console.log(currentForCast)
    
    useEffect(() => {
        var today = new Date();
        SetDate(`${parseInt(today.getMonth()+1)}/${today.getDate()}/${today.getFullYear()}`)
        
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +  current.name + "&appid=4efedc1a1f5a11132edead6e391117fd";
        if (current != null) {
            axios.get(url).then((data) => {
                setCurrentForCast(data.data)
            })
        }
    }, [])

    useEffect(() => {
        var url = "https://api.openweathermap.org/data/2.5/forecast?q=" +  current.name + "&appid=4efedc1a1f5a11132edead6e391117fd";
        axios.get(url).then((data) => {
            setCurrentForCast(data.data)
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

    const futureData = () => {
        let num = 3;
        // Object.keys(currentForCast.list[num]).map(([key, value]) => {
        for(var i = 0; i < 5; i++){
            // console.log(key, value)
            // let num = 3;
            return(
                <div className="day">
                    <h3 className="dayDate">{currentForCast.list[num].dt_txt}</h3>
                    <p>{currentForCast.list[num].weather[0].icon}</p>
                    <p>Temp: {currentForCast.list[num].main.temp}*F</p>
                    <p>Humidity: {currentForCast.list[num].main.humidity}%</p>
                    {num += 8}
                </div>
            )
        }
    }

    return (
        <div id="future">
            <p id="futureTitle"><strong>5-Day Focast</strong></p>
            <div id="days">
            {/* {current.main != null ? */}
                {currentForCast == null ? 
                    <p></p>
                    :
                    {futureData}
                    // let num = 3;
                    // Object.keys(currentForCast.list[num]).map(([key, value]) => {
                    //     console.log(key, value)
                    //     // let num = 3;
                    //     // return(
                    //     //     <div className="day">
                    //     //         <h3 className="dayDate">{data.list[num].dt_txt}</h3>
                    //     //         <p>{data.icon}</p>
                    //     //         <p>Temp: {data.list[num].main.temp}*F</p>
                    //     //         <p>Humidity: {data.list[num].main.humidity}%</p>
                    //     //         {num += 8}
                    //     //     </div>
                    //     // )
                    // })
                }
                {/* : */}

            {/* } */}
            </div>
        </div>
    )
}

export default Future;