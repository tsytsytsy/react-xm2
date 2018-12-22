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
			console.log(data)
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
