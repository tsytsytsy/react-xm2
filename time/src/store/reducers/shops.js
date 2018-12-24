const defaultState = {
	bannerList: [],
	mallNavList: [],
	curindex: -1,
	mallOtherList :[]
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case "MALL_NAV_FULFILLED":
			let mallNav = JSON.parse(JSON.stringify(state));
			mallNav.mallNavList = Object.values(action.payload);
			return mallNav;
		case "GET_INDEX":
			let getCurIndex = JSON.parse(JSON.stringify(state));
			getCurIndex.curindex = action.idx;
			return getCurIndex;
		case "MALL_OTHER_FULFILLED" : 
			let getMallOther = JSON.parse(JSON.stringify(state));
			getMallOther.mallOtherList = Object.values(action.payload);
			return getMallOther;
	}
	return state;
}