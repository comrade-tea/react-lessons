import React, {Component} from 'react';
import Comment from './Comment';
import toggleOpen from '../decorators/toggleOpen';
import PropTypes from 'prop-types';

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
		console.log("----", "did mount...");
	}

	getBody() {
		const {comments} = this.props
		if (!this.props.isOpen)
			return null
		if (!comments)
			return <div><i>there is no comments yet!</i></div>

		const commentsElements = comments.map(item => {
			return <li key={item.id}><Comment comment={item}/></li>;
		})

		return (
			<ul>
				{commentsElements}
			</ul>
		)
	}
}

// CommentList.propTypes = {};

export default toggleOpen(CommentList);
