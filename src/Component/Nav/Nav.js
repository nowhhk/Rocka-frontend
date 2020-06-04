import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      login: "LOGIN",
      join: true,
      scrollTop: {},
      navClass: "header",
    }
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
    if ('Authorization' in localStorage) {
      this.setState({
        login: "LOGOUT",
        join: false,
      });
    }
  };

  loginEvent = () => {
    if (this.state.login === "LOGOUT") {
      this.props.history.push("/signin");
      localStorage.clear('Authorization');
      this.setState({
        login: "LOGIN",
        join: true,
      });
    } else {
      this.props.history.push("/signin");
    }
  }

  render() {
    const { login, join } = this.state

    return (
      <header className={this.state.scrollTop > 200 ? "scrolled" : "header"}>
        <div className="nav left">
          <span
            onClick={() => {
              this.props.history.push("/product");
            }}
          >
            PRODUCT
            </span>
          <span
            onClick={() => {
              this.props.history.push("/store");
            }}
          >
            STORY
            </span>
          <span
            onClick={() => {
              this.props.history.push("/store");
            }}
          >
            STORE
            </span>
        </div>
        <h1 className="logo">
          <span
            onClick={() => {
              this.props.history.push("/");
            }}
          >
            LAKA
            </span>
        </h1>
        <div className="nav right">
          <span
            onClick={this.loginEvent}
          >
            {login}
          </span>
          <span
            style={{ display: join ? 'inlineblock' : 'none' }}
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
