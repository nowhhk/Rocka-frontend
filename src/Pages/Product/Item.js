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

  handleOver = () => {
    this.setState({ mouseOver: true }, () => console.log(this.state));
  };

  handleOut = () => {
    this.setState({ mouseOver: false }, () => console.log(this.state));
  };

  render() {
    const { mouseOver } = this.state;
    const { name, desc, color, img, price } = this.props;

    return (
      <div
        className="item"
        onMouseOver={this.handleOver}
        onMouseOut={this.handleOut}
      >
        {mouseOver ? (
          <div className="back">
            <img src={`${img[1]}`} alt="" />
            <div className="item-info">
              <div className="item-desc">
                <p>{name}</p>
                <p> {desc}</p>
                <p>{color}</p>
              </div>
              <div className="item-price">{price}</div>
            </div>
          </div>
        ) : (
          <div className="front">
            <img src={`${img[0]}`} alt="" />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Item);