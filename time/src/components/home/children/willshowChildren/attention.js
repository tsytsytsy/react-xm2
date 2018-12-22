import React,{Component} from "react";
import Swiper from "swiper"


export default class Attention extends Component{
	constructor(props){
		super(props);
		this.state=this.props.attention;
	}
	render(){
		return(
			<div id="willshow_attention"> 
				<h2>最受关注<span>( {this.state.length} 部)</span></h2>
				<div id="ws_atten_box">
					<div>
						<img src={this.state[0].image}/>
						<div>
							<h2>{this.state[0].title}</h2>
							<p><span>{this.state[0].wantedCount}</span>人想看-<i>{this.state[0].type}</i></p>
							<p>导演 :  {this.state[0].director}</p>
							<p>演员  :  {this.state[0].actor1}{this.state[0].actor2}</p>
							<button>预告片</button>
						</div>
					</div>
				</div>
				<div className="swiper-container twopic_container" ref="twopic_container">
					<div className="swiper-wrapper twopic_container">
					    <div className="swiper-slide"><img src="https://static1.mtime.cn/feature/mobile/banner/2018/1218/sd750210.jpg"/></div>
					    <div className="swiper-slide"><img src="https://static1.mtime.cn/feature/mobile/banner/2018/1218/dhf750210.jpg"/></div>
					</div>
				    <div className="swiper-pagination twopic_container_button"></div>
				</div>
				<div id="details_transparent"></div>
				<div id="details_transparent"></div>
			</div>
		)
	}
	componentDidMount(){
		new Swiper(this.refs.twopic_container,{
			autoplay:true,
			loop: true, 
			pagination: {
		      el: '.swiper-pagination',
		    }
		})
	}
}
