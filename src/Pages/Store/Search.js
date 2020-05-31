import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './Search.scss';

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            poetFilter: "",
            options: [
                { id: 1, value: "서울" },
                { id: 2, value: "경기" },
                { id: 3, value: "인천" },
                { id: 4, value: "부산" },
                { id: 5, value: "대구" },
                { id: 6, value: "광주" },
                { id: 7, value: "대전" },
                { id: 8, value: "울산" },
                { id: 9, value: "강원" },
                { id: 10, value: "충청" },
                { id: 11, value: "전라" },
                { id: 12, value: "경상" },
                { id: 13, value: "제주" },
            ]
        }
    }

    handleChange = (e) => {
        this.setState({
            poetFilter: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render() {
        const { options } = this.state
        return (
            <div className="Search">
                <Dropdown options={options} onChange={this._onSelect} value={options.value} placeholder="전체" />
                <div className="searchRight">
                    <input type="text" id="filter"
                        value={this.state.poetFilter}
                        onChange={this.handleChange}
                        placeholder="매장명으로 검색하세요." />
                    <div className="searchButton">검색</div>
                </div>
            </div >
        )
    }
}

export default Search;