const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
	app.use("/PageSubArea",proxy({
		target:"https://api-m.mtime.cn",
		changeOrigin:true
	}))
	app.use("/movie",proxy({
		target:"https://ticket-api-m.mtime.cn",
		changeOrigin:true
	}))
	app.use("/Movie",proxy({
		target:"https://ticket-api-m.mtime.cn",
		changeOrigin:true
	}))
}
