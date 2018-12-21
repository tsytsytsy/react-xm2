import React,{Component} from "react";

export default class Background extends Component{
	render(){
		return(
			<div id="details_bkground">
				<img src={this.props.thismovie}/>
				<div id="white"></div>
				<div className="mask"></div>
			</div>
		)
	}
}
