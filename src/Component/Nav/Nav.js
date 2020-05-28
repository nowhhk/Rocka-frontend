import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="nav left">
            <span
              onClick={(e) => {
                this.props.history.push("/product");
              }}
            >
              PRODUCT
            </span>
            <span>STORY</span>
            <span>STORE</span>
          </div>
          <h1 className="logo">
            <span
              onClick={(e) => {
                this.props.history.push("/");
              }}
            >
              LAKA
            </span>
          </h1>
          <div className="nav right">
            <span
              onClick={(e) => {
                this.props.history.push("/signin");
              }}
            >
              LOGIN
            </span>
            <span
              onClick={(e) => {
                this.props.history.push("/signup");
              }}
            >
              JOIN
            </span>
            <span>MY</span>
            <span>CART</span>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Nav);
