import React from 'react'
import {render} from 'react-dom'
import Root from './components/Root'

render(<Root/>, document.getElementById('container'));
// render(React.createElement(ArticleList, { articles: articles }), document.getElementById('container'));