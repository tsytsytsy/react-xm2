import React,{Component} from "react";
import Loadable from "react-loadable";

import "../../common/css/home.css";
import Header from "../../common/js/header.js";
import Search from "./children/search";
import NowShowing from "./children/nowshowing";
import NewsToday from "./children/newsToday"

import {movie_data,willshow_data,hotpoint_data} from "../../store/action/actionCreator";
import {connect} from "react-redux";//页面和store相关联

/*const NowShowing = Loadable({
	loader:()=>import("./children/nowshowing"),
	loading:"loading"
})
*/
class Home extends Component{
	
	render(){
		let {movieList,movieListNum,willshowNum,hotPoints} = this.props
		return (
			<div id="home">
				<Header/>
				<Search/>
				<NowShowing 
					movieList={movieList} 
					movieListNum={movieListNum} 
					tonowshowlist={this.tonowshowList.bind(this)} 
					todetail={this.todetail.bind(this)} 
					towillshowlist={this.towillshowlist.bind(this)}
					willshowNum={willshowNum}
					/>
				<div id="details_transparent"></div>
				<img src="http://img5.mtime.cn/mg/2018/07/31/143906.61810640.jpg"/>
				<div id="details_transparent"></div>
				<NewsToday hotPoints={hotPoints}/>
			</div>
		)
	}
	componentDidMount(){
		this.props.getMovieData();
		this.props.getWillShowData();
		this.props.getHotPointData();
	}
	componentDidUpdate(){
		//console.log(this.props.hotPoints)
	}
	//去正在热播列表
	tonowshowList(){
		this.props.history.push("/nowshowList");
	}
	//去即将上映列表
	towillshowlist(){
		this.props.history.push({
			pathname:"/willshowList",
			state:{
				willshow:this.props.willshow
			}
		});
	}
	//去详情页
	todetail(index){
		this.props.history.push({
			pathname:"/details",
			state:{
				id:index,
				movieId:this.props.movieList[index].movieId
			}
		})
	}
}
const mapStateToProps = (state)=>({
	movieList:state.home.movieList,
	movieListNum:state.home.movieListNum,
	willshowNum:state.home.willshowNum,
	willshow:state.home.willshow,
	hotPoints:state.home.hotPoints
})

const mapDispatchToProps = (dispatch)=>({
	getMovieData(){
		dispatch(movie_data())
	},
	getWillShowData(){
		dispatch(willshow_data())
	},
	getHotPointData(){
		dispatch(hotpoint_data())
	}
	
})


export default  connect(mapStateToProps,mapDispatchToProps)(Home)
