import React,{Component} from "react";
import "../../common/css/home.css";
import Header from "../../common/js/header.js";
import Search from "./children/search";
import NowShowing from "./children/nowshowing";
import {movie_data} from "../../store/action/actionCreator";
import {connect} from "react-redux";//页面和store相关联



class Home extends Component{
	
	render(){
		let {movieList,movieListNum} = this.props
		return (
			<div>
				<Header/>
				<Search/>
				<NowShowing movieList={movieList} movieListNum={movieListNum} tonowshowlist={this.tonowshowList.bind(this)} todetail={this.todetail.bind(this)}/>
			</div>
		)
	}
	componentDidMount(){
		this.props.getMovieData();
	}
	//去正在热播列表
	tonowshowList(){
		this.props.history.push("/nowshowList");
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
	movieListNum:state.home.movieListNum
})

const mapDispatchToProps = (dispatch)=>({
	getMovieData(){
		dispatch(movie_data())
	}
	
})


export default  connect(mapStateToProps,mapDispatchToProps)(Home)
