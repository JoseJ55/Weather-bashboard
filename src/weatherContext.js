import React, { createContext, useState } from "react";

export const WeatherContext = createContext();
export const PastContext = createContext();
export const ForcastContext = createContext();

export function WeatherProvider({ children }) {
    const [current, setCurrent] = useState({});
    const [pastCities, setPastCities] = useState([]);
    const [forCast, setForCast] = useState([]);

    return (
        <WeatherContext.Provider value={{current, setCurrent}}>
            <ForcastContext.Provider value={{forCast, setForCast}}>
                <PastContext.Provider value={{pastCities, setPastCities}}>
                    {children}
                </PastContext.Provider>
            </ForcastContext.Provider>
        </WeatherContext.Provider>
    )
}