import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';
import UserForm from './UserForm';

class CommentList extends Component {
	static propTypes = {
		comments: PropTypes.array.isRequired
	}

	componentWillUnmount() {
		console.log("----", "commentList will unmount bitch!");
	}

	render() {
		const {comments, toggleOpen} = this.props;

		return (
			<div>
				<button onClick={toggleOpen}>toggle comments</button>
				{this.getBody()}
			</div>
		);
	}

	componentDidMount() {
		// console.log("----", "did mount...");
	}

	getBody() {
		// const {comments} = this.props
		const {comments} = this.props;

		if (!this.props.isOpen)
			return null
		if (!comments)
			return <div><i>there is no comments yet!</i></div>

		const commentsElements = comments.map(id => {
			return <li key={id}><Comment id={id}/></li>;
		})

		return (
			<div>
				<ul>
					{commentsElements}
				</ul>

				<UserForm/>
			</div>
		)
	}
}

// CommentList.propTypes = {};

export default toggleOpen(CommentList);
