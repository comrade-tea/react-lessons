import React, {Component} from 'react';
import Select from "react-select";
import PropTypes from 'prop-types';
// @@ redux
import {changeFilter} from "../../AC"
import {connect} from 'react-redux';


class SelectFilter extends Component {
	/*state = {
		selection: null
	}*/

	render() {
		const {articles} = this.props;
		const options = articles.map(item => ({
			label: item.title,
			value: item.id
		}));

		return (
			<div>
				<Select multi options={options} onChange={this.changeSelection} value={this.props.select}/>
			</div>
		);
	}

	changeSelection = selection => {
		// this.setState({selection});
		const {changeFilter} = this.props;
		changeFilter(selection);
	}
}

export default connect((store) => ({
	select: store.select
}), {changeFilter})(SelectFilter);
