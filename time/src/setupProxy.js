const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
	app.use("/Service",proxy({
		target:"https://m.mtime.cn",
		changeOrigin:true
	}))
}
