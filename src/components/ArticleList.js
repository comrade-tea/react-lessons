import React, {Component} from "react"
import Article from "./Article/Article"
import accordion from "../decorators/accordion"
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

class ArticleList extends Component {

	static propTypes = {
		articles: PropTypes.array.isRequired,
		openItemId: PropTypes.string,
		toggleOpen: PropTypes.func.isRequired,
		select: PropTypes.array,
		date: PropTypes.object
	}

	render() {
		const {articles, select, date, openItemId, toggleOpen} = this.props;

		let filteredArticles;
		filteredArticles = this.filterBySelect(articles);
		filteredArticles = this.filterByDate(filteredArticles);

		const articleElements = filteredArticles.map(item => {
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

	filterBySelect(articles) {
		let {select} = this.props;

		if (select.length) {
			const selectFilter = select.map(item => item.label);
			return articles.filter(item => {
				return selectFilter.indexOf(item.title) !== -1;
			})
		}

		return articles;
	}

	filterByDate(articles) {
		let {date} = this.props;

		if (date.from && date.to) {
			const from = Date.parse(date.from);
			const to = Date.parse(date.to);

			return articles.filter(item => {
				const articleDate = Date.parse(item.date);
				// console.log("----", `from: ${from > articleDate}`)
				// console.log("----", `to: ${to > articleDate}`)
				return from < articleDate && to > articleDate;
			})
		}

		return articles;
	}

}

export default connect((state) => ({
	articles: state.articles,
	select: state.select,
	date: state.datepicker,
}))(accordion(ArticleList));