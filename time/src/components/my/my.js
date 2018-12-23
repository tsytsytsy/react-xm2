import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import "../../common/css/my.css"


import Header from "./children/header"
import Login from "./children/login"
import Register from "./children/register"

export default class My extends Component{
	constructor(){
		super();
		this.state={
			flag:true
		}
	}
	render(){
		return (
			<div>
				<Header/>
				{this.state.flag?<Login changeCom={this.changeCom.bind(this)} toHome={this.toHome.bind(this)}/>:<Register/>}
			</div>
		)
	}
	changeCom(){
		this.setState({
			flag:false
		})
	}
	toHome(){
		this.props.history.push("/home")
	}
	
}



