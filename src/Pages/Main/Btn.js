import React, { Component } from "react";

class Btn extends Component {
  render() {
    return (
      <div className="link-btn">
        <span>{this.props.title}</span>
        <img
          src="https://laka.co.kr/assets/ko/images/ico/ico_more.png"
          alt=""
        />
      </div>
    );
  }
}

export default Btn;
