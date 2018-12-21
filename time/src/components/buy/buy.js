import React,{Component} from "react";
import Header from "../../common/js/header.js"
import Seek from "./children/seek.js"
import Address from "./children/address.js"
import "./style/css/seek.css";
import "./style/css/address.css";
export default class Buy extends Component{
	render(){
		return (
			<div>
				<Header/>
				 <Seek/>
				 <Address/>
			</div>
		)
	}
}
