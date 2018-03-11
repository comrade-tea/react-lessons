import React, {Component} from 'react';

export default (OriginalComponent) => class WrappedComponent extends Component {
	state = {
		isOpen: false,
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})
	}

	render() {
		console.log(this.props);

		return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen}/>
	}
}