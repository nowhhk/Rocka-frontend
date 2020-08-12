import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { API } from "../../config"
import "./ProductDetailMyTop.scss";

class ProductDetailTop extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            hi: false,
            wishList: [],
            minus: [],
            postData: {},
        };
    }

    //BE에 보낼 것
    clickShopping = () => {
        const token = localStorage.getItem("Authorization")

        // console.log("보낼 리스트", this.state.wishList)
        // console.log("보낼 이름", this.props.colorInfo.id)
        // console.log("유저 토큰", token)

        for (let i in this.state.wishList) {
            this.state.wishList[i].id = this.props.colorInfo.id
            console.log(this.state.wishList)
        }

        fetch(`${API}/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: token //헤더에서 토큰을 보내는 것 
            },
            body: JSON.stringify({
                wishList: this.state.wishList
            })
        })
            .then(response => {
                this.props.history.push("/cart")
                // if (response.status === 200) {
                //     // alert("장바구니에 담겼습니다.")

                // }
            })
    }

    sumTotal = () => {
        let sum = 0;
        for (let i in this.state.wishList) {
            sum += this.state.wishList[i].order_quantity
        }
        return sum;
    }

    clickCircle = () => {
        this.setState({
            hi: true
        })
    }

    //아직 기능 구현 중 부분
    minusButton = (idx) => {
        const newWishList = [...this.state.wishList];
        console.log("새로운 리스트", newWishList);

        if (newWishList[idx].order_quantity === 1) {
            alert("최소 주문수량은 1개 입니다.")
        } else {
            newWishList[idx].order_quantity--;
            this.setState({ wishList: newWishList });
        }
    };

    plusButton = (idx) => {
        const newWishList = [...this.state.wishList];

        if (newWishList[idx].order_quantity > 0) {
            newWishList[idx].order_quantity++;
            this.setState({ wishList: newWishList });
        }
    };

    imgClick = (colors) => {
        const { wishList } = this.state;
        // console.log("wishList : ", wishList)
        // console.log(colors)
        if (wishList.includes(colors)) {
            alert("이미 선택되어 있는 옵션입니다.");
        } else {
            this.setState({
                wishList: wishList.concat(colors)
            })
        }
    }

    btnDelete = (name) => {
        console.log(this.state.wishList)
        // for (let j in this.state.wishList)
        //     if (name === this.state.wishList[j].name) {
        //         // this.state.wishList.slice(this.state.wishList[j].name, 1);
        //         this.state({ wishList: this.state.wishList[j].indexOf(name) })
        //     }
        const idx = this.state.wishList.findIndex(function (item) {
            return item.name === name
        })

        console.log(idx)
        this.state.wishList.splice(idx, 1)
    }

    render() {
        const { hi } = this.state;
        // console.log(this.state.productName)
        // console.log(this.props.colorInfo.name)

        return (
            <div className="ProductDetailTop">
                {this.props.colorInfo.price_krw && (
                    <main>
                        <div className="mainLeft">
                            <div className="mainLeftTitle" >
                                <h1>{this.props.colorInfo.name}</h1>
                                <span>{this.props.colorInfo.description}</span>
                                <span className="price">KRW {Number(this.props.colorInfo.price_krw).toLocaleString()}</span>
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
                                            <span className="plus">+</span>
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
                                                            <button type="button" onClick={() => this.minusButton(idx)}>
                                                                -
                                                        </button>
                                                            <span>{wishArr.order_quantity}</span>
                                                            <button type="button" onClick={() => this.plusButton(idx)}>
                                                                +
                                                        </button>
                                                        </div>
                                                        <div className="wishListDelete" onClick={() => this.btnDelete(wishArr.name)}>X</div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className="mainLeftTotal">
                                <span>TOTAL</span>
                                <span className="price">KRW {this.sumTotal() * this.props.colorInfo.price_krw}</span>
                            </div>
                            <div className="mainLeftPurchase">
                                <div className="basket" onClick={this.clickShopping}><i class="fas fa-shopping-bag"></i></div>
                                <div className="purchase">구매하기</div>
                            </div>
                        </div>
                        <div className="mainCenter">
                            <img src={this.props.colorInfo.inner_image_url} alt="" />
                        </div>
                    </main>)}
            </div >
        );
    }
}

export default withRouter(ProductDetailTop);