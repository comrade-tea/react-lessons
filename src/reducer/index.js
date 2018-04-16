import {combineReducers} from "redux"
import counterReducer from "./counter"
import articlesReducer from "./articles"
import selectReducer from "./select"
import datepickerReducer from "./datepicker"

export default combineReducers({
	count: counterReducer,
	articles: articlesReducer,
	select: selectReducer,
	datepicker: datepickerReducer
});

