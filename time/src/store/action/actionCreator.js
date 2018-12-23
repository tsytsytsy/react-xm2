//https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290

//https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=125805
import {fetch} from "whatwg-fetch";

export const movie_data = () =>({
	type:"MOVIE_DATA",
	payload:new Promise(resolve=>{
		let url = "/PageSubArea/HotPlayMovies.api?locationId=290";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			resolve(data) //把数据给payload传给dispatch（store）再传给reducer
		})
	})
})


export const detail_data = (id) =>({
	type:"DETAIL_DATA",
	payload:new Promise(resolve=>{
		let url="/movie/detail.api?locationId=290&movieId=" + id;
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			resolve(data)
		})
	})
})



//https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
//http://localhost:3000/Movie/MovieCreditsWithTypes.api?movieId=228745
//https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=?
//https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
//https://api-m.mtime.cn/Movie/MovieCreditsWithTypes.api?movieId=217896
export const actor_data = (id) =>({
	type:"ACTOR_DATA",
	payload:new Promise(resolve=>{
		let url="/Movie/MovieCreditsWithTypes.api?movieId=" + id;
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			resolve(data)
		})
	})
})


//https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290
export const willshow_data = (id) =>({
	type:"WILLSHOW_DATA",
	payload:new Promise(resolve=>{
		let url="/Movie/MovieComingNew.api?locationId=290";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			resolve(data)
		})
	})
})


//http://m.mtime.cn/Service/callback.mi/News/Detail.api?newsId=1586911&t=201812231643552652
//http://m.mtime.cn/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018122316453875005
export const hotpoint_data = (id) =>({
	type:"HOTPOINTS_DATA",
	payload:new Promise(resolve=>{
		let url="/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018122316453875005";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			resolve(data)
		})
	})
})

//登录
export const getusers_data = () =>({
	type:"USERS_DATA",
	payload:new Promise(resolve=>{
		let url="http://localhost:5000/users"
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
//			console.log(data)
			resolve(data)
		})
	})
})
//注册
export const add_user = () =>({
	type:"ADD_DATA",
	payload:new Promise(resolve=>{
		let url="http://localhost:5000/users"
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			console.log(data)
			resolve(data)
		})
	})
})
