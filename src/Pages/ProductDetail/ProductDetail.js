import React, { Component } from "react";
// import "./ProductDetail.scss"

class ProductDetail extends Component {
    render() {
        return (
            <div className="ProductDetail">
                <main>
                    <div className="mainLeft">
                        <div className="mainLeftTitle">
                            <h1>워터리 쉬어 립스틱</h1>
                            <span>촉촉하게 빛나는 #물빛입술</span>
                            <span className="price">KRW 18,000</span>
                        </div>
                        <div className="mainLeftColor">
                            <div className="deliveryDay">
                                <span className="deliveryText">배송일</span>
                                <span className="deliveryThinText">평균 2-3일 이내 배송</span>
                            </div>
                            <div className="deliveryPrice">
                                <span className="deliveryText">배송료</span>
                                <span className="deliveryThinText">KRW 2,500 (2만원 이상 구매 시 무료배송)</span>
                            </div>
                        </div>
                        <div className="mainLeftsaveOption">saveOption Component</div>
                        <div className="mainLeftTotal">
                            <span>TOTAL</span>
                            <span className="price">KRW 18,000</span>
                        </div>
                        <div className="mainLeftPurchase">
                            <div className="basket"></div>
                            <div className="purchase"></div>
                        </div>
                    </div>
                    <div className="mainCenter">
                        <img src="//laka.co.kr/web/product/big/20200331/4920009f6507a4d5846ece81e819b5ac.png" alt="" />
                    </div>
                </main>
                {/* <div className="detailImg">
                    <span className="Bigfont">WATERY SHEER LIPSTICK</span>
                    <div className="fristImg">
                        <div className="fristImgBackground"><img src="" alt="" /></div>
                        <div className="fristImgBackgroundText">
                            <span>LOOK & MOOD</span>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default ProductDetail;