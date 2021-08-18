import React, { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";
import "./style.css";

import { AiOutlineSearch } from 'react-icons/ai';
import { WeatherContext, PastContext } from "./../../weatherContext"

function SearchBar() {
    // This componenet get data from the input box and searchs the current city
    // that need to be searched for.
    const [searchText, setSearchText] = useState("");
    const [add, setAdd] = useState(false)
    const { setCurrent } = useContext(WeatherContext);
    const {pastCities, setPastCities} = useContext(PastContext);
    const firstUpdate = useRef(true)

    // This effect get the last city searched fromt he local storage.
    useEffect(() => {
        const pastCity = JSON.parse(localStorage.getItem("oldCities"))
        if(pastCity != null){
            if(pastCity.length !== 0){
                setPastCities(pastCity)
                past(pastCity.reverse()[0])
            }
        }
    }, [])

    // updates local storage when a new city is entered. (Can reference for
    // later for making useeffect not render imidately.)
    useEffect(() => {
        if(firstUpdate.current){
            firstUpdate.current = false;
            return;
        }
        
        console.log(pastCities)
        localStorage.setItem("oldCities", JSON.stringify(pastCities))
    }, [add])

    // Ths function get data for the prevoius city searched when the user exited
    // the page.
    const past = (city) => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4efedc1a1f5a11132edead6e391117fd";
        
        axios.get(url).then((data) => {
            setCurrent(data.data)
        })
    }

    // This function get data for the searched city and removes a past city if
    // the amount reachs 8.
    const searchCity = () => {
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchText + "&appid=4efedc1a1f5a11132edead6e391117fd";
        console.log(url)

        axios.get(url).then((data) => {
            setCurrent(data.data)
        })

        if (pastCities.length+1 < 9){
            setPastCities([...pastCities, searchText])
        } else {
            // This variable is here to get the everything except the first item
            // which is going to be deleted.
            var [first, ...rest] = pastCities;
            rest.push(searchText)
            setPastCities(rest)
        }
        setAdd(!add);
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