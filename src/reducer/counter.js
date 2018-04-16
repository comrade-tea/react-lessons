import {INCREMENT} from "../constants";

export default (count = 0, action) => {
	// console.log("---", "counterReducer says hello!!!");
	// console.log("---", count);
	const {type} = action;

	switch (type) {
		case INCREMENT: return count + 1
	}

	return count;
}
