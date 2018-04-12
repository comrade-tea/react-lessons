import React, {Component} from 'react';
import Select from "react-select";
import PropTypes from 'prop-types';

class SelectFilter extends Component {
	state = {
		selection: null
	}

	render() {
		const {articles} = this.props;
		const options = articles.map(item => ({
			label: item.title,
			value: item.id
		}));

		return (
			<div>
				<Select options={options} onChange={this.changeSelection} value={this.state.selection}/>
			</div>
		);
	}

	changeSelection = selection => {
		this.setState({selection});
	}
}

SelectFilter.propTypes = {};

export default SelectFilter;
