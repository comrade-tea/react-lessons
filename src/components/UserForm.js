import React, {Component} from 'react';
import "./userform.css"
import PropTypes from 'prop-types';

class UserForm extends Component {

	state = {
		name: "",
		text: ""
	}

	limiters = {
		name: {
			min: 5,
			max: 15
		},
		text: {
			min: 10,
			max: 20
		}
	}

	render() {
		return (
			<div>
				Name: <input type="text" value={this.state.name}
				             className={this.getClassName("name")}
				             onChange={this.handleChange("name")}/>

				Text: <input type="text" value={this.state.text}
				             className={this.getClassName("text")}
				             onChange={this.handleChange("text")}/>
			</div>
		);
	}

	handleChange = type => ev => {
		this.setState({
			[type]: ev.target.value
		});
	}

	getClassName = (type) => {
		const limit = this.limiters[type];
		const currentLength = this.state[type].length;

		return limit.min > currentLength || currentLength > limit.max ? "input-error" : ""
	}
}

export default UserForm;