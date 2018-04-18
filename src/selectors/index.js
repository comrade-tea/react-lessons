import {createSelector} from "reselect";

const filtersGetter = state => state.filters
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles, filters) => {
	console.log("----", "recomputing");
	console.log("----", articles, filters);
	const {select, dateRange: {from, to}} = filters;

	return articles.filter(article => {
		const published = Date.parse(article.date);

		return (!select.length || select.includes(article.id)) && (!from || !to || (published > from && published < to))
	});
})

/*
export function filtrateArticles({articles, filters}) {
	const {select, dateRange: {from, to}} = filters;

	return articles.filter(article => {
		const published = Date.parse(article.date);

		return (!select.length || select.includes(article.id)) && (!from || !to || (published > from && published < to))
	});
}
*/
