import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import { API } from "../../config";
import Footer from "../../Component/Footer/Footer";
import ShoppingCartList from "./ShoppingCartList";
import "./ShoppingCart.scss";

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    fetch(`${API}/order`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  }

  addTotal = () => {
    const { data } = this.state;
    let sum = 0;
    for (let i in data) {
      sum += data[i].price_krw * data[i].oder_quantity;
    }
    return sum;
  };

  handleDelete = () => {
    console.log("ㅎㅎ");
  };

  render() {
    const { data } = this.state;
    // console.log(this.state);

    return (
      <div className="wrapper">
        <Nav />
        <div className="ShoppingCart">
          <div className="allSelector">
            <label class="checkbox-label">
              <input type="checkbox" className="checkbox" />
              <span className="checkbox-custom"></span>
              전체선택 ()
            </label>
            <div className="deleteSelection">선택삭제</div>
          </div>
          <ShoppingCartList handleDelete={this.handleDelete} data={data} />
          <div className="ShoppingCartBottombox">
            <div className="freeDelivery">
              • 2만원 이상 구매 시 무료배송됩니다.
            </div>
            <div className="statement">
              <div className="price">
                <div className="priceBox">
                  <p className="priceText">상품금액</p>
                  <p className="priceProduct">{this.addTotal()} KRW</p>
                </div>
                <div className="priceBox">
                  <p className="priceText">배송비</p>
                  <p className="priceProduct">
                    {this.addTotal() >= 20000 ? 0 : 2500} KRW
                  </p>
                </div>
              </div>
              <div className="total">
                <p className="priceText">TOTAL</p>
                <p className="priceProductBig">
                  {/* {this.state.totalCost} */}
                  {this.addTotal() >= 20000
                    ? this.addTotal()
                    : this.addTotal() + 2500}
                  KRW
                </p>
              </div>
              <div className="orderButton">
                <div onclick={this.order} className="allOrderButton">
                  전체상품 주문
                </div>
                <div className="orderSelectedProducts">선택상품 주문</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ShoppingCart;
