import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
	render() {
		const {comment} = this.props;

		return (
			<div>
				<h3>{comment.user}</h3>
				<h3>{comment.text}</h3>
			</div>
		);
	}
}

Comment.propTypes = {};

export default Comment;
