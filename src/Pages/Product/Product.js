import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import ProductList from "./ProductList";
import Sort from "./Sort";
import { API } from "../../config";
import "./Product.scss";
import Category from "./Category";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      sort: "",
      scrollTop: {},
    };
  }

  onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop }, console.log(this.state));
  };
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    this.getData();
  }
  //componentDidUpdate는 state 나 props 바뀔때마다 실행
  //props에 담긴 location객체의 search값이 바뀔때
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.location.search !== this.props.location.search) {
      this.getData();
    }
  };

  getData = () => {
    let address = this.props.location.search;
    fetch(`${API}/product${address}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          data: res.data,
        })
      );
  };

  handleSort = (prop) => {
    this.setState({ sort: prop });
  };

  render() {
    console.log(this.props);

    const notSorted = [...this.state.data.sort((a, b) => a.id - b.id)];

    const newSorted = [
      ...this.state.data.sort((a, b) =>
        b.launchdate.localeCompare(a.launchdate)
      ),
    ];
    //best sort기준 수정필요
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
              <Category handleChange={this.handleClicked} />{" "}
            </div>
            <Sort
              handleNewSort={this.handleSort}
              handleBestSort={this.handleSort}
            />
          </div>
        </div>
        <div
          className={this.state.scrollTop > 940 ? "yes" : "yet"}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          TOP
        </div>
        <div className="listwrap">{list}</div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Product);
