import React, {Component} from "react"

export default class Article extends Component{
	render() {
		console.log("---", this.props);
		const {article} = this.props;

		return <div>
					<h1>{article.title}</h1>
					<div>{article.text}</div>
				</div>
	}
}