import React,{Component} from "react";
import {NavLink} from "react-router-dom"

export default class Header extends Component{
	render(){
		return(
			<div id="my_header">
				<NavLink to="/home"><i className="fa fa-angle-left"></i></NavLink>
				<div id="logo"></div>
			</div>
		)
	}
}
