import React, {Component} from "react"
import Article from "./Article"
import accordion from "../decorators/accordion"
import PropTypes from 'prop-types';
// import {articles} from './fixtures'

class ArticleList extends Component {

	static propTypes = {
		articles: PropTypes.array.isRequired,
		openItemId: PropTypes.string,
		toggleOpen: PropTypes.func.isRequired
	}

	componentDidUpdate() {
		console.log("----", "updateee");
	}

	render() {
		const {articles, openItemId, toggleOpen} = this.props;
		// console.log("----", toggleOpen);

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

export default accordion(ArticleList);