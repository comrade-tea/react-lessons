import React, {Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends Component {
	state = {
		isOpen: false
	}

	render() {
		const {comments} = this.props;


		return (
			<div>
				<button onClick={this.toggleOpen}>toggle comments</button>
				{this.getBody()}
			</div>
		);
	}

	getBody() {
		const {comments} = this.props
		if (!this.state.isOpen)
			return null
		if (!comments)
			return <div><i>there is no comments yet!</i></div>

		const commentsElements = comments.map(item => {

			return <li key={item.id}><Comment comment={item}/></li>;
			// return (
			// 	<li key={item.id}>
			// 		<h3>{item.user}</h3>
			// 		<h3>{item.text}</h3>
			// 	</li>
			// )
		})

		return (
			<ul>
				{commentsElements}
			</ul>
		)
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})

		console.log(this.state.isOpen);
	};
}

// CommentList.propTypes = {};

export default CommentList;
