import React, {Component} from 'react';
import ArticleList from "./ArticleList"
import ArticleChart from "./ArticleChart"
import Filters from "./Filters"
import Counter from "./Counter"




class App extends Component {



	render() {
		const {articles} = this.props;

		return (
			<div>
				<Filters articles={articles}/>

				<ArticleList articles={this.props.articles} defaultItemId={articles[0].id}/>
				<ArticleChart articles={this.props.articles}/>
			</div>
		);
	}



}

export default App;