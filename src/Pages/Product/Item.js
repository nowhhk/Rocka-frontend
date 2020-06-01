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
    this.setState({ mouseOver: true });
  };

  handleOut = () => {
    this.setState({ mouseOver: false });
  };

  render() {
    const { mouseOver } = this.state;
    const { name, description, color, img, price_krw } = this.props;

    return (
      <div className="items">
        <li
          className="item"
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
        >
          {mouseOver ? (
            <div className="back">
              <img className="product-img" src={`${img[1]}`} alt="" />
              <div className="item-info">
                <div className="item-desc">
                  <p className="title">{name}</p>
                  <p> {description}</p>
                  <p>{color}</p>
                </div>
                <div className="price">
                  <p>KRW {price_krw}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="front">
              <img src={`${img[0]}`} alt="" />
            </div>
          )}
        </li>
      </div>
    );
  }
}

export default withRouter(Item);
