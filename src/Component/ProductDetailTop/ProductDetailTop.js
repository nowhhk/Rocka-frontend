import React, { Component } from "react";
import MainLeftChoiceColor from "../MainLeftChoiceColor/MainLeftChoiceColor"
import "./ProductDetailTop.scss"


class ProductDetailTop extends Component {
    constructor() {
        super();

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
                "키보드"
            ],
        };
    }

    componentDidMount() {
        fetch("/rdata.json")
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({ data: response.data }))
    }

    render() {
        console.log("state", this.state.data)
        return (
            <div className="ProductDetail">
                <main>
                    <div className="mainLeft">
                        <div className="mainLeftTitle">
                            <h1>{this.state.data[0] && this.state.data[0].productName}</h1>
                            <span>{this.state.data[0] && this.state.data[0].info}</span>
                            <span className="price">KRW {this.state.data[0] && this.state.data[0].price}</span>
                        </div>
                        <div className="delivery">
                            <div className="deliveryDay">
                                <span className="deliveryText">배송일</span>
                                <span className="deliveryThinText">평균 2-3일 이내 배송</span>
                            </div>
                            <div className="deliveryDay">
                                <span className="deliveryText">배송료</span>
                                <span className="deliveryThinText">KRW 2,500 (2만원 이상 구매 시 무료배송)</span>
                            </div>
                        </div>
                        <div className="mainLeftsaveOption">
                            <div className="clickCircle">
                                <div className="clickColor">
                                    <div className="plusColor">
                                        <span>COLOR</span>
                                        <sapn className="plus">+</sapn>
                                    </div>
                                </div>
                            </div>
                            <MainLeftChoiceColor className="mainLeftOption" productColor={this.state.color} />
                        </div>
                        <div className="mainLeftTotal">
                            <span>TOTAL</span>
                            <span className="price">KRW 18,000</span>
                        </div>
                        <div className="mainLeftPurchase">
                            <div className="basket"><i class="fas fa-shopping-bag"></i></div>
                            <div className="purchase">구매하기</div>
                        </div>
                    </div>
                    <div className="mainCenter">
                        <img src="//laka.co.kr/web/product/big/20200331/4920009f6507a4d5846ece81e819b5ac.png" alt="" />
                    </div>
                </main>
            </div >
        );
    }
}

export default ProductDetailTop;