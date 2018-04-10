import React, {Component} from 'react';
import "./userform.css"
import PropTypes from 'prop-types';

class UserForm extends Component {

	state = {
		userName: "",
		userText: ""
	}

	render() {
		return (
			<div>
				Name: <input type="text" ref="userName" id="userName" value={this.state.userName} onChange={this.handleChange}/>
				Text: <textarea type="text" ref="userText" id="userText" value={this.state.userText} onChange={this.handleChange}/>
			</div>
		);
	}

	handleChange = (ev) => {
		let field = ev.target.id;

		this.setState({
			[field]: ev.target.value
		});
	}

	componentDidUpdate(prevProps, {userName: prevUserName, userText: prevUserText}) {
		const {userName, userText} = this.state;

		if (prevUserName !== userName) {
			this.validateName(this.refs.userName);
		}
		if (prevUserText !== userText) {
			this.validateText(this.refs.userText);
		}
	}

	validateName(domEl) {
		let valueLength = this.state.userName.length;

		if (valueLength < 5 || valueLength >= 15) {
			domEl.classList.add("input-error");
		}
		else {
			domEl.classList.remove("input-error");
		}
	}

	validateText(domEl) {
		let valueLength = this.state.userText.length;

		if (valueLength < 20 || valueLength >= 50) {
			domEl.classList.add("input-error");
		}
		else {
			domEl.classList.remove("input-error");
		}
	}
}

export default UserForm;
