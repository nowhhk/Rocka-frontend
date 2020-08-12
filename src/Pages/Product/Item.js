import "./Item.scss";

import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Item extends Component {
  render() {
    const {
      name,
      description,
      color,
      outer_front_image_url,
      outer_back_image_url,
      price_krw,
    } = this.props;

    //color배열안의 객체의 image_url값을 이미지로 전환
    const colors = [];
    for (let i in color) {
      colors.push(color[i].image_url);
    }
    const url = colors.map((color, idx) => <img src={`${color}`} alt="" />);

    // 15000.00 형식으로오는 price_krw값을 15,000 형식으로 변환
    const price_krw_subst = price_krw.slice(0, -3);
    const price = Number(price_krw_subst).toLocaleString();

    return (
      <li className="item">
        <div className="front">
          <img src={`${outer_front_image_url}`} alt="" />

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
                <p className="color">{url}</p>
              </div>
              <div className="price">
                <p>KRW {price}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(Item);
