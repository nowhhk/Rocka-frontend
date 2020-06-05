import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    const { category } = this.state;
    let address = this.props.location.search;
    let categoryTitle = address.split("=")[1];

    return (
      <div className="nav_container">
        <div className="nav">
          <div className="category">
            <div className="categoryAll">
              {categoryTitle === undefined ? <span>ALL</span> : categoryTitle}
              <div className="categoryImg">
                <img
                  className="icon"
                  src="https://laka.co.kr/assets/ko/images/ico/ico_arr.png"
                  alt=""
                />
              </div>
            </div>
            <div className="list">
              <div className="row">
                <span onClick={() => this.props.history.push("/product")}>
                  ALL
                  <span className="count">19</span>
                </span>

                <span
                  onClick={() =>
                    this.props.history.push("/product?category=FACE")
                  }
                >
                  FACE
                  <span className="count">
                    {category[0] && category[0].count}
                  </span>
                </span>
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=LIP")
                  }
                >
                  LIP
                  <span className="count">
                    {category[1] && category[1].count}
                  </span>
                </span>
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=EYE")
                  }
                >
                  EYE
                  <span className="count">
                    {category[2] && category[2].count}
                  </span>
                </span>
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=CHEEK")
                  }
                >
                  CHEEK
                  <span className="count">
                    {category[3] && category[3].count}
                  </span>
                </span>
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=PALETTE")
                  }
                >
                  PALETTE
                  <span className="count">
                    {category[4] && category[4].count}
                  </span>
                </span>
              </div>
              <div className="row">
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=SPECIAL EDITION")
                  }
                >
                  SPECIAL EDITION
                  <span className="count">
                    {category[5] && category[5].count}
                  </span>
                </span>
                <span
                  onClick={() =>
                    this.props.history.push("/product?category=TOOL")
                  }
                >
                  TOOL
                  <span className="count">
                    {category[6] && category[6].count}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Category);
