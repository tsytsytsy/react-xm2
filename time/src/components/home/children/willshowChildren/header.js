import React,{Component} from "react";
import {NavLink} from "react-router-dom"

export default class Header extends Component{
	render(){
		return (
			<div id="coming_header">
				<NavLink to="/home"><i className="fa fa-angle-left"></i></NavLink>
				<div>
					<span>正在热映</span>
					<span>即将上映</span>
				</div>
			</div>
		)
	}
}
