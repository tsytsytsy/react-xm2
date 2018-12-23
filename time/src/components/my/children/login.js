import React,{Component} from "react"
import {getusers_data} from "../../../store/action/actionCreator"
import {connect} from "react-redux";

class Login extends Component{
	constructor(){
		super();
		this.state = {
			username:"",
			pwd:""
		}
	}
	render(){
		return(
			<div id="login">
				<div>
					<i className="fa fa-user-o"></i>
					<input type="text" placeholder="登录邮箱/手机号码" onChange={this.handleChange.bind(this,1)}/>
				</div>
				<div>
					<i className="fa fa-lock"></i>
					<input type="password" placeholder="密码"  onChange={this.handleChange.bind(this,2)}/>
				</div>
				<button onClick={this.login.bind(this)}>登录</button>
				<div>
					<span onClick={this.handleChangeCom.bind(this)}>免费注册</span>
					<span>找回密码</span>
				</div>
			</div>
		)
	}
	componentDidMount(){
		this.props.getUsers()
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
					pwd:val
				})
		}
	}
	handleChangeCom(){
		this.props.changeCom()
	}
	login(){
		//console.log(this.props.users)
		let thisUser = ""
		thisUser = this.props.users.filter((item)=>{
			return this.state.username==item.name
		})
		console.log(thisUser)
		if(thisUser==""){
			alert("该用户不存在")
		}else{
			if(thisUser[0].password == this.state.pwd){
				this.props.toHome()
				console.log("登陆成功")
			}else{
				alert("密码错误")
			}
		}
	}
}


const mapStateToProps = (state)=>({
	users:state.my.user
})
const mapDispatchToProps = (dispatch)=>({
	getUsers(){
		dispatch(getusers_data())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)


