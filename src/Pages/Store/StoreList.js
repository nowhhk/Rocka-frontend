import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Stores from "./Stores";
import "./Store.scss";

class StoreList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // let data = this.props.stores
    // const filteredComponent = (data) => {
    //   data = data.filter((c) => {
    //     return c.address.includes(this.state.searchKeyword) > -1;
    //   });
    // }

    const list = this.props.stores.map((store, idx) => {
      return (
        <Stores
          key={store.idx}
          no={store.idx}
          type={store.branch}
          name={store.name}
          tel={store.phone_number}
          address={store.address}
          weekday={store.store_time}
          map={store.map_url}
        />
      );
    });

    return (
      <div className="list-wrap">
        <div className="store-list-title">
          <div className="list">
            <div className="number">No.</div>
            <div className="type">구분</div>
            <div className="name">스토어명</div>
            <div className="tel">전화번호</div>
            <div className="address">주소</div>
            <div className="weekday">운영시간</div>
            <div className="map">지도보기</div>
          </div>
        </div>
        {list}
      </div>
    );
  }
}

export default withRouter(StoreList);
