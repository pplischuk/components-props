import React from 'react';

class A extends React.Component{
	constructor(){
		super()
		this.changeNum = this.changeNum.bind(this)
		this.state = {
			count: 0
		}
	}

	changeNum(n){
		this.setState({count: n})
		{console.log(n)}
	}

	render(){
		return(
			<div>
				<h1>Count: {this.state.count}</h1>
				<B multiplication = {this.changeNum}/>
			</div>
		)
	}
}

class B extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			count: 0
		}
	}

	render(){
		return(
			<div>
				<C func = {(n) => this.props.multiplication(n * 1000)}/>
			</div>
		)
	}
}

class C extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<button onClick = {(n) => this.props.func (Math.random())}>make num</button>
			</div>
		)
	}
}

export default A;