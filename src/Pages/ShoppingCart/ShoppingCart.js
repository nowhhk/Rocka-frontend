import React, { Component } from "react";
// import ShoppingCartList from "./ShoppingCartList";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }));
  }

  render() {
    return (
      <div className="ShoppingCart">
        <div className="allSelector">
          <label class="checkbox-label">
            <input type="checkbox" className="checkbox" />
            <span className="checkbox-custom"></span>
            전체선택 ()
          </label>
          <div className="deleteSelection">선택삭제</div>
        </div>
        {/* <ShoppingCartList data={data} /> */}
        <div className="ShoppingCartBottombox">
          <div className="freeDelivery">
            • 2만원 이상 구매 시 무료배송됩니다.
          </div>
          <div className="statement">
            <div className="price">
              <div className="priceBox">
                <p className="priceText">상품금액</p>
                <p className="priceProduct">KRW</p>
              </div>
              <div className="priceBox">
                <p className="priceText">배송비</p>
                <p className="priceProduct">KRW</p>
              </div>
            </div>
            <div className="total">
              <p className="priceText">TOTAL</p>
              <p className="priceProductBig">KRW</p>
            </div>
            <div className="orderButton">
              <div className="allOrderButton">전체상품 주문</div>
              <div className="orderSelectedProducts">선택상품 주문</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
