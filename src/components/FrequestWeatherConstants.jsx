import React from "react";

class FrequestWeatherConstants extends React.Component {
    render() {
        return (
            <div className="frequent-box current-temperature-box flex-row align-center">
                <div className="flex-column align-center">
                    <div
                        style={{
                            height: 100,
                            width: 100,
                            backgroundImage: `url(${this.props.icon})`,
                            backgroundSize: "contain",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />
                    <p className="margin-top-20 font-20">
                        {this.props.constantType}
                    </p>
                </div>
                <div
                    style={{
                        marginLeft: 30
                    }}
                >
                    <div>
                        <p className="font-90 weight-500">
                            {this.props.firstParameter.value}
                        </p>
                        <p className="font-10 margin-top--10 weight-200">
                            {this.props.firstParameter.unit}
                        </p>
                    </div>
                    <div>
                        <p className="font-60 weight-500">
                            {this.props.secondParameter.value}
                        </p>
                        <p className="font-14 margin-top--6 weight-200">
                            {this.props.secondParameter.unit}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FrequestWeatherConstants;
