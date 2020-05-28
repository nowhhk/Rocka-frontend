import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="container">
          <div className="swipe-img">
            <ul>
              <li>
                <img
                  src="https://laka.co.kr/laka_skin/images/pc/img_main_kv_01_f.jpg"
                  alt=""
                />
              </li>
              <li>
                {" "}
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
                우리의 입술색을 한 단어로 정의할 수 없듯이 라카는 모든 제품에
                대해 성별을 구분하지 않고 여성과 남성 모두의 룩을 제안하며
                뷰티에 대한 오랜 관성을 깨는 즐겁고 실용적인 브랜드입니다.
              </p>
              <div className="link-btn">
                BRAND STORY
                <img
                  src="https://laka.co.kr/assets/ko/images/ico/ico_more.png"
                  alt=""
                />
              </div>

              <div className="link-btn more">
                MORE
                <img
                  src="https://laka.co.kr/assets/ko/images/ico/ico_more.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Main);
