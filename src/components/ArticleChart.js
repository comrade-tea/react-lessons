import React, {Component} from 'react';

class ArticleChart extends Component {


	componentWillReceiveProps(nextProps) {
		// обнволение данных, что-то там сделать
	}

	render() {
		return <div ref={this.setContainerRef}></div>
	}

	componentWillUnmount() {
		// do some clean
	}
	componentDidMount() {
		// можем работать с dom элементом this.refs.chart
		// console.log("----", this.refs)
	}

	setContainerRef = (el) => {
		// console.log("----", el);
	}
}

export default ArticleChart;