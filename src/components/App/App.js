import React, { Component } from "react";
import css from "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div>
                        <div className="app-brand">
                            <div className="logo" />
                            <h1 className="text-center margin-top-10 color-white">
                                WEATHER APP
                            </h1>
                        </div>
                        <div className="current-weather-card text-shadow">
                            20°C
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="container-card">weather card</div>
                </div>
            </div>
        );
    }
}

export default App;
