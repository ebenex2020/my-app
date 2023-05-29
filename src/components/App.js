import React from "react";

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
      return <div>{this.state.lat}</div>;
    } else if (!this.state.lat && this.state.errMsg) {
      return <div>{this.state.errMsg}</div>;
    }
    return <div>Loading...</div>;
  }

  render() {
    return <div>{this.locationDisplay()}</div>;
  }
}

export default App;
