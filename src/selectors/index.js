import {createSelector} from "reselect";

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
	const {select, dateRange: {from, to}} = filters;

	return articles.filter(article => {
		const published = Date.parse(article.date);

		return (!select.length || select.includes(article.id)) && (!from || !to || (published > from && published < to))
	});
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
	console.log("----", comments, id);

	return comments.find(comment => comment.id === id)
})