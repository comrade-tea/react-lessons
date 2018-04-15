import {INCREMENT, DELETE_ARTICLE} from "../constants";


export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	console.log("---", "deleting article..");
	return {
		type: DELETE_ARTICLE,
		payload: {id}
	}
}