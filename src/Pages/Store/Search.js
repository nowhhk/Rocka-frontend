import "./Search.scss";

import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      selected: "",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.userInput);
  };

  onFormSelect = (e) => {
    this.props.onSubmit(this.state.selected);
  };

  handleUserInput = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleSelect = (e) => {
    this.setState({ selected: e.target.value }, () => this.onFormSelect(e));
    //드롭다운에서 선택시 바로 부모컴포넌트로 전달함
  };

  render() {
    const { userInput, selected } = this.state;
    return (
      <div className="Search">
        <form onSubmit={this.onFormSubmit}>
          <select
            className="select"
            onChange={this.handleSelect}
            value={selected}
            className="myClassName"
          >
            <option value="">전체</option>
            <option value="서울">서울</option>
            <option value="경기">경기</option>
            <option value="인천">인천</option>
            <option value="부산">부산</option>
            <option value="대구">대구</option>
            <option value="광주">광주</option>
            <option value="대전">대전</option>
            <option value="울산">울산</option>
            <option value="충청">충청</option>
            <option value="전라">전라</option>
          </select>

          <div className="textInput">
            <input
              type="text"
              value={userInput}
              onChange={this.handleUserInput}
              placeholder="매장명으로 검색하세요."
            />
            <button type="submit" className="searchButton">
              검색
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
