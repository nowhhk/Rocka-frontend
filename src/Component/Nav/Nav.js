import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  state = {
    scrollTop: {},
    navClass: "header",
  };

  onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <header className={this.state.scrollTop > 200 ? "scrolled" : "header"}>
        <div className="nav left">
          <span
            onClick={(e) => {
              this.props.history.push("/product");
            }}
          >
            PRODUCT
          </span>
          <span
            onClick={(e) => {
              this.props.history.push("/store");
            }}
          >
            STORY
          </span>
          <span
            onClick={(e) => {
              this.props.history.push("/store");
            }}
          >
            STORE
          </span>
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

          <span
            onClick={() => {
              this.props.history.push("/cart");
            }}
          >
            CART
          </span>
        </div>
      </header>
    );
  }
}

export default withRouter(Nav);
