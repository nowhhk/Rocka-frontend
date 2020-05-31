import React, { Component } from "react";

class ShoppingCart extends Component {
    render() {
        return (
            <div className="ShoppingCart">
                <div className="selectAll">
                    <label>
                    </label>
                    <p className="selectAllAmount">전체선택()</p>
                    <div className="deleteSelection">선택삭제</div>
                </div>
                <div className="savingProduct">
                    <label>
                    </label>
                    <div className="savingProductImg">
                        <img src="" alt="" />
                    </div>
                    <div className="savingProductInfo">
                        <div className="savingProductInfoMain">
                            <div className="savingProductInfoTitle">저스트 아이팔레트</div>
                            <div className="savingProductInfoAmount"></div>
                            <div className="savingProductInfoAllPrice">KRW</div>
                        </div>
                        <div className="savingProductInfoOption">[옵션:]</div>
                        <div className="savingProductInfoPrice">삭제</div>
                    </div>
                </div>
                <div className="freeDelivery">
                    • 2만원 이상 구매 시 무료배송됩니다.
                </div>
                <div className="ShoppingCartBottombox">
                    <div className="statement">
                        <div className="price">
                            <div className="commodityAmount">
                                <p>상품금액</p>
                                <p>KRW</p>
                            </div>
                            <div className="delivery">
                                <p>배송비</p>
                                <p>KRW</p>
                            </div>
                        </div>
                        <div className="total">
                            <p>TOTAL</p>
                            <p>KRW</p>
                        </div>
                    </div>
                    <div className="orderButton">
                        <div className="allOrderButton">전체상품 주문</div>
                        <div className="orderSelectedProducts">선택상품 주문</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;