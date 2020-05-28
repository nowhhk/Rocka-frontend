import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <p className="logo">LAKA</p>
          <div className="box-container">
            <div className="box">
              <div className="link">
                <p>PRODUCT</p>
                <p>STORY</p>
                <p>STORE</p>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <p>LEGAL</p>
                    <ul>
                      <li>개인정보처리방침</li>
                      <li>이용약관</li>
                    </ul>
                  </li>
                  <li>
                    <p>SOCIAL</p>
                    <ul>
                      <li>INSTAGRAM</li>
                      <li>YOUTUBE</li>
                    </ul>
                  </li>
                  <li>
                    <p>GLOBAL BUSINESS</p>
                    <ul>
                      <li>global@laka.co.kr</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row-bottom">
          <div className="contact">
            <p>Customer Service</p>
            <p>hello@laka.co.kr</p>
          </div>
          <div className="box">
            <p>(주)라카코스메틱스</p>
            <p>(05338) 서울특별시 강동구 진황도로 59-1 공간빌딩 6층, 7층</p>
            <p>
              {" "}
              대표이사 : 강도형, 이민미 사업자등록번호 : 763-87-00999
              사업자정보확인
            </p>
            <p>정보통신판매업 : 2019-서울강동-0461</p>
            <p>
              {" "}
              고객상담실 : 1588-8143 (평일 10:30~17:00　OFF-TIME 12:00~14:00)
            </p>
            <p>COPYRIGHT 2018 LAKA. ALL RIGHTS RESERVED</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
