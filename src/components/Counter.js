import React, {Component} from 'react';
import {connect} from 'react-redux'
import {increment} from '../AC'
import PropTypes from 'prop-types';

class Counter extends Component {
	static propTypes = {
		counter: PropTypes.number
	}

	render() {
		// console.log("---", this.props);
		return (
			<div>
				<h2>{this.props.counter}</h2>
				<button onClick={this.handleIncrement}>Incrimenting</button>
			</div>
		);
	}

	handleIncrement = () => {
		// console.log("----", "incrementing");
		this.props.increment();
	}
}

const decorator = connect((state) => ({
	counter: state.count
}),  {increment});

export default decorator(Counter);
