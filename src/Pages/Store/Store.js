import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Component/Nav/Nav";
import Search from "./Search";
import { API } from "../../config";
import Footer from "../../Component/Footer/Footer";
import StoreList from "./StoreList.js";

class Store extends Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      userSelected: "",
      userInput: "",
      name: "",
    };
  }

  componentDidMount() {
    fetch(`${API}/store`)
      .then((res) => res.json())
      .then((res) => this.setState({ stores: res.data }));
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value }, () =>
      console.log(this.state.userInput)
    );
  };

  render() {
    const filtering = this.state.stores.filter((store) =>
      store.branch.includes(this.state.userInput)
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
            <Search handleChange={this.handleUserInput} />
            <StoreList stores={filtering} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Store);
