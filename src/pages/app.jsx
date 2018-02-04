import React from "react";
import "../styles/app.css";
import logo from "../images/climate/Cloud-Rain-Sun.svg";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="current-weather-container blue-bg">
                    <div className="summary flex-row margin-top-40">
                        <div className="flex-4 flex-row justify-end">
                            <img
                                src={logo}
                                alt="weather app logo"
                                height="150px"
                            />
                        </div>
                        <div className="flex-auto text-center">
                            <div className="font-20">12:00 PM</div>
                            <div className="uppercase font-50 weight-700 margin-top-10">
                                cloud drizzle sun
                            </div>
                            <div className="font-20 weight-200">
                                Partly cloudy starting tomorrow evening
                            </div>
                        </div>
                        <div className="flex-4" />
                    </div>
                    <div className="detailed-frequent-parameters">
                        frequent parameters
                    </div>
                    <div className="other-parameters">other parameters</div>
                </div>
                <div>
                    <div className="app-brand-container" />
                    <div className="search-container" />
                </div>
            </div>
        );
    }
}

export default App;
