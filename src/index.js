import React from 'react'
import {render} from 'react-dom'
import ArticleList from './components/ArticleList'
import {articles} from './fixtures'
// import Root from './components/Root'

// const article = articles[0];
// console.log(article);

render(<ArticleList articles={articles}/>, document.getElementById('container'));

/*
let group = {
	title: "Наш курс",
	students: ["Вася", "Петя", "Даша"],

	showList: function() {
		this.students.forEach(function(student) {
			console.log(this)
			// alert(this.title + ': ' + student); // будет ошибка
		})
	}
}*/

/*let lol = (...args) => {
	let ninja = {
		val1: "value1",
		val2: "value2",
	}
	// console.log(args);
	// console.log(...args);
	// console.log(...ninja);
};*/

// lol(1, 2, 3);

// render(React.createElement(ArticleList, { articles: articles }), document.getElementById('container'));