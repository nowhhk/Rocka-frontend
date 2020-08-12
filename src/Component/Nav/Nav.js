import "./Nav.scss";

import React, { Component } from "react";

import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      login: "LOGIN",
      join: true,
      scrollTop: {},
      navClass: "header",
    };
  }

  onScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
    if ("Authorization" in localStorage) {
      this.setState({
        login: "LOGOUT",
        join: false,
      });
    }
  }

  loginEvent = () => {
    if (this.state.login === "LOGOUT") {
      this.props.history.push("/signin");
      localStorage.clear("Authorization");
      this.setState({
        login: "LOGIN",
        join: true,
      });
    } else {
      this.props.history.push("/signin");
    }
  };

  render() {
    const { login, join } = this.state;

    return (
      <header
        className={this.state.scrollTop > 200 ? "header scrolled" : "header"}
      >
        <ul className="nav left">
          <li>
            <span
              onClick={() => {
                this.props.history.push("/product");
              }}
            >
              PRODUCT
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                this.props.history.push("/store");
              }}
            >
              STORY
            </span>
          </li>
          <li>
            <span
              onClick={() => {
                this.props.history.push("/store");
              }}
            >
              STORE
            </span>
          </li>
        </ul>
        <h1 className="logo">
          <span
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            LAKA
          </span>
        </h1>
        <ul className="nav right">
          <li>
            <span onClick={this.loginEvent}>{login}</span>
          </li>
          <li>
            <span
              style={{ display: join ? "inlineblock" : "none" }}
              onClick={(e) => {
                this.props.history.push("/signup");
              }}
            >
              JOIN
            </span>
          </li>
          <li>
            <span>MY</span>
          </li>
          <li>
            <span
              onClick={() => {
                this.props.history.push("/cart");
              }}
            >
              CART
            </span>
          </li>
        </ul>
      </header>
    );
  }
}

export default withRouter(Nav);
