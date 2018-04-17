import React, {Component} from 'react';
import ArticleList from "./ArticleList"
import ArticleChart from "./ArticleChart"
import Filters from "./Filters"
import Counter from "./Counter"

class App extends Component {

	render() {
		return (
			<div>
				{/*<Counter />*/}

				<Filters articles={[]}/>
				<ArticleList/>
			</div>
		);
	}
}


export default App;