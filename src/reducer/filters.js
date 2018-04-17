import {INCREMENT, CHANGE_SELECT, CHANGE_DATE} from "../constants";

const defaultFilters = {
	select: [],
	dateRange: {
		from: undefined,
		to: undefined
	}
};

export default (filters = defaultFilters, action) => {
	const {type, payload} = action;

	switch (type) {
		case CHANGE_SELECT:
			return {...filters, select: payload.selected}
		case CHANGE_DATE:
			return {...filters, dateRange: payload.dateRange}
	}

	return filters;
}
