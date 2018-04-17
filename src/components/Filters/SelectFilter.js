import React, {Component} from 'react';
import Select from "react-select";
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {changeSelect} from "../../AC";


class SelectFilter extends Component {
	/*state = {
		selection: null
	}*/

	render() {
		const {articles, selection} = this.props;
		const options = articles.map(item => ({
			label: item.title,
			value: item.id
		}));

		return (
			<div>
				<Select multi options={options} onChange={this.changeSelection} value={selection}/>
			</div>
		);
	}

	changeSelection = selection => {this.props.changeSelect(selection.map((option) => option.value))}
}

// SelectFilter.propTypes = {};

export default connect(({articles, filters}) => {
	return {
		articles,
		selection: filters.select,
	}
}, {changeSelect})(SelectFilter);
