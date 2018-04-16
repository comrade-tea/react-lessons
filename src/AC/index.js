import {INCREMENT, DELETE_ARTICLE, CHANGE_SELECT, CHANGE_DATE} from "../constants";


export function increment() {
	return {
		type: INCREMENT
	}
}

export function deleteArticle(id) {
	// console.log("---", "deleting article..");
	return {
		type: DELETE_ARTICLE,
		payload: {id}
	}
}

export function changeFilter(selection) {
	// console.log("---", "AC select onchange..");
	return {
		type: CHANGE_SELECT,
		payload: {
			selection: selection
		}
	}
}

export function changeDate(date) {
	// console.log("---", "AC date onchange..");
	return {
		type: CHANGE_DATE,
		payload: {date}
	}
}