import React, {Component} from "react"

export default class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			commentsIsOpen: false
		}
	}

	render() {
		console.log("---", this.props);
		// console.log(this.props);
		const {article} = this.props;
		const {isOpen} = this.state;

		return (
			<div>
				<h1>{article.title}</h1>
				<button onClick={this.toggleOpen}>{isOpen ? "close" : "open"} info</button>
				{this.getBody()}
			</div>
		)
	}

	getBody() {
		if (!this.state.isOpen)
			return null;

		const {article} = this.props;
		const {commentsIsOpen} = this.state;

		return (
			<div>
				<div>{article.text}</div>
				<button onClick={this.toggleComments}>{commentsIsOpen ? "hide comments" : "show comments"}</button>
				{this.getComments()}
			</div>
		)
	}

	getComments() {
		if (!this.state.commentsIsOpen)
			return null;

		const {article} = this.props;
		const commentElements = article.comments.map(item => {

			return (
				<div key={item.id}>
					<div className="userInfo">Юзер:</div>
					<div>
						<span>{item.id}</span>
						<span>{item.user}</span>
					</div>

					<div>{item.text}</div>
				</div>
			)
		});

		return <div>{commentElements}</div>
	}

	toggleComments = () => {
		this.setState({
			commentsIsOpen: this.state.commentsIsOpen = !this.state.commentsIsOpen
		})
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})
	}

}