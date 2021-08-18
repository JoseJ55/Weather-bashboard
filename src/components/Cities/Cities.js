import React from "react";
import "./style.css";

import SearchBar from "./../SearchBar/SearchBar";
import SearchedCities from "./../SearchedCities/SearchedCities";

function Cities() {
    return (
        <div id="SearchButtons">
            <SearchBar />
            <SearchedCities />
        </div>
    )
}

export default Cities;