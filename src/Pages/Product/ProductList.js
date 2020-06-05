import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./Product.scss";

class ProductList extends Component {
  render() {
    const map = this.props.products.map((item) => {
      return (
        <Link to="/ProductDetail" className="link" style={{ color: "black" }}>
          <Item
            // key={item.id}
            name={item.name}
            price_krw={item.price_krw}
            description={item.description}
            color={item.color}
            outer_front_image_url={item.outer_front_image_url}
            outer_back_image_url={item.outer_back_image_url}
            category={item.category}
          />
        </Link>
      );
    });

    return <ul>{map}</ul>;
  }
}

export default ProductList;
