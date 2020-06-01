import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="sort_container">
        <ul>
          <li onClick={() => this.props.handleNewSort("new")}>신상품</li>
          <li onClick={() => this.props.handleBestSort("best")}>인기상품</li>
        </ul>
      </div>
    );
  }
}

export default Sort;
