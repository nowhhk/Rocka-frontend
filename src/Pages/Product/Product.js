import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import ProductList from "./ProductList";
import Sort from "./Sort";
import "./Product.scss";
import Category from "./Category";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      // clickedCategory: "",
      sort: "",
    };
  }

  componentDidMount() {
    fetch("./data/data.json")
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

  handleSort = (prop) => {
    this.setState({ sort: prop });
  };

  render() {
    // const filtering = this.state.data.filter((item) =>
    //   item.category.match(this.state.clickedCategory)
    // );
    // console.log(this.state);

    const notSorted = [...this.state.data.sort((a, b) => a.id - b.id)];

    const newSorted = [
      ...this.state.data.sort((a, b) =>
        b.launchdate.localeCompare(a.launchdate)
      ),
    ];
    const bestSorted = [...this.state.data.sort((a, b) => a.id - b.id)];

    let list;
    if (this.state.sort === "new") {
      list = <ProductList products={newSorted} />;
    } else if (this.state.sort === "best") {
      list = <ProductList products={bestSorted} />;
    } else {
      list = <ProductList products={notSorted} />;
    }

    return (
      <div className="wrapper">
        <Nav />
        <div className="product-page">
          <div className="top">
            <div className="nav_container">
              <Category handleChange={this.handleClicked} />
            </div>
            <Sort
              handleNewSort={this.handleSort}
              handleBestSort={this.handleSort}
            />
          </div>

          <div className="product">{list}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
