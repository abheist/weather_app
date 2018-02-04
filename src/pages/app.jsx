import React from "react";
import "../styles/app.css";
import logo from "../images/climate/Cloud-Rain-Sun.svg";
import thermometerIcon from "../images/Thermometer-50.png";
import weatherIcon from "../images/rain.png";
import windIcon from "../images/wind.png";
import FrequestWeatherConstants from "../components/FrequestWeatherConstants";

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
                            <div className="uppercase font-50 weight-600 margin-top-10">
                                cloud drizzle sun
                            </div>
                            <div className="font-20 weight-200">
                                Partly cloudy starting tomorrow evening
                            </div>
                        </div>
                        <div className="flex-4" />
                    </div>
                    <div className="detailed-frequent-parameters margin-top-60">
                        <div className="flex-row justify-around align-center">
                            <FrequestWeatherConstants
                                icon={thermometerIcon}
                                constantType="Temp"
                                firstParameter={{
                                    unit: "Celsius",
                                    value: "23°"
                                }}
                                secondParameter={{
                                    unit: "Feels like",
                                    value: "25°"
                                }}
                            />
                            <FrequestWeatherConstants
                                icon={weatherIcon}
                                constantType="Rainfall"
                                firstParameter={{
                                    unit: "mm",
                                    value: "20"
                                }}
                                secondParameter={{
                                    unit: "Chances",
                                    value: "10%"
                                }}
                            />
                            <FrequestWeatherConstants
                                icon={windIcon}
                                constantType="Wind"
                                firstParameter={{
                                    unit: "m/sec",
                                    value: "2.16"
                                }}
                                secondParameter={{
                                    unit: "North-North-East",
                                    value: "NNE"
                                }}
                            />
                        </div>
                    </div>
                    <div className="other-parameters" />
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
