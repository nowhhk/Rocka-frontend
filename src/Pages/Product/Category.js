import React, { Component } from "react";
import "./Category.scss";

class Category extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    fetch("./data/category.json")
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((res) =>
        this.setState({
          category: res.data,
        })
      );
  }
  render() {
    // console.log("카테고리는", this.state.category);
    const { category } = this.state;

    return (
      <div className="nav_container">
        <div className="nav">
          <div className="category">
            ALL
            <img
              className="icon"
              src="https://laka.co.kr/assets/ko/images/ico/ico_arr.png"
              alt=""
            />
          </div>
          <div className="list">
            <div className="row">
              <span onClick={() => this.props.handleChange("")}>
                ALL
                <span className="count">19</span>
              </span>

              <span onClick={() => this.props.handleChange("FACE")}>
                FACE
                <span className="count">
                  {category[0] && category[0].count}
                </span>
              </span>
              <span onClick={() => this.props.handleChange("LIP")}>
                LIP
                <span className="count">
                  {category[1] && category[1].count}
                </span>
              </span>
              <span onClick={() => this.props.handleChange("EYE")}>
                EYE
                <span className="count">
                  {category[2] && category[2].count}
                </span>
              </span>
              <span onClick={() => this.props.handleChange("CHEEK")}>
                CHEEK
                <span className="count">
                  {category[3] && category[3].count}
                </span>
              </span>
              <span onClick={() => this.props.handleChange("PALLETE")}>
                PALLETE
                <span className="count">
                  {category[4] && category[4].count}
                </span>
              </span>
            </div>
            <div className="row">
              <span onClick={() => this.props.handleChange("SPECIALEDITION")}>
                SPECIAL EDITION
                <span className="count">
                  {category[5] && category[5].count}
                </span>
              </span>
              <span onClick={() => this.props.handleChange("TOOL")}>
                TOOL
                <span className="count">
                  {category[6] && category[6].count}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
