const defaultState = {
	bannerList : []
}

export default (state=defaultState,action)=>{
    console.log(action.type)
	switch(action.type){
		case "BANNERPHONT_FULFILLED":
		let bannerState = JSON.parse(JSON.stringify(state));
		bannerState.bannerList = action.payload;
		console.log(action.payload)
		return bannerState;
	}
	return state;
}