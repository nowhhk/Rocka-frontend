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
    console.log(this.props.data);
    return <div>{map}</div>;
  }
}

export default ProductList;
