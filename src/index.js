import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {articles} from './fixtures'
// import Root from './components/Root'

// const article = articles[0];
// console.log(article);

render(<App articles={articles}/>, document.getElementById('container'));

/*const ninja = (openArticleId) => {
	// this.setState({openArticleId});
	console.log("----", {openArticleId});
}*/

// ninja({lol: "adsfasf"});

/*class ninja {
	toggleOpen(openItemId) {
		console.log(this);
	}
	toggleOpen2 = (openItemId) => {
		console.log(this);
	}
}

new ninja().toggleOpen();
new ninja().toggleOpen2();*/

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