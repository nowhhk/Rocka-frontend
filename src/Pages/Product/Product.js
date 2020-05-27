import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import ProductList from "./ProductList";
import "./Product.scss";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      category: "",
    };
  }

  componentDidMount() {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="product-page">
          <div className="top">
            <div className="nav_container">
              <div className="nav">
                ALL
                <ul>
                  <li>
                    ALL <span className="count"> 19 </span>
                  </li>
                  <li>
                    FACE <span className="count"> 19 </span>
                  </li>
                  <li>
                    LIP <span className="count"> 19 </span>
                  </li>
                  <li>
                    EYE <span className="count"> 19 </span>
                  </li>
                  <li>
                    CHEEK <span className="count"> 19 </span>
                  </li>
                  <li>
                    PALLETE <span className="count"> 19 </span>
                  </li>
                  <li>
                    SPECIAL EDITION <span className="count"> 19 </span>
                  </li>
                  <li>
                    TOOL <span className="count"> 19 </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sort_container">
              <ul>
                <li>신상품</li>
                <li>인기상품</li>
              </ul>
            </div>
          </div>

          <ul className="product">
            <ProductList data={this.state.data} />
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
