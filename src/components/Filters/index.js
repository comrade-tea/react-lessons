import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectFilter from "./SelectFilter";
import DatePicker from "./DatePicker"
//@ redux
import {connect} from "react-redux"


class Filters extends Component {
	render() {
		console.log("----", this.props);

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

export default connect((store) => ({
	articles: store.articles
}))(Filters);
