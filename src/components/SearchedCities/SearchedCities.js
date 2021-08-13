import React, { useState, useContext, useEffect }from "react";
import "./style.css";
import axios from "axios";

import { PastContext, WeatherContext } from "./../../weatherContext"

function SearchedCities() {
    const {pastCities} = useContext(PastContext);
    const { setCurrent } = useContext(WeatherContext);

    useEffect(() => {
        console.log("update")
    }, [pastCities])

    const [fake, setFake] = useState([
        "New York", 
        "Seattle", 
        "Los Angeles",
        "Austin",
        "Hesperia",
        "VictorVille",
        "New Jursey",
        "Los Vegas"
    ])
    const storedCity = JSON.parse(localStorage.getItem("oldCities"))

    const searchPastCity = (e) => {
        // console.log(e.target.value)
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + e.target.value + "&appid=4efedc1a1f5a11132edead6e391117fd";
        
        axios.get(url).then((data) => {
            setCurrent(data.data)
        })
    }

    return(
        <div id="searched">
            {storedCity != null ? 
                storedCity.reverse().map((city) => {
                    return (
                        <button className="searchedCity" value={city} onClick={(e) => searchPastCity(e)}>{city}</button>
                    )
                }):
                <p></p>
            }
        </div>
    )
}

export default SearchedCities;