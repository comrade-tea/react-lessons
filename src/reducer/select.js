import {CHANGE_SELECT} from "../constants";

export default (selectState = [], action) => {
	const {type, payload} = action
	// console.log("----", "select reducer");
	// console.log("----", payload);

	switch (type) {
		case CHANGE_SELECT:
			return payload.selection
	}

	return selectState
}