const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
	app.use("/PageSubArea",proxy({
		target:"https://api-m.mtime.cn",
		changeOrigin:true
	}))
}
