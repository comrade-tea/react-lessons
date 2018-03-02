import React from 'react'
import {render} from 'react-dom'
import Article from './Article'
import {articles} from './fixtures'
// import Root from './components/Root'

// const article = articles[0];
// console.log(article);

function Root() {
	return <h1>Hellow!</h1>;
}

render(<Article article={articles[0]}/>, document.getElementById('container'));