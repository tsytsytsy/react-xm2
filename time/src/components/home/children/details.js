import React,{Component} from "react";
import {movie_data,detail_data,actor_data} from "../../../store/action/actionCreator";
import {connect} from "react-redux";//页面和store相关联
import Header from "./detailsChildren/header";
import Background from "./detailsChildren/background"
import DDetails from "./detailsChildren/ddetails"
import Discription from "./detailsChildren/discription"
import Abstract from "./detailsChildren/abstract"
import Actors from "./detailsChildren/actors"




class Details extends Component{
	constructor(props){
		super(props);
		this.state={
			index:this.props.location.state.id
		}
		console.log(this.props.location.state.movieId)
	}
	render(){
		let {movieList,movieDetails} = this.props
		let {index} = this.state
		return(
			<div id="details">
				<Header/>
				<Background thismovie={movieList[index].img}/>
				<DDetails thisList={movieList[index]}/>
				<Discription thisList={movieList[index]}/>
					<div id="details_transparent"></div>
				<Abstract movieDetails={movieDetails}/>
					<div id="details_transparent" style={{marginBottom:"0.1rem"}}></div>
					<div id="details_transparent"></div>
				<Actors />
				
			</div>
		)
	}
	componentDidMount(){
		this.props.getMovieData();
		this.props.getDetailData(this.props.location.state.movieId);//home页找到id拼接过来
		this.props.getActorsData(this.props.location.state.movieId);
	}
}


const mapStateToProps = (state)=>({
	movieList:state.home.movieList,
	movieDetails:state.home.movieDetail
	
})

const mapDispatchToProps = (dispatch)=>({
	getMovieData(){
		dispatch(movie_data())
	},
	getDetailData(movieid){
		dispatch(detail_data(movieid))
	},
	getActorsData(){
		dispatch(actor_data())
	}
})


export default  connect(mapStateToProps,mapDispatchToProps)(Details)

