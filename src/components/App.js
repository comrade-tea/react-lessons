import React, {Component} from 'react';
import ArticleList from "./ArticleList"
import ArticleChart from "./ArticleChart"
import UserForm from "./UserForm";
import Select from "react-select";

class App extends Component {

	render() {
		const ninja = [{ value: 'one', label: 'One' },
			{ value: 'two', label: 'Two' }];

		return (
			<div>
				<UserForm/>
				<Select options={ninja}/>
				<ArticleList articles={this.props.articles}/>
				<ArticleChart articles={this.props.articles}/>
			</div>
		);
	}

}

export default App;