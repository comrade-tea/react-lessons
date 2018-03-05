import React from 'react'
import {render} from 'react-dom'
import ArticleList from './ArticleList'
import {articles} from './fixtures'
// import Root from './components/Root'

// const article = articles[0];
// console.log(article);

render(<ArticleList articles={articles}/>, document.getElementById('container'));