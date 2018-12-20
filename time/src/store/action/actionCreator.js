//Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2018122015334196853
//https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api?locationId=290
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
