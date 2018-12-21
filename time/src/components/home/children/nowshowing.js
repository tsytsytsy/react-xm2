import React,{Component} from "react";



export default class nowShowing extends Component{
	render(){
		let {movieList,movieListNum} = this.props
		return(
			<div id="nowshowing">
				<div id="nowshowing_title">
					<h1 onClick = {this.tonowshowlist.bind(this)}>正在热播( {movieListNum} 部)<i className="fa fa-angle-right"></i></h1>
					<ul>
						{
							movieList.map((item,index)=>{
								return <li key={index} onClick={this.props.todetail.bind(this,index)}>
										<img src={item.img}/>
										<p>{item.titleCn}</p>
										</li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
	tonowshowlist(){
		this.props.tonowshowlist()
	}
}
