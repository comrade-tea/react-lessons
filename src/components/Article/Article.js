import React, {Component} from "react"
import ReactDOM from "react-dom"
import CommentList from "../CommentList"
import toggleOpen from "../../decorators/toggleOpen"
import { CSSTransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';
import './article.css';

// redux
import {connect} from "react-redux";
import {deleteArticle} from "../../AC";


class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		}).isRequired
	}

	render() {

		const {article, isOpen, toggleOpen} = this.props;

		return (
			<div>
				<h1>{article.title}</h1>
				<button onClick={toggleOpen}>{isOpen ? "close" : "open"} info</button>
				<button onClick={this.handleDelete}>delete</button>

				<CSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={300}
					transitionLeaveTimeout={300}>
					{this.getBody()}
				</CSSTransitionGroup>
			</div>
		)
	}

	getBody() {
		const {article, isOpen} = this.props;
		if (!isOpen)
			return null;

		return (
			<section>
				<div>{article.text}</div>
				<CommentList comments={article.comments}/>
			</section>
		)
	}

	handleDelete = () => {
		const {article, deleteArticle} = this.props;
		deleteArticle(article.id)
	}
}

export default connect(null, {deleteArticle})(Article);