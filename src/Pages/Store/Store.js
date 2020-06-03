import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Search from "./Search";
import Footer from "../../Component/Footer/Footer";
import StoreList from "./StoreList.js";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      name: "",
    };
  }

  componentDidMount() {
    fetch("http://10.58.0.163:8000/store")
      .then((res) => res.json())
      .then((res) => this.setState({ stores: res.data }));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="store-page">
          <img
            src="https://laka.co.kr/laka_skin/images/pc/store_visual.jpg"
            alt=""
          />
          <div className="storeBox">
            <Search stores={this.state.stores} onChange={this.handleChange} />
            <StoreList stores={this.state.stores} name={this.state.name} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
