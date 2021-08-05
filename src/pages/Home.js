import React from "react";
import "./main.css";

import Header from "./../components/Header/Header";
import Cities from "./../components/Cities/Cities";

function Home() {
    return (
        <div id="homeBody">
            <Header />
            <div id="homeData">
                <Cities />
            </div>
        </div>
    )
}

export default Home;