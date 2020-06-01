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
    const {
      name,
      description,
      // color,
      outer_front_image_url,
      outer_back_image_url,
      price_krw,
    } = this.props;

    // const colors = [];
    // for (let i in color) {
    //   colors.push(color[i].image_url);
    // }
    // const url = colors.map((color) => `<img src="${color}"alt=""/>`);

    const price_krw_subst = price_krw.slice(0, -3);

    return (
      <div className="items">
        <li
          className="item"
          onMouseOver={this.handleOver}
          onMouseOut={this.handleOut}
        >
          {mouseOver ? (
            <div className="back">
              <img
                className="product-img"
                src={`${outer_back_image_url}`}
                alt=""
              />
              <div className="item-info">
                <div className="item-desc">
                  <p className="title">{name}</p>
                  <p> {description}</p>
                  {/* <p>{color}</p> */}
                </div>
                <div className="price">
                  <p>KRW {price_krw_subst}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="front">
              <img src={`${outer_front_image_url}`} alt="" />
            </div>
          )}
        </li>
      </div>
    );
  }
}

export default withRouter(Item);
