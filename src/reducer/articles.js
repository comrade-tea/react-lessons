import {normalizedArticles as defaultArticles} from '../fixtures'
import {DELETE_ARTICLE} from "../constants";


export default (articlesState = defaultArticles, action) => {
	const {type, payload} = action

	switch (type) {
		case DELETE_ARTICLE: return articlesState.filter((item) => item.id !== payload.id)
	}

	return articlesState
}