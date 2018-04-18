import React, {Component} from "react"
import Article from "./Article/Article"
import accordion from "../decorators/accordion"
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {filtratedArticlesSelector} from "../selectors";


class ArticleList extends Component {

	static propTypes = {
		articles: PropTypes.array.isRequired,
		openItemId: PropTypes.string,
		toggleOpen: PropTypes.func.isRequired
	}

	render() {
		console.log("----", "update articleLIst");

		const {articles, openItemId, toggleOpen} = this.props;

		const articleElements = articles.map(item => {
			return (
				<li key={item.id}>
					{/*// получу wrappedArticle*/}
					<Article
						article={item}
						isOpen={item.id === openItemId}
						// toggleOpen={toggleOpen.bind(this, item.id)}
						toggleOpen={() => toggleOpen(item.id)}
					/>
				</li>)
		});

		return (
			<ul>
				{articleElements}
			</ul>
		)
	}
}

export default connect((state) => {
	return {
		articles: filtratedArticlesSelector(state)
	}
})(accordion(ArticleList));