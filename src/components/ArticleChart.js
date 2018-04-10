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
<<<<<<< HEAD
		// console.log("----", this.refs)
	}

	setContainerRef = (el) => {
		// console.log("----", el);
=======
		console.log("----", this.refs)
	}

	setContainerRef = (el) => {
		console.log("----", el);
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
	}
}

export default ArticleChart;