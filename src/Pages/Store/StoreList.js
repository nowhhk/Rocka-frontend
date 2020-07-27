import "./Store.scss";

import React, { Component } from "react";

import Stores from "./Stores";
import { withRouter } from "react-router-dom";

class StoreList extends Component {
  render() {
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
            {/* <div className="number">No.</div> */}
            <div className="type">스토어명</div>
            <div className="name">구분</div>
            <div className="tel">전화번호</div>
            <div className="address">주소</div>
            <div className="weekday">운영시간</div>
            <div className="map">지도</div>
          </div>
        </div>
        {list}
      </div>
    );
  }
}

export default withRouter(StoreList);
