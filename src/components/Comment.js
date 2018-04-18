import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {commentSelectorFactory} from "../selectors";


class Comment extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		// from connect
		comment: PropTypes.shape({
			user: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	}

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

const mapStateToProps = (state, ownProps) => {
	const commentSelector = commentSelectorFactory();

	return () => {
		return {comment: commentSelector(state, ownProps)}
	}
}

export default connect(mapStateToProps)(Comment);