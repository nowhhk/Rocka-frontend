import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Search from "./Search"
import Footer from "../../Component/Footer/Footer";
import StoreList from "./StoreList.js";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
    };
  }

  componentDidMount() {
    fetch("/data/datastore.json")
      .then((res) => res.json())
      .then((res) => this.setState({ stores: res.stores }));
  }

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="store-page">
          <img
            src="https://laka.co.kr/laka_skin/images/pc/store_visual.jpg"
            alt=""
          />
          <Search stores={this.state.stores} />
          <StoreList stores={this.state.stores} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
