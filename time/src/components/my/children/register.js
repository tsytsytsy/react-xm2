import React,{Component} from "react";
import {getusers_data,add_user} from "../../../store/action/actionCreator"
import {connect} from "react-redux";

class Register extends Component{
	constructor(){
		super();
		this.state = {
			username:"",
			verifi:"",
			pwd:""
		}
	}
	render(){
		return(
			<div id="register">
				<div id="reg_data">
					<div>
						<label>手机号:</label>
						<input type="text" placeholder="请输入手机号" onChange={this.handleChange.bind(this,1)}/>
					</div>
					<div>
						<label>验证码:</label>
						<input type="text" onChange={this.handleChange.bind(this,2)}/>
					</div>
					<div>
						<label>密码:</label>
						<input type="password" placeholder="6-20位字母、数字、符号组成" onChange={this.handleChange.bind(this,3)}/>
					</div>
				</div>
				<div id="reg_read">
					<input type="radio" checked readOnly/>
					<span>我已阅读并同意<a href="#">Mtime时光网服务条款</a></span>
				</div>
				<button onClick={this.register.bind(this)}>注册</button>
			</div>
		)
	}
	handleChange(num,e){
		let val = e.target.value;
		switch(num){
			case 1:
				this.setState({
					username:val
				})
				break;
			case 2:
				this.setState({
					verifi:val
				})
				break;
			case 3 :
				this.setState({
					pwd:val
				})
				break;
		}
		console.log(this.state)
	}
	register(){
		this.props.addState()
	}
}


const mapStateToProps = (state)=>({
	
})
const mapDispatchToProps = (dispatch)=>({
	addState(){
		dispatch(add_user())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Register)