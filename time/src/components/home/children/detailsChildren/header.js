import React,{Component} from "react";
import {NavLink} from "react-router-dom"
import "../../../../common/css/home_details.css"


export default class header extends Component{
	render(){
		return(
			<div id="details_header">
				<div>
					<NavLink to="/home"><i className="fa fa-angle-left"></i></NavLink>
				</div>
				<div>
					<i className="fa fa-star-o"></i>
					<i className="fa fa-share-square-o"></i>
				</div>
			</div>
		)
	}
}
