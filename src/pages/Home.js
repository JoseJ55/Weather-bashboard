import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import Cities from "./../components/Cities/Cities";
import Weather from "./../components/Weather/Weather";

function Home() {
    return (
        <div id="homeBody">
            <Header />
            <div id="homeData">
                <Cities />
                <Weather />
            </div>
        </div>
    )
}

export default Home;