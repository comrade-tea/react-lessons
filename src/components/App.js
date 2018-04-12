import React, {Component} from 'react';
import ArticleList from "./ArticleList"
import ArticleChart from "./ArticleChart"
import Select from "react-select";
// @ react-date-picker
import DatePicker from "./DatePicker"


class App extends Component {

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
				{/*<UserForm/>*/}
				{/*<Select options={options} onChange={this.changeSelection} value={this.state.selection}/>*/}

				<DatePicker/>
				<ArticleList articles={this.props.articles} defaultItemId={articles[0].id}/>
				<ArticleChart articles={this.props.articles}/>
			</div>
		);
	}

	changeSelection = selection => {
		console.log("----", selection);
		this.setState({selection});
	}

}

export default App;