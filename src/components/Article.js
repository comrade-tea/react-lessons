import React, {Component} from "react"
import CommentList from "./CommentList"
import toggleOpen from "../decorators/toggleOpen"
import PropTypes from 'prop-types';


class Article extends Component {
	/*static propTypes = {
		article: PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired
	}*/

	/*props: {}*/
	
	/*componentWillReceiveProps(nextProps) {
		console.log("---", this.props.isOpen, nextProps.isOpen)
	}*/

	render() {
		// console.log("---", this.props);

		const {article, isOpen, toggleOpen} = this.props;

		return (
			<div ref={(node) => console.log(node)}>
				<h1>{article.title}</h1>
				<button onClick={toggleOpen}>{isOpen ? "close" : "open"} info</button>
				{this.getBody()}

			</div>
		)
	}

	getBody() {
		const {article, isOpen} = this.props;
		if (!isOpen)
			return null;

		return (
			<div>
				<div>{article.text}</div>
				<CommentList comments={article.comments}/>
			</div>
		)
	}
}

export default toggleOpen(Article);