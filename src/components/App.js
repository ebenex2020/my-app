import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import Error from "./Error";

class App extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => this.setState({ lat: pos.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }

  locationDisplay() {
    if (this.state.lat && !this.state.errMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errMsg) {
      return <Error err={this.state.errMsg} />;
    }
    return (
      <div>
        <Spinner message="Please Allow the location changes" />
      </div>
    );
  }

  render() {
    return <div>{this.locationDisplay()}</div>;
  }
}

export default App;
