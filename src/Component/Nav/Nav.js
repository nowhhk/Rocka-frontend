import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <>
        <header className="header">
          <div className="nav">
            <span>PRODUCT</span>
            <span>STORY</span>
            <span>STORE</span>
          </div>
          <h1 className="logo">
            <span>LAKA</span>
          </h1>
          <div className="nav">
            <span>LOGIN</span>
            <span>JOIN</span>
            <span>MY</span>
            <span>CART</span>
          </div>
        </header>
      </>
    );
  }
}

export default Nav;
