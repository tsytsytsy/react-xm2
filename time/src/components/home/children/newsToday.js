import React,{Component} from "react";

export default class NewsToday extends Component{
	render(){
		let {hotPoints} = this.props
		console.log(hotPoints)
		return (
			<div id="newPoints">
				<h1>
					今日热点
				</h1>
				<ul>
					{
						hotPoints.map((item,index)=>{
							return <li key={index}>
										<img src={item.img}/>
										<div>
											<h2>{item.title}</h2>
											<p>{item.desc}</p>
											<p>{item.publishTime}</p>
										</div>
								   </li>
						})
					}
				</ul>
			</div>
		)
	}
}
