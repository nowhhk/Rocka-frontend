import React, { Component } from "react";
import Item from "./Item";

class ProductList extends Component {
  render() {
    const map = this.props.data.map((item) => {
      return (
        <Item
          key={item.id}
          name={item.name}
          price={item.price}
          desc={item.desc}
          color={item.color}
          img={item.img}
          category={item.category}
        />
      );
    });
    // console.log(this.props.data);
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
