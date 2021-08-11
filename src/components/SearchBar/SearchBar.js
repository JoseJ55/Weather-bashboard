import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

import { AiOutlineSearch } from 'react-icons/ai';
import { WeatherContext, PastContext } from "./../../weatherContext"

function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const { setCurrent } = useContext(WeatherContext);
    const {pastCities, setPastCities} = useContext(PastContext);

    useEffect(() => {
        const pastCity = JSON.parse(localStorage.getItem("oldCities"))
        if(pastCity.length !== 0){
            setPastCities(pastCity)
            past(pastCity.reverse()[0])
        }
    }, [])

    const past = (city) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4efedc1a1f5a11132edead6e391117fd";
        
        axios.get(url).then((data) => {
            setCurrent(data.data)
        })
    }

    const searchCity = () => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=4efedc1a1f5a11132edead6e391117fd";
        
        axios.get(url).then((data) => {
            setCurrent(data.data)
        })

        if (pastCities.length+1 < 9){
            setPastCities([...pastCities, searchText])
        } else {
            var [first, ...rest] = pastCities;
            rest.push(searchText)
            setPastCities(rest)
        }

        localStorage.setItem("oldCities", JSON.stringify(pastCities))
        setSearchText("");
    }

    return(
        <div id="search">
            <p>Search for a City: </p>
            <div id="searchArea">
                <input 
                    type="text" 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={() => searchCity()}><AiOutlineSearch size="50%"/></button>
            </div>
        </div>
    )
}

export default SearchBar;