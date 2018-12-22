const defaultState = {
	movieList:[],
	movieListNum:"",
	movieDetail:""
}

export default (state=defaultState,action)=>{
	// console.log(action.type);//type后会加pending(请求中)和fulfilled(请求完成)
	switch(action.type){
		case "MOVIE_DATA_FULFILLED":
			let movieListState = JSON.parse(JSON.stringify(state));
			movieListState.movieList = action.payload.movies.filter((item,index)=>{return index<8});
			movieListState.movieListNum = action.payload.movies.length;
//			console.log(movieListState.movieList)
			return movieListState
		case "DETAIL_DATA_FULFILLED":
			let detailState = JSON.parse(JSON.stringify(state));
			detailState.movieDetail=action.payload.data.basic.story
			return detailState;
		case "ACTOR_DATA_FULFILLED":
			let actorState = JSON.parse(JSON.stringify(state));
			actorState.movieDetail = action.payload.data.basic.story
			return actorState;
			//console.log(action.payload)
			
	}
	return state;
}
