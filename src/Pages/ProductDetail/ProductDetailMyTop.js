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


        // if (this.state.wishList.length === 0) {
        //     console.log("첫번째 if")
        //     this.setState({
        //         wishList: this.state.wishList.concat(colors),
        //     }, () => console.log("1. 위시리스트:", this.state.wishList))
        // }

        // for (let i in this.state.wishList) {
        //     if (this.state.wishList[i].name === colors["name"]) {
        //         console.log("같은 상품")
        //         alert("이미 선택되어 있는 옵션입니다.")
        //         return;
        //     } else {
        //         console.log("포함되지 않은 상품")
        //         this.setState({
        //             wishList: this.state.wishList.concat(colors),
        //         }, () => console.log("2. 위시리스트:", this.state.wishList))
        //     }
        // }

        // if (this.state.wishList.length === 0) {
        //     const testProducts = { ...colors }; //color부분을 클론 받기
        //     testProducts["order_quantity"] = 1 //order_quantity state =1로 변경
        //     // wishList: this.state.wishList.concat(colors),

        //     this.setState({
        //         wishList: this.state.wishList.concat(testProducts)
        //     }, () => console.log("위시리스트:", this.state.wishList))
        //     console.log(testProducts);
        // }

        // this.state.wishList.forEach(element => {
        //     if (element["name"] !== colors["name"]) {
        //         console.log("재재재재재재")
        //         const testProducts = { ...colors }; //color부분을 클론 받기
        //         testProducts["order_quantity"] = 1 //order_quantity state =1로 변경

        //         const choiceColor = this.state.wishList.concat(testProducts)
        //         this.setState({
        //             wishList: choiceColor
        //         }, () => console.log("위시리스트:", this.state.wishList))
        //     }
        //     else if (colors["name"] === element["name"]) {
        //         alert("이미 선택되어 있는 옵션입니다.")
        //         return;
        //     }
        // }, console.log(this.state.wishList))
    }

    render() {
        const { hi } = this.state;
        // const { productData } = this.props.colorInfo

        return (
            <div className="ProductDetailTop">
                <main>
                    <div className="mainLeft">
                        <div className="mainLeftTitle" >
                            {/* <h1>{data[0] && data[0].productName}</h1>
                            <span>{data[0] && data[0].info}</span>
                            <span className="price">KRW {data[0] && data[0].price}</span> */}
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
                                                    {/* 데이터 받게되면 내가 클릭한 색상 props 받아와야함. */}
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