import React from "react";
import "../styles/app.css";
import logo from "../images/climate/Cloud-Rain-Sun.svg";
import thermometer from "../images/Thermometer-50.png";

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
                            <div className="frequent-box current-temperature-box flex-row align-center">
                                <div className="flex-column align-center">
                                    <div
                                        style={{
                                            height: 100,
                                            width: 100,
                                            backgroundImage: `url(${thermometer})`,
                                            backgroundSize: "contain",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat"
                                        }}
                                    />
                                    <p className="margin-top-20 font-20">
                                        Temp
                                    </p>
                                </div>
                                <div
                                    style={{
                                        marginLeft: 30
                                    }}
                                >
                                    <div>
                                        <p className="font-90 weight-500">
                                            23°
                                        </p>
                                        <p className="font-10 margin-top--10 weight-200">
                                            Celsius
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-60 weight-500">
                                            25°
                                        </p>
                                        <p className="font-14 margin-top--6 weight-200">
                                            Feels like
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="frequent-box current-rainfall-box">
                                current rainfall
                            </div>
                            <div className="frequent-box current-wind-box">
                                current wind
                            </div>
                        </div>
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
