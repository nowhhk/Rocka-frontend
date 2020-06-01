import React, { Component } from "react";
import "./ProductDetailWish.scss";

class ProductDetailWish extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Color: this.props.productColor
        }
    }

    minusButton = () => {
        if (this.state.count === 1) {
            alert("최소 주문수량은 1개 입니다.")
        }
        else if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    plusButton = () => {
        if (this.state.count >= 1) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    render() {
        return (
            <div className="ProductDetailWish">
                <div className="productWish">
                    <div className="wishList">
                        <div className="wishListLeft">
                            <div className="wishListColor" onClick={this.colorClick}>{this.state.Color[0]}</div>
                            {/* 데이터 받게되면 내가 클릭한 색상 props 받아와야함. */}
                            <span className="wishListColorText">위터리 쉬어 립스틱 - 이고르</span>
                        </div>
                        <div className="wishListRight">
                            <div className="wishListAmount">
                                <button type="button" onClick={this.minusButton}> - </button>
                                <span>{this.state.count}</span>
                                <button type="button" onClick={this.plusButton}> + </button>
                            </div>
                            <div className="wishListDelete">
                                X
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetailWish