import React,{Component} from "react";
import Header from "../../common/js/header.js"
import Tbody from "./children/body/tbody"
import Footer from "./children/footer/footer"
export default class Shop extends Component{
	render(){
		return (
			<div>
				<Header/>
				<Tbody />
				<Footer />
			</div>
		)
	}
}
