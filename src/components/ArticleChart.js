import React, {Component} from 'react';

class ArticleChart extends Component {
	componentDidMount() {
		// можем работать с dom элементом this.refs.chart
	}

	componentWillReceiveProps(nextProps) {
		// обнволение данных, что-то там сделать
	}

	render() {
		return <div ref="chart"></div>
	}

	componentWillUnmount() {
		// do some clean
	}
}

export default ArticleChart;