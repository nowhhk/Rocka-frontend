import React, { Component } from "react";
import "./ProductDetailMyTop.scss";

class ProductDetailTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            hi: false,
            wishList: [],
            minus: [],
        };
    }

    clickCircle = () => {
        this.setState({
            hi: true
        })
    }

    //아직 기능 구현 중 부분
    minusButton = (what) => {
        const wishList = { ...this.state.wishList };
        // console.log(wishList);

        const minus = { ...what };
        // console.log("인덱스", minus)

        if (minus["order_quantity"] === 1) {
            alert("최소 주문수량은 1개 입니다.");
        } else if (minus["order_quantity"] > 1) {
            minus["order_quantity"]--
            // console.log(minus["order_quantity"]--)

            this.setState({
                wishList: wishList,
            });
            console.log(wishList)
        }
        return

    };

    plusButton = (what) => {
        const wishList = { ...this.state.wishList };
        console.log(wishList);

        const minus = { ...what };
        console.log("인덱스", minus)

        if (minus["order_quantity"] > 1) {
            minus["order_quantity"]++
            console.log(minus["order_quantity"]++)

            this.setState({
                minus: wishList
            });
        }
        return
    };

    imgClick = (colors) => {
        const { wishList } = this.state;
        console.log("wishList : ", wishList)
        console.log(colors)
        if (wishList.includes(colors)) {
            alert("이미 있음");
        } else {
            this.setState({
                wishList: wishList.concat(colors)
            })
        }
    }

    render() {
        const { hi } = this.state;

        return (
            <div className="ProductDetailTop">
                <main>
                    <div className="mainLeft">
                        <div className="mainLeftTitle" >
                            <h1>{this.props.colorInfo.name}</h1>
                            <span>{this.props.colorInfo.description}</span>
                            <span className="price">KRW {this.props.colorInfo.price_krw}</span>
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
                            <div className="MainLeftChoiceColor"
                                style={{ display: hi ? 'block' : 'none' }}>
                                <ul>
                                    {
                                        this.props.colorInfo.color && this.props.colorInfo.color.map((color, idx) => {
                                            return (
                                                <li className="colorchart" key={idx} onClick={() => this.imgClick(color)}>
                                                    <img src={color.image_url} alt="" className="colorchart" />
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
                                                        <img src={wishArr.image_url} alt="" className="" />
                                                    </div>
                                                    <span className="wishListColorText">
                                                        위터리 쉬어 립스틱 - {wishArr.name}
                                                    </span>
                                                </div>
                                                <div className="wishListRight">
                                                    <div className="wishListAmount">
                                                        <button type="button" onClick={() => this.minusButton(wishArr)}>
                                                            -
                                                        </button>
                                                        <span>{wishArr.order_quantity}</span>
                                                        <button type="button" onClick={() => this.plusButton(wishArr)}>
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
                            <span className="price">KRW </span>
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