import React,{Component} from "react";



export default class nowShowing extends Component{
	render(){
		let {movieList,movieListNum} = this.props
		return(
			<div id="nowshowing">
				<div id="nowshowing_title">
					<h1>正在热播( {movieListNum} 部)<i className="fa fa-angle-right"></i></h1>
					<ul>
						{
							movieList.map((item,index)=>{
								return <li key={index}>
										<img src={item.img}/>
										<p>{item.directorName}</p>
										</li>
							})
						}
					</ul>
				</div>
			</div>
		)
	}
	componentDidMount(){
		console.log(this.props)
	}
}
