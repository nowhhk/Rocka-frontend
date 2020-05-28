import React, { Component } from "react"
import "./MainLeftChoiceColor.scss"

class MainLeftChoiceColor extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            Color: this.props.productColor
        })
    }

    render() {
        console.log(this.state.Color)
        const colorArr = this.state.Color.map((m, idx) => {
            return <li className="colorchart" key={idx}>{m}</li>
        });

        return (
            <div className="MainLeftChoiceColor">
                <ul>
                    {colorArr}
                </ul>
            </div>
        );
    }
}

export default MainLeftChoiceColor;