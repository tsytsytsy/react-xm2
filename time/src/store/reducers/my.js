const defaultState={
	user:{}
}


export default (state=defaultState,action)=>{
	console.log(action.type);
	switch(action.type){
		case "USERS_DATA_FULFILLED":
			let usersData = JSON.parse(JSON.stringify(state))
			usersData.user = action.payload
			return usersData;
	}
	return state;
}
