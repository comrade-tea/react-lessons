import React from "react"
import Article from "./Article"
// import {articles} from './fixtures'

export default function ArticleList({articles}) {
	// console.log(props);
	// const {article} = props;
	return (
		<ul>
			<li><Article article={articles[0]}/></li>
			<li><Article article={articles[1]}/></li>
			<li><Article article={articles[2]}/></li>
		</ul>
	)
}