import React, { Component } from "react";
import "./ShoppingCartList.scss";

class ShoppingCartList extends Component {
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
                  <img src={cartData.img[0]} alt="" />
                </div>
                <div className="savingProductInfo">
                  <div className="savingProductInfoMain">
                    <div className="savingProductInfoTitle">
                      {cartData.name}
                    </div>
                    <div className="savingProductInfoAmount"></div>
                    <div className="savingProductInfoAllPrice">
                      KRW {cartData.price}{" "}
                    </div>
                  </div>
                  <div className="savingProductInfoLeft">
                    <div className="savingProductInfoLeftBox">
                      <div className="savingProductInfoPrice">
                        KRW {cartData.price}{" "}
                      </div>
                      <div className="savingProductInfoOption">
                        [옵션:{cartData.color}]
                      </div>
                    </div>
                    <span className="savingProductInfoDelete">삭제</span>
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
