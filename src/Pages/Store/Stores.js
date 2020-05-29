import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Stores extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="store-list">
        <div className="list">
          <div className="number">{this.props.number}</div>
          <div className="type">{this.props.type}</div>
          <div className="name">{this.props.name}</div>
          <div className="tel">{this.props.tel}</div>
          <div className="address">{this.props.address}</div>
          <div className="weekday">{this.props.weekday}</div>
          <a href={`${this.props.map}`}>
            <div className="map">
              <i class="fas fa-map-marker-alt"></i>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Stores);
