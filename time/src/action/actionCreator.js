import {fetch} from "whatwg-fetch";

<<<<<<< HEAD
=======
// export const movie_data = () =>({
//     type : "MOVIE_DATA",
//     payload : new Promise(resolve=>{
//         let url = "/PageSubArea/HotPlayMovies.api?locationId=290"
//         fetch(url)
//         .then(res=>res.json())
//         .then((data)=>{
//             resolve(data)
//         })
//     })
// })

>>>>>>> yang
export const getData_action = () =>({
    type : "MALL_NAV",
    payload : new Promise(resolve=>{
        let url = "/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201812211561993907"
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
})
