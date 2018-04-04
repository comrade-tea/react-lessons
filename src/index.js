import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'
// import Root from './components/Root'

// const article = articles[0];
// console.log(article);

render(<App articles={articles}/>, document.getElementById('container'));
// render(React.createElement(ArticleList, { articles: articles }), document.getElementById('container'));