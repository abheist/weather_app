import React, { Component } from "react";
import css from "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div className="app-icon" />
                    <h1>WEATHER APP</h1>
                </div>
                <div className="container">
                    <div className="container-card">weather card</div>
                </div>
            </div>
        );
    }
}

export default App;
