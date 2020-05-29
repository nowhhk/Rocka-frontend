import React, { Component } from "react"
import "./MainLeftChoiceColor.scss"

class MainLeftChoiceColor extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            Color: this.props.productColor,
            hello: this.props.cup
        })
    }

    render() {
        // console.log("props", this.props.cup);
        // console.log(this.state.Color)
        const { cup } = this.props;
        const colorArr = this.state.Color.map((m, idx) => {
            return <li className="colorchart" key={idx}>{m}</li>
        });

        return (
            <div
                className="MainLeftChoiceColor"
                style={{ display: cup ? 'block' : 'none' }}>
                {/* style={{this.state.hello f? {{display: 'block'}} : {{display: 'none'}}}} */}
                <ul>
                    {colorArr}
                </ul>
            </div>
        );
    }
}

export default MainLeftChoiceColor;