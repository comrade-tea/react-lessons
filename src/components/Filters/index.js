import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectFilter from "./SelectFilter";

// @ react-date-picker
import DatePicker from "./DatePicker"

class Filters extends Component {


	render() {



		return (
			<div>
				{/*<UserForm/>*/}
				<SelectFilter articles={this.props.articles} />
				<DatePicker/>
			</div>
		);
	}


}

Filters.propTypes = {};

export default Filters;
