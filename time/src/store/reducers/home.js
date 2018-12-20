const defaultState = {
	movieList:[],
	movieListNum:""
}

export default (state=defaultState,action)=>{
	console.log(action.type);//type后会加pending(请求中)和fulfilled(请求完成)
	switch(action.type){
		case "MOVIE_DATA_FULFILLED":
			let movieListState = JSON.parse(JSON.stringify(state));
			movieListState.movieList = action.payload.movies.filter((item,index)=>{return index<8});
			movieListState.movieListNum = action.payload.movies.length
			return movieListState
	}
	return state;
}
