import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class Accordion extends ReactComponent {
	// создается экземпляр класса new WrappedComponent() => т.е он получает props, которые потом передает в <Article>
	// jsx синтакс передачи пропс объекта {...this.props} === <lol article = {this.data1} info = {this.data2}/> кароч просто спредид объект и передает отдельные поля

	state = {
		openItemId: this.props.defaultItemId
	}

	toggleOpen = (openItemId) => {
		if (openItemId === this.state.openItemId) {
			this.setState({openItemId: null});
		}
		else {
			this.setState({openItemId});
		}
	}

	render() {
		// console.log(this);
		// console.log({...this.props});
		return <OriginalComponent {...this.props} openItemId={this.state.openItemId} toggleOpen={this.toggleOpen}/>
	}
}