import React from "react";
import ToCalculate from "../ToCalculate/ToCalculate";

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, newValue) {
        this.setState({ [value]: newValue })
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <ToCalculate name="value1" value={this.state.value1} changeValue={this.handleChange} koef="0.5" />
                <ToCalculate name="value2" value={this.state.value2} changeValue={this.handleChange} koef="0.05" />
            </div>
        )
    }
}

export default Calculator;