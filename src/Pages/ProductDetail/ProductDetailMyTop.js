import React, { Component } from "react";
import "./ProductDetailMyTop.scss";

class ProductDetailTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            hi: false,
            wishList: [],
            count: 1,
        };
    }

    clickCircle = () => {
        console.log("클릭 이벤트 정상작동")
        this.setState({
            hi: true
        })
    }

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

    imgClick = (colors) => {
        // console.log("컬러:", colors)
        const choiceColor = this.state.wishList.concat(colors)
        this.setState({
            wishList: choiceColor
        }, () => console.log(this.state.wishList))
    }

    render() {
        const { data, hi } = this.state;
        console.log(this.props.colorInfo)
        console.log(this.props.colorInfo.inner_image_url)
        console.log(this.props.colorInfo.color)

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
                                <span className="deliveryThinText">KRW 2,500 (2만원 이상 구매 시 무료배송)</span>
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
                                style={{ display: { hi } ? 'block' : 'none' }}>
                                <ul>
                                    {
                                        this.props.colorInfo.color && this.props.colorInfo.color.map((color, idx) => {
                                            return (
                                                <li className="colorchart" key={idx} onClick={() => this.imgClick(color)}>
                                                    <img src={color.image_url} alt="" />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="ProductDetailWish">
                            <div className="productWish">
                                {
                                    this.state.wishList && this.state.wishList.map((wishArr, idx) => {
                                        return (
                                            <div className="wishList">
                                                <div className="wishListLeft">
                                                    <div className="wishListColor" onClick={this.colorClick}>
                                                        <img src={wishArr.image_url} alt="" />
                                                    </div>
                                                    {/* 데이터 받게되면 내가 클릭한 색상 props 받아와야함. */}
                                                    <span className="wishListColorText">
                                                        위터리 쉬어 립스틱 - {wishArr.name}
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
                                        );
                                    })
                                }
                            </div>
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
                        <img src={this.props.colorInfo.inner_image_url} alt="" />
                    </div>
                </main>
            </div >
        );
    }
}

export default ProductDetailTop;