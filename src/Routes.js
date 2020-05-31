import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import Product from "./Pages/Product/Product";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import Store from "../Pages/Store/Store"
// import MyPage from "../Pages/MyPage/MyPage"
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart"

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/ProductDetail" component={ProductDetail} />
          {/* <Route exact path="/store" component={Store} />
          <Route exact path="/mypage" component={MyPage} /> */}
          <Route exact path="/cart" component={ShoppingCart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
