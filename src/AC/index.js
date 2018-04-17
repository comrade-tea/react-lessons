import {INCREMENT, DELETE_ARTICLE, CHANGE_DATE, CHANGE_SELECT} from "../constants";


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

export function changeDateRange(dateRange) {
	return {
		type: CHANGE_DATE,
		payload: {dateRange}
	}
}

export function changeSelect(selected) {
	return {
		type: CHANGE_SELECT,
		payload: {selected}
	}
}