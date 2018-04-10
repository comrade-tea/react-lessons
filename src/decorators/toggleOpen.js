import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
	// создается экземпляр класса new WrappedComponent() => т.е он получает props, которые потом передает в <Article>
	// jsx синтакс передачи пропс объекта {...this.props} === <lol article = {this.data1} info = {this.data2}/> кароч просто спредид объект и передает отдельные поля

	state = {
		dynamicKey: 0,
		isOpen: false,
	}

	toggleOpen = () => {
		this.setState({
			isOpen: this.state.isOpen = !this.state.isOpen
		})
	}

	render() {

		return (
			<section>
				{/*<button onClick={() => {this.setState({dynamicKey: this.state.dynamicKey+=1})}}>update..</button>*/}
				<OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen}/>
			</section>
		)
	}

}