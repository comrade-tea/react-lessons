import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
	// создается экземпляр класса new WrappedComponent() => т.е он получает props, которые потом передает в <Article>
	// jsx синтакс передачи пропс объекта {...this.props} === <lol article = {this.data1} info = {this.data2}/> кароч просто спредид объект и передает отдельные поля

	state = {
		isOpen: false,
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})
	}

	render() {
		console.log(this);
		// console.log({...this.props});

		return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen}/>
	}
}