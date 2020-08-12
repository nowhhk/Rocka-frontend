import React, { Component } from "react";

import { API } from "../../config";
import Footer from "../../Component/Footer/Footer";
import Nav from "../../Component/Nav/Nav";
import Search from "./Search";
import StoreList from "./StoreList.js";
import { withRouter } from "react-router-dom";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      userInput: "",
    };
  }

  componentDidMount() {
    // fetch(`${API}/store`)
    fetch("/data/datastore.json")
      .then((res) => res.json())
      .then((res) => this.setState({ stores: res.data }));
  }

  onSearchSubmit = (value) => {
    this.setState({ userInput: value });
  };

  render() {
    const filtered = this.state.stores.filter((store) =>
      store.address.includes(this.state.userInput)
    );

    return (
      <div className="wrapper">
        <Nav />
        <div className="store-page">
          <img
            src="https://laka.co.kr/laka_skin/images/pc/store_visual.jpg"
            alt=""
          />
          <div className="storeBox">
            <Search onSubmit={this.onSearchSubmit} />
            <StoreList stores={filtered} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
