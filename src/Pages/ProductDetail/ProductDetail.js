import React, { Component } from "react";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import ProductDetailTop from "./ProductDetailMyTop";
import "./ProductDetail.scss";


class ProductDetail extends Component {
    constructor() {
        super()

        this.state = {
            data: [],
            colorInfo: []
        }
    }

    componentDidMount() {
        fetch("/data/productList.json")
            .then(response => response.json())
            // .then(response => console.log(response))
            .then(response => this.setState({ data: response.data }, () => console.log(this.state.data)))
    }

    render() {
        const { data } = this.state
        console.log(data && this.state.data)
        return (
            <div className="ProductDetail">
                <Nav />
                <ProductDetailTop colorInfo={this.state.data} />
                <div className="veryBigTitle">WATERY SHEER LIPSTICK</div>
                <div className="ProductDetailBottomContainer">
                    <div className="ProductDetailBottom">
                        <div className="mainImg">
                            <p className="ColorKindsExplan">LOOK & MOOD</p>
                            <p className="reatureTitle">WATERY SHEER LIPSTICK</p>
                            <p className="ColorKindsExplan">
                                여린 물결의 파동이 고요히 밀려와<br />
                                입술에 닿은 것처럼<br />
                                맑게, 오묘하게, 촉촉하게 적시다.
                            </p>
                        </div>
                        <div className="textureTextBox">
                            <div className="colorIsEveryoneTitle">
                                PURE AND MOISTURIZING TEXTURE
                        </div>
                            <p className="semiBigText">
                                언제나 쉽게 손이 가는 내츄럴 립,
                                <br /> 촉촉하고 산뜻한 텍스쳐에 담긴
                                <br /> 반투명 뉴트럴 컬러들
                            </p>
                        </div>
                        <div className="previewImg">
                            <div className="previewImgTop">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_02.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_03.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="previewImgBottom"></div>
                        </div>
                        <div className="colorInfo">
                            <span className="ColorKindsExplan">COLOR INFO</span>
                            <p className="reatureTitle">FIND YOUR MOOD</p>
                            <p className="ColorKindsExplan">전색상을 한 눈에 담아보세요.</p>
                            <div className="previewAllColor">{/* 영상첨가 */}</div>
                        </div>
                        <div className="featureBox">
                            <p className="ColorKindsExplan">FEATURE</p>
                            <p className="reatureTitle">WATERY SHEER LIPSTICK</p>
                            <p className="ColorKindsExplan">
                                ∨ 놀랍도록 가볍고 산뜻한 발림<br />
                                ∨ 립밤을 잊게하는, 그러나 오일리하지 않은 적당한 촉촉함<br />
                                ∨ 반투명 피그먼트로 선명도를 조절하기 쉬운 컬러감<br />
                                ∨ 모두의 취향을 존중하는 무향취<br />
                            </p>
                        </div>
                        <div className="colorIsEveryone">
                            <p className="colorIsEveryoneTitle">
                                COLOR IS<br />
                                MEANT TO BE<br />
                                FOR EVERYONE
                            </p>
                            <p className="semiBigText">
                                "컬러는 원래 모두의 것" 라카는 그 당연한 의미를<br />
                                본질에 담아 태어났습니다. 우리는 성별과 관계 없이 취향과<br />
                                기분에 따라 메이크업을 자유롭게 선택할 수 있는 시대를<br />
                                선언하고, 관념 속에만 머무르는 선언이 아니라 브랜드의<br />
                                모든 크리에이티브와 행보를 통해 실천합니다.<br />
                                <br />
                                그리고 그것을 통해 원하는 모든 이들이 일상 속에서 컬러를<br />
                                즐길 수 있도록 돕는 것, 이것이 라카의 철학입니다.
                            </p>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_01.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛레드 이고르</p>
                            <p className="ColorKindsExplan">
                                물 속에 잠긴 새빨간 토마토 위에<br />
                                따뜻한 태양빛 한 줌 비춘다면 아마 이런색
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_01_3.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_01_2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_02.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛코랄 카미유</p>
                            <p className="ColorKindsExplan">
                                경쾌함과 아름다움이 공존하는 무드,<br />
                                온기가 더해져 내 입술처럼 말갛게 스미는 코랄
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_02_3.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_02_2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_03.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛로즈 모리스</p>
                            <p className="ColorKindsExplan">
                                빗방울 토독토독 떨어지며 꽃잎을 두드리면<br />
                                잠시 젖어들며 선연해진 딱 그때의 로즈
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_03_1.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_03_4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_04.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛오렌지 클로드</p>
                            <p className="ColorKindsExplan">
                                레드도 지루하고 핑크도 싫을 때,
                                <br /> 누디하고 내츄럴한 MLBB오렌지, 바로 이 컬러
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_04_3.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_04_2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_05.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛플럼 로시니</p>
                            <p className="ColorKindsExplan">
                                대담한 레드인 척하지만 몰래 핑크를 머금은 색,
                                <br /> 얌전해 보이기 싫을 때 좋은 라즈베리빛 핑크
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_05_1.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_05_4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_06.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛브릭 레너드</p>
                            <p className="ColorKindsExplan">
                                무심한듯 걸친 듯해도 섬세한 멋이 느껴지는 컬러,
                                <br /> 편안해서 자꾸만 찾게되는 MLBB브릭
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_06_3.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_06_2.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_07.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛다홍 베르디</p>
                            <p className="ColorKindsExplan">
                                센슈얼한 눈빛에 어울리는 감각적인 다홍색, 경험할 수록 사랑스러운
                                컬러
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_07_1.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_07_4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="colorKinds">
                            <img
                                src="https://laka.co.kr/web/info/wsls/name_texture_08.jpg"
                                alt=""
                            />
                            <p className="ColorKindsTitle">#물빛핑크 비제트</p>
                            <p className="ColorKindsExplan">
                                솔직한 대답에 어울리는 담담한 컬러,
                                <br /> 나를 더 나 답게 만드는 뉴트럴 핑크
                            </p>
                            <div className="ColorKindsImgBox">
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_08_1.jpg"
                                    alt=""
                                />
                                <img
                                    src="https://laka.co.kr/web/info/wsls/detail_08_08_4.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="allLineUp">
                            <span className="smallText">ALL LINE-UP</span>
                            <p className="semiBigText">NICE WITH</p>
                            <p className="mediumText">
                                라카의 모든 제품들은
                                <br /> 함께 사용했을 때 더욱 아름다운 조화를
                                <br /> 발현시킬 수 있도록 텍스쳐와 컬러의
                                <br /> 정교한 설계 속에서 고안되었습니다.
                            </p>
                            <img
                                src="https://laka.co.kr/web/info/wsls/detail_11.jpg"
                                alt=""
                            />
                        </div>
                        {/* 상품 제공 고시 정보들 들어갈 태그 - 백에서 받아와야함 */}
                        <div className="precautions">
                            <div className="infoTitle">WATERY SHEER<br /> LIPSTICK</div>
                            <div className="infoTextBox">
                                <div className="infoLeft">
                                    <div className="infoBox">
                                        <div className="infoTextTitle">주의사항</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">용량 및 중량</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">제품 주요 사양</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">사용 방법</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">식품의약품안정청 심사필</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">라카 고객상담실</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">전성분 정보 확인</div>
                                    </div>
                                </div>
                                <div className="infoRight">
                                    <div className="infoBox">
                                        <div className="infoTextTitle">교환 및 반품 안내</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">제조연월 및 사용기한</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">제조국</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">제조사</div>
                                        <div className="infoText"></div>
                                    </div>
                                    <div className="infoBox">
                                        <div className="infoTextTitle">품질보증기준</div>
                                        <div className="infoText"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recommendComponent">
                            <p className="ColorKindsTitle">YOU MIGHT LIKE</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default ProductDetail;
