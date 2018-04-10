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
		// console.log(this);
		// console.log({...this.props});
<<<<<<< HEAD
		// console.log("----", this.state.dynamicKey)

		return (
			<section>
				{/*<button onClick={() => {this.setState({dynamicKey: this.state.dynamicKey+=1})}}>update..</button>*/}
				<OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen}/>
=======
		console.log("----", this.state.dynamicKey)
		return (
			<section>
				<button onClick={() => {this.setState({dynamicKey: this.state.dynamicKey+=1})}}>update..</button>
				<OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen={this.toggleOpen} key={this.state.dynamicKey}/>
>>>>>>> 993b8cdfa1531b1705462100d74c0ae25362f491
			</section>
		)
	}

}