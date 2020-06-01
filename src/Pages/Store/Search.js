import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "./Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poetFilter: "",
      area: [
        { id: 1, value: "서울", name: "" },
        { id: 2, value: "경기", name: "" },
        { id: 3, value: "인천", name: "" },
        { id: 4, value: "부산", name: "" },
        { id: 5, value: "대구", name: "" },
        { id: 6, value: "광주", name: "" },
        { id: 7, value: "대전", name: "" },
        { id: 8, value: "울산", name: "" },
        { id: 9, value: "강원", name: "" },
        { id: 10, value: "충청", name: "" },
        { id: 11, value: "전라", name: "" },
        { id: 12, value: "경상", name: "" },
        { id: 13, value: "제주", name: "" },
      ],
    };
  }

  render() {
    const { area } = this.state;
    return (
      <div className="Search">
        <Dropdown
          options={area}
          onChange={this._onSelect}
          value={area.value}
          placeholder="전체"
          className="myClassName"
        />
        <div className="searchRight">
          <input
            type="text"
            id="filter"
            value={this.state.searchKeyword}
            onChange={this.props.handleChange}
            placeholder="매장명으로 검색하세요."
            name="searchKeyword"
          />
          <div className="searchButton">검색</div>
        </div>
      </div>
    );
  }
}

export default Search;
