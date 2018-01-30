import weather from "openweather-apis";

const API_KEY = "ea969fca13f2aa3cb2d2be176bec518f";
weather.setLang("en");
weather.getAPPID(API_KEY);

get_weather_data = (location = "London") => {
    weather.setCity(location);
    weather.getAllWeather(function(err, JSONObj) {
        if (err) {
            console.log("Error coming" + err);
            return {};
        }
        return JSONObj;
    });
};
