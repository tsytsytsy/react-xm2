import React,{Component} from "react";



export default class Search extends Component{
	render(){
		return(
			<div id="search">
				<div id="search_left">
					<span>北京</span>
					<i className="fa fa-angle-down"></i>
				</div>
				<div id="search_right">
					<p>
						<i className="fa fa-search"></i>
						<input type="text" value="影片/影院/影人，任你搜" readOnly/>
					</p>
				</div>
			</div>
		)
	}
}
