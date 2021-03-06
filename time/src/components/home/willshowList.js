import React,{Component} from "react";
import Header from "./children/willshowChildren/header"
import Attention from "./children/willshowChildren/attention"
import Search from "./children/search"
import WSList from "./children/willshowChildren/willshow"
import "../../common/css/home_willshow.css"



export default class WillShow extends Component{
	constructor(props){
		super(props)
		this.state = this.props.location.state.willshow
		console.log(this.state)
	}
	render(){
		let {attention,moviecomings} = this.state
		return(
			<div id="willshow">
				<Header/>
				<Search/>
				<Attention attention={attention}/>
				<WSList wsList={moviecomings}/>
			</div>
		)
	}
}
