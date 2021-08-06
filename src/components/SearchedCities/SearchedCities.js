import React, { useState }from "react";
import "./style.css";

function SearchedCities() {
    // get data from indexdb here
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

    const searchPastCity = (e) => {
        console.log(e.target.value)
    }

    return(
        <div id="searched">
            {fake.map((city) => {
                return (
                    <button className="searchedCity" value={city} onClick={(e) => searchPastCity(e)}>{city}</button>
                )
            })}
        </div>
    )
}

export default SearchedCities;