import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Item.scss";

class Item extends Component {
  constructor() {
    super();

    this.state = {
      mouseOver: false,
    };
  }

  // handleOver = (e) => {
  //   this.setState({ mouseOver: true });
  // };

  // handleOut = (e) => {
  //   this.setState({ mouseOver: false }, () => console.log(this.state));
  // };

  render() {
    return (
      <li>
        <div
          className="front"
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
        >
          <img src={`${this.props.img[0]}`} alt="" />
        </div>

        <div className="back">
          <img src={`${this.props.img[1]}`} alt="" />
          <div className="item">
            <div className="item-info">
              <p>{this.props.name}</p>
              <p> {this.props.desc}</p>
              <p>{this.props.color}</p>
            </div>
            <div className="item-price">{this.props.price}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Item);
