import React,{Component} from "react";

export default class WSList extends Component{
	constructor(props){
		super(props);
		this.state=this.props.wsList;
		console.log(this.state)
	}
	render(){
		return(
			<div id="willshow_list">
				<h1>即将上映  <span>({this.state.length}部)</span></h1>
				<div>
					<p>12月</p>
					<ul>
						{
							this.state.map((item,index)=>{
								if(item.rMonth==12){
									return <li key={index}>
												<p>{item.rDay}日</p>
												<div>
													<img src={item.image}/>
													<div>
														<h2>{item.title}</h2>
														<p><span>{item.wantCount}</span>人想看-{item.type}</p>
														<p>导演 : {item.director}</p>
													</div>
												</div>
									   		</li>
								}
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}
