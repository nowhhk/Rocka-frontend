import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Btn from "./Btn";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import { API } from "../../config";
import "./Main.scss";
import ProductList from "../Product/ProductList";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      scrollTop: {},
      activeTab: "best",
      tabClass: "activeBest",
      pop: "none",
    };
  }

  //스크롤 위치 구하는 함수
  onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop }, console.log(this.state));
  };

  handleClickedBest = () => {
    this.setState({ activeTab: "best", tabClass: "activeBest" });
  };

  handleClickedNew = () => {
    this.setState({ activeTab: "new", tabClass: "activeNew" });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);

    fetch(`${API}/product`)
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  }

  render() {
    const { data, scrollTop, activeTab, tabClass } = this.state;

    console.log(this.state);
    // best filter 기준 수정필요
    const bestproduct = data.filter((item) => item.id < 20);

    const newSort = [
      ...data.sort((a, b) => b.launchdate.localeCompare(a.launchdate)),
    ];
    const newproduct = [];
    newproduct.push(newSort[0], newSort[1], newSort[2]);

    const tab = {
      best: <ProductList products={bestproduct} />,
      new: <ProductList products={newproduct} />,
    };

    return (
      <div className="wrapper">
        <Nav />
        <div className="main-container">
          <div className="swipe-img">
            <ul>
              <li>
                <img
                  src="https://laka.co.kr/laka_skin/images/pc/img_main_kv_01_f.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://laka.co.kr/laka_skin/images/pc/img_main_kv_02_f.jpg"
                  alt=""
                />
              </li>
              <li>
                <img
                  src="https://laka.co.kr/laka_skin/images/pc/img_main_kv_03_f.jpg"
                  alt=""
                />
              </li>
            </ul>
          </div>

          <div className="contents">
            <div className="concept">
              <strong>BE NEUTRAL</strong>
              <p>
                우리의 입술색을 한 단어로 정의할 수 없듯이
                <br /> 라카는 모든 제품에 대해 성별을 구분하지 않고
                <br /> 여성과 남성 모두의 룩을 제안하며 뷰티에 대한
                <br /> 오랜 관성을 깨는 즐겁고 실용적인
                <br /> 브랜드입니다.
              </p>
            </div>

            <div className="collection">
              <strong>
                COLOR FOR
                <br />
                EVERYONE
                <br />
              </strong>
              <ul className={scrollTop > 1300 ? "pop" : "none"}>
                <li>
                  <div className="thumb">
                    <img
                      src="https://laka.co.kr/laka_skin/images/pc/img_main_thumb_01_01_0405.jpg"
                      alt=""
                    />

                    <div className="box">
                      <img
                        src="https://laka.co.kr/laka_skin/images/pc/img_main_thumb_01_02_0405.png"
                        alt=""
                      />
                      <p className="title">
                        하루에도 여러 번
                        <br />
                        손이 가는 편한 촉촉립
                      </p>
                      <p className="desc">
                        언제나 선택되는 내츄럴 립, 촉촉하고 산뜻한 텍스쳐에
                        <br /> 담긴 반투명 뉴트럴 컬러들을 만나보세요.
                      </p>
                      <Btn title="MORE" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="thumb">
                    <img
                      src="https://laka.co.kr/laka_skin/images/pc/img_main_thumb_02_01_0405.jpg"
                      alt=""
                    />

                    <div className="box">
                      <img
                        src="https://laka.co.kr/laka_skin/images/pc/img_main_thumb_02_02_0405.png"
                        alt=""
                      />
                      <p className="title">
                        라카 팔레트가
                        <br />
                        이토록 사랑받는 이유
                      </p>
                      <p className="desc">
                        무심하게 섞어도 절묘하게 어우러지도록 채도, 명도,
                        <br /> 투명도를 완벽하게 조율해둔 탓일 거예요.
                      </p>
                      <Btn title="MORE" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="tabs">
              <ul>
                <li
                  className={tabClass}
                  onClick={() => this.handleClickedBest("best")}
                >
                  <span>BEST</span>
                </li>
                <li
                  className={tabClass}
                  onClick={() => this.handleClickedNew("new")}
                >
                  <span>NEW</span>
                </li>
              </ul>

              <ul>{tab[activeTab]}</ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
