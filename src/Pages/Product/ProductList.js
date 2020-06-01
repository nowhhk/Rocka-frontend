import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";

class ProductList extends Component {
  render() {
    const map = this.props.products.map((item) => {
      return (
        <Link to="/ProductDetail" className="link">
          <Item
            key={item.id}
            name={item.name}
            price_krw={item.price_krw}
            description={item.description}
            color={item.color}
            img={item.img}
            category={item.category}
          />
        </Link>
      );
    });

    return (
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          minWidth: "1280px",
          marginTop: "1em",
        }}
      >
        {map}
      </ul>
    );
  }
}

export default ProductList;
