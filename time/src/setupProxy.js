const proxy = require("http-proxy-middleware");


module.exports = (app)=>{
<<<<<<< HEAD
	app.use("/PageSubArea",proxy({
		target:"https://api-m.mtime.cn",
=======
	app.use("/Service",proxy({
		target:"https://m.mtime.cn",
>>>>>>> yang
		changeOrigin:true
	}))
}
