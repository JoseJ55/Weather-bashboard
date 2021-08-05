import React, { useState } from "react";
import "./style.css";

import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
    const [searchText, setSearchText] = useState("");

    const searchCity = (e) => {
        console.log(searchText)
        setSearchText("")
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