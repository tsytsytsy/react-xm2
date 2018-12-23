const defaultState = {
	bannerList: [],
	mallNavList: [],
	curindex: -1
}

export default (state = defaultState, action) => {
console.log(action.type)
	switch (action.type) {
		case "MALL_NAV_FULFILLED":
			let mallNav = JSON.parse(JSON.stringify(state));
			mallNav.mallNavList = Object.values(action.payload);
			return mallNav;
		case "GET_INDEX":
			let getCurIndex = JSON.parse(JSON.stringify(state));
			getCurIndex.curindex = action.idx;
			return getCurIndex;
	}
	return state;
}