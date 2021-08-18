import React, { useContext, useEffect }from "react";
import "./style.css";
import axios from "axios";

import { PastContext, WeatherContext } from "./../../weatherContext"

function SearchedCities() {
    // This component renders the past citys search by the user from the
    // localstorage in the browser.
    const {pastCities} = useContext(PastContext);
    const { setCurrent } = useContext(WeatherContext);

    //This effect is just to update component.
    useEffect(() => {
        console.log("update")
    }, [pastCities])

    const storedCity = JSON.parse(localStorage.getItem("oldCities"))

    // This function get the data for the city clicked on from the past.
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