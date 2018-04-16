import {CHANGE_DATE} from "../constants";


export default (selectState = {from: undefined, to: undefined}, action) => {
	const {type, payload} = action;

	switch (type) {
		case CHANGE_DATE:
			return payload.date
	}

	return selectState
}