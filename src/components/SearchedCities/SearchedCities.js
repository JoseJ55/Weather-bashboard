import React, { useState, useContext, useEffect }from "react";
import "./style.css";

import { PastContext } from "./../../weatherContext"

function SearchedCities() {
    const {pastCities, setPastCities} = useContext(PastContext);
    // get data from indexdb here

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
        console.log(e.target.value)
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