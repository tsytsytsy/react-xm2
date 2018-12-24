
import React,{Component} from "react";



export default class Search extends Component{
	render(){
		return(
			<div id="seek">
				<div id="seek_left">
					<span>北京</span>
					<i className="fa fa-angle-down"></i>
				</div>
				<div id="seek_right">
					<p>
						<i className="fa fa-search"></i>
						<input type="text" value="删选影院" readOnly/>
						
					</p>
					<a>搜索</a>
				</div>	
			</div>
		)
	}
}
