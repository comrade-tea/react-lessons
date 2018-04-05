import React, {Component} from 'react';
import ArticleList from "./ArticleList"
import ArticleChart from "./ArticleChart"
import UserForm from "./UserForm";
import Select from "react-select";
import 'react-select/dist/react-select.css';

import {articles} from "../fixtures";

class App extends Component {

	state = {
		selection: null
	}

	render() {
		const options = this.props.articles.map(item => ({
			label: item.title,
			value: item.id
		}));

		return (
			<div>
				<UserForm/>
				<Select options={options} onChange={this.changeSelection} value={this.state.selection}/>
				<ArticleList articles={this.props.articles}/>
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