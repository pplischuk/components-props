import React from 'react';
import Out from './Text'

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: this.props.name
		}

		this.inp = this.inp.bind(this)
	}

	inp(e) {
		this.setState({name: e.target.value})
	}

	render(){
		return(
			<div>
				<input
				type = 'text'
				onChange = {this.inp}
				value = {this.state.name}
				/>
				<Out text = {this.state.name}/>
			</div>
		)
	}

}

export default App;

