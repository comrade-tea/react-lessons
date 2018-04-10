import React, {Component} from 'react';
<<<<<<< HEAD
import "./userform.css"
=======
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
import PropTypes from 'prop-types';

class UserForm extends Component {

	state = {
<<<<<<< HEAD
		userName: "",
		userText: ""
=======
		userName: ""
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
	}

	render() {
		return (
			<div>
<<<<<<< HEAD
				Name: <input type="text" ref="userName" id="userName" value={this.state.userName} onChange={this.handleChange}/>
				Text: <textarea type="text" ref="userText" id="userText" value={this.state.userText} onChange={this.handleChange}/>
=======
				Name: <input type="text" value={this.state.userName} onChange={this.handleUserChange}/>
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
			</div>
		);
	}

<<<<<<< HEAD
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
=======
	handleUserChange = (ev) => {
		this.setState({
			userName: ev.target.value
		});
		console.log(ev.target.value);
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
	}
}

export default UserForm;
