import React, { Component } from "react";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div className="nav_container">
        <div className="nav">
          <div className="category">
            CATEGORY
            <img
              className="icon"
              src="https://laka.co.kr/assets/ko/images/ico/ico_arr.png"
              alt=""
            />
          </div>
          <div className="list">
            <div className="row">
              <span onClick={() => this.props.handleChange("")}>
                ALL <span className="count"> 19 </span>
              </span>

              <span onClick={() => this.props.handleChange("FACE")}>
                FACE <span className="count"> 19 </span>
              </span>
              <span onClick={() => this.props.handleChange("LIP")}>
                LIP <span className="count"> 19 </span>
              </span>
              <span onClick={() => this.props.handleChange("EYE")}>
                EYE <span className="count"> 19 </span>
              </span>
              <span onClick={() => this.props.handleChange("CHEEK")}>
                CHEEK <span className="count"> 19 </span>
              </span>
              <span onClick={() => this.props.handleChange("PALLETE")}>
                PALLETE <span className="count"> 19 </span>
              </span>
            </div>
            <div className="row">
              <span onClick={() => this.props.handleChange("SPECIALEDITION")}>
                SPECIAL EDITION <span className="count"> 19 </span>
              </span>
              <span onClick={() => this.props.handleChange("TOOL")}>
                TOOL <span className="count"> 19 </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
