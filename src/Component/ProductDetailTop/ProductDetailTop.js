import React, { Component } from "react";
import "./ProductDetailTop.scss";

class ProductDetailTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      color: [
        "카미유",
        "모리스",
        "레너드",
        "이고르",
        "이건뭐",
        "저건뭐",
        "마우스",
        "키보드",
      ],
      hi: false,
      myColorList: "",
      count: 1,
    };
  }

  clickCircle = () => {
    console.log("클릭 이벤트 정상작동");
    this.setState({
      hi: true,
    });
  };

  minusButton = () => {
    if (this.state.count === 1) {
      alert("최소 주문수량은 1개 입니다.");
    } else if (this.state.count > 1) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  plusButton = () => {
    if (this.state.count >= 1) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };

  render() {
    const { data, hi } = this.state;
    console.log(this.props.productData);
    console.log("state", this.state.data);

    // const colorArr = this.state.Color.map((m, idx) => {
    //     return <li className="colorchart" key={idx}>{m}</li>
    // });

    return (
      <div className="ProductDetailTop">
        <main>
          <div className="mainLeft">
            <div className="mainLeftTitle">
              <h1>{data[0] && data[0].productName}</h1>
              <span>{data[0] && data[0].info}</span>
              <span className="price">KRW {data[0] && data[0].price}</span>
            </div>
            <div className="delivery">
              <div className="deliveryDay">
                <span className="deliveryText">배송일</span>
                <span className="deliveryThinText">평균 2-3일 이내 배송</span>
              </div>
              <div className="deliveryDay">
                <span className="deliveryText">배송료</span>
                <span className="deliveryThinText">
                  KRW 2,500 (2만원 이상 구매 시 무료배송)
                </span>
              </div>
            </div>
            <div className="mainLeftsaveOption">
              <div className="clickCircle" onClick={this.clickCircle}>
                <div className="clickColor">
                  <div className="plusColor">
                    <span>COLOR</span>
                    <sapn className="plus">+</sapn>
                  </div>
                </div>
              </div>
              <div
                className="MainLeftChoiceColor"
                style={{ display: { hi } ? "block" : "none" }}
              >
                <ul>{/* {colorArr} */}</ul>
              </div>
            </div>
            <div className="ProductDetailWish">
              <div className="productWish">
                <div className="wishList">
                  <div className="wishListLeft">
                    <div className="wishListColor" onClick={this.colorClick}>
                      {/* {this.state.Color[0]} */}
                    </div>
                    {/* 데이터 받게되면 내가 클릭한 색상 props 받아와야함. */}
                    <span className="wishListColorText">
                      위터리 쉬어 립스틱 - 이고르
                    </span>
                  </div>
                  <div className="wishListRight">
                    <div className="wishListAmount">
                      <button type="button" onClick={this.minusButton}>
                        -
                      </button>
                      <span>{this.state.count}</span>
                      <button type="button" onClick={this.plusButton}>
                        +
                      </button>
                    </div>
                    <div className="wishListDelete">X</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mainLeftTotal">
              <span>TOTAL</span>
              <span className="price">KRW 18,000</span>
            </div>
            <div className="mainLeftPurchase">
              <div className="basket">
                <i class="fas fa-shopping-bag"></i>
              </div>
              <div className="purchase">구매하기</div>
            </div>
          </div>
          <div className="mainCenter">
            <img
              src="//laka.co.kr/web/product/big/20200331/4920009f6507a4d5846ece81e819b5ac.png"
              alt=""
            />
          </div>
        </main>
      </div>
    );
  }
}

export default ProductDetailTop;
