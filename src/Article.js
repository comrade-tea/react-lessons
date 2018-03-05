import React, {Component} from "react"

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false
		}
	}

	render() {
		console.log("---", this.props);
		// console.log(this.props);
		const {article} = this.props;
		const {isOpen} = this.props;

		return <div>
			<h1>{article.title}</h1>
			<button onClick={this.toggleOpen}>{isOpen ? "close" : "open"}</button>
			{this.getBody()}
		</div>
	}

	getBody() {
		if (!this.state.isOpen)
			return null;

		const {article} = this.props;
		return <div>{article.text}</div>
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})
	}

}