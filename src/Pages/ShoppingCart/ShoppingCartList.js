import React, { Component } from "react";
import "./ShoppingCartList.scss";

class ShoppingCartList extends Component {
  state = {};

  render() {
    return (
      <div className="savingProduct">
        <ul>
          {this.props.data.map((cartData) => {
            return (
              <li>
                <label class="checkbox-label">
                  <input type="checkbox" className="checkbox" />
                  <span className="checkbox-custom"></span>
                </label>
                <div className="savingProductImg">
                  <img src={cartData.outer_front_image_url} alt="" />
                </div>
                <div className="savingProductInfo">
                  <div className="savingProductInfoMain">
                    <div className="savingProductInfoTitle">
                      {cartData.name}
                    </div>
                    <div className="savingProductInfoAmount">
                      <button>-</button>
                      {cartData.oder_quantity}
                      <button>+</button>
                    </div>
                    <div className="savingProductInfoAllPrice">
                      KRW {cartData.price_krw * cartData.oder_quantity}
                    </div>
                  </div>
                  <div className="savingProductInfoLeft">
                    <div className="savingProductInfoLeftBox">
                      <div className="savingProductInfoPrice">
                        KRW {cartData.price_krw}
                      </div>
                      <div className="savingProductInfoOption">
                        [옵션: {cartData.color_name}]
                      </div>
                    </div>
                    <span
                      onClick={this.props.handleDelete}
                      className="savingProductInfoDelete"
                    >
                      삭제
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoppingCartList;
