const defaultState = {
	movieList:[],
	movieListNum:"",
	movieDetail:"",
	willshowNum:"",
	willshow:"",
	hotPoints:[]
}

export default (state=defaultState,action)=>{
	// console.log(action.type);//type后会加pending(请求中)和fulfilled(请求完成)
	switch(action.type){
		case "MOVIE_DATA_FULFILLED":
			let movieListState = JSON.parse(JSON.stringify(state));
			movieListState.movieList = action.payload.movies.filter((item,index)=>{return index<8});
			movieListState.movieListNum = action.payload.movies.length;
			return movieListState
		case "DETAIL_DATA_FULFILLED":
			let detailState = JSON.parse(JSON.stringify(state));
			detailState.movieDetail=action.payload.data.basic.story
			return detailState;
		//演员列表获取不到
		case "ACTOR_DATA_FULFILLED":
			let actorState = JSON.parse(JSON.stringify(state));
			actorState.movieDetail = action.payload.data.basic.story
			return actorState;
			//console.log(action.payload)
		//即将上映列表
		case "WILLSHOW_DATA_FULFILLED":
			let willshowState = JSON.parse(JSON.stringify(state));
			willshowState.willshowNum = action.payload.moviecomings.length;
			willshowState.willshow = action.payload;
			return willshowState;
		case "HOTPOINTS_DATA_FULFILLED":
			let hotpointsState = JSON.parse(JSON.stringify(state));
			hotpointsState.hotPoints = action.payload.hotPoints;
			//console.log(hotpointsState.hotPoints)
			return hotpointsState;
			
	}
	return state;
}
