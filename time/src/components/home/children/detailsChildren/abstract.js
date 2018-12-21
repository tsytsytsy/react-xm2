import React,{Component} from "react";

export default class Abstract extends Component{
	constructor(){
		super();
		this.state={
			flag:true
		}
	}
	render(){
		let {flag} = this.state;
		console.log(this.props)
		return(
			<div id="details_abstract">
				<p style={{height:flag?"0.98rem":"auto"}}>{this.props.movieDetails}</p>
				<i className={flag?"fa fa-angle-down":"fa fa-angle-up"} onClick={this.changeHeight.bind(this)}></i>
			</div>
		)
	}
	changeHeight(){
		this.setState({
			flag:!this.state.flag
		})
	}
}
