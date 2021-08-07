import React, { useContext, useState } from "react";
import axios from "axios";
import "./style.css";

import { AiOutlineSearch } from 'react-icons/ai';
import { WeatherContext, PastContext } from "./../../weatherContext"

function SearchBar() {
    const [searchText, setSearchText] = useState("new york");
    const { current, setCurrent } = useContext(WeatherContext);
    const {pastCities, setPastCities} = useContext(PastContext);

    const store = () => {
        localStorage.setItem("oldCities", JSON.stringify(pastCities))
        // const searchedCities = JSON.parse(localStorage.setItem("Cities", []));
        // searchedCities.push("new york")
    }

    const searchCity = (e) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" +  searchText + "&appid=4efedc1a1f5a11132edead6e391117fd";
        
        axios.get(url).then((data) => {
            setCurrent(data.data)
        })

        if (pastCities.length < 8){
            setPastCities([...pastCities, searchText])
        } else {
            var [first, ...rest] = pastCities;
            rest.push(searchText)
            setPastCities(rest)
        }

        store();
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