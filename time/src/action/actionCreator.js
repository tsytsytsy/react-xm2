import {fetch} from "whatwg-fetch";

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
