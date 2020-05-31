import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import ProductList from "./ProductList";
import "./Product.scss";
import Category from "./Category";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      clickedCategory: "",
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

  handleClicked = (category) => {
    console.log("category는 : ", category);
    this.setState({ clickedCategory: category });
  };

  render() {
    const filtering = this.state.data.filter((item) =>
      item.category.match(this.state.clickedCategory)
    );

    return (
      <div className="wrapper">
        <Nav />
        <div className="product-page">
          <div className="top">
            <div className="nav_container">
              <Category handleChange={this.handleClicked} />
            </div>

            <div className="sort_container">
              <ul>
                <li>신상품</li>
                <li>인기상품</li>
              </ul>
            </div>
          </div>

          <div className="product">
            <ProductList data={filtering} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
