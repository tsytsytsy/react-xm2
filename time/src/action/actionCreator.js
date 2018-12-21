import {fetch} from "whatwg-fetch";

export const getData_action = () =>({
    type : "BANNERPHONT",
    payload : new Promise(resolve=>{
        let url = "/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=20181220182641566"
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            resolve(data)
            console.log(data)
            console.log("ssssss")
        })
    })
})