const defaultState = {
	bannerList: [],
	mallNavList: []
}

export default (state = defaultState, action) => {
	switch (action.type) {
		// case "MOVIE_DATA_FULFILLED":
		// 	let bannerState = JSON.parse(JSON.stringify(state));
		// 	bannerState.bannerList = action.payload.movies.filter((item, index) => { return index < 15 });
		// 	return bannerState;
		case "MALL_NAV_FULFILLED":
			let mallNav = JSON.parse(JSON.stringify(state));
			mallNav.mallNavList = Object.values(action.payload);
			return mallNav;
	}
	return state;
}