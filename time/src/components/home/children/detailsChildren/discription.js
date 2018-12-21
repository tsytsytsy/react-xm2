import React,{Component} from "react";

export default class Discription extends Component{
	render(){
		return(
			<div id="details_discrip">
				<h3>{this.props.thisList.commonSpecial}</h3>
				<button>查影讯/购票</button>
			</div>
			
		)
	}
}
