import {fetch} from "whatwg-fetch";

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
export const get_index = (index) =>({   
    type : "GET_INDEX",
    idx : index
})


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
export const getMall_other = () =>({
    type : "MALL_OTHER",
    payload : new Promise(resolve=>{
        let url = "/Service/callback.mi/ECommerce/RecommendProducts.api?t=201812231911984354&goodsIds=&pageIndex=1"
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
        })
    })
})
