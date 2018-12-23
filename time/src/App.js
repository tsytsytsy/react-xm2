import React, { Component } from 'react';
import Loadable from "react-loadable";
import {HashRouter,Route,Link,Switch,NavLink,Redirect} from "react-router-dom" 
import Home from "./components/home/home"
import Buy from "./components/buy/buy"
import Shop from "./components/shop/shop"
import Find from "./components/find/find"
import My from "./components/my/my";
import NowshowList from "./components/home/nowshowList"
import WillshowList from "./components/home/willshowList"
import Details from "./components/home/children/details"
import store from "./store"
import {Provider} from "react-redux";
/*const Home = Loadable({
	loader:()=>import("./components/home/home"),
	loading:"loading"
})*/

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      <HashRouter>
      	<div>
	      	<Switch>
	      		<Route path="/home" component={Home}/>
	      		<Route path="/buy" component={Buy}/>
	      		<Route path="/shop" component={Shop}/>
	      		<Route path="/find" component={Find}/>
	      		<Route path="/my" component={My}/>
	      		
	      		{/*home中的路由*/}
	      		<Route path="/nowshowList" component={NowshowList}/>
	      		<Route path="/willshowList" component={WillshowList}/>
	      		<Route path="/details" component={Details}/>
	      		
	      		<Redirect path="/" to="/home"/>
	      	</Switch>
      	</div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;
