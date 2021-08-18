import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import { WeatherProvider } from "./weatherContext";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </WeatherProvider>
  );
}

export default App;
