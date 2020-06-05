import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Stores extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      <div className="store-list">
        <div className="list">
          {/* <div className="number">{this.props.idx}</div> */}
          <div className="type">{this.props.type}</div>
          <div className="name">{this.props.name}</div>
          <div className="tel">{this.props.tel}</div>
          <div className="address">{this.props.address}</div>
          <div className="weekday">{this.props.weekday}</div>
          <a style={{ color: "black" }} href={`${this.props.map}`}>
            <div className="map">
              <i className="fas fa-map-marker-alt"></i>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Stores);
