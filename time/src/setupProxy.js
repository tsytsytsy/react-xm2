const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
	app.use("/PageSubArea",proxy({
		target:"https://api-m.mtime.cn",
		changeOrigin:true
	})),
	app.use("/Service",proxy({
		target:"http://m.mtime.cn",
		changeOrigin:true
	}))
} 

//https://h5.ele.me/restapi/shopping/v2/entries?latitude=39.90469&longitude=116.407173&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template&terminal=h5


//http://m.mtime.cn/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201812211561993907