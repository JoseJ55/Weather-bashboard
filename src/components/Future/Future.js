import React, { useState } from "react";
import "./style.css";

import {BiSun} from "react-icons/bi";

function Future() {
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
            </div>
        </div>
    )
}

export default Future;