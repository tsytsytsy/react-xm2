import React,{Component} from "react";
import {NavLink} from "react-router-dom";




export default class My extends Component{
	render(){
		return (
			<div>
				<span><NavLink to="/home">返回</NavLink></span>
				我是我的
			</div>
		)
	}
}
