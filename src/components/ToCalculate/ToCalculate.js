import React from "react";
import PropTypes from "prop-types";

function calculate(value, k) {
    return value * k
}

class ToCalculate extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.changeValue(this.props.name, event.target.value)
    }

    render() {
        const result = calculate(this.props.value, this.props.koef);
        return ( 
            <div>
                <h2>Multiply by {this.props.koef}</h2>
                <input type="number" onChange={this.handleChange}/>
                <h3>Result: {result}</h3>
            </div>
        )
    }
}

ToCalculate.propTypes = {
    props: PropTypes.number,
};

export default ToCalculate;
