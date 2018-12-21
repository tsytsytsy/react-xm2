import React, { Component } from 'react';
import {HashRouter,Route,Link,Switch,NavLink,Redirect} from "react-router-dom" 
import Home from "./components/home/home"
import Buy from "./components/buy/buy"
import Shop from "./components/shop/shop"
import Find from "./components/find/find"
import My from "./components/my/my";
import NowshowList from "./components/home/nowshowList"
import Details from "./components/home/children/details"
import store from "./store"
import {Provider} from "react-redux";


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
	      		<Route path="/nowshowList" component={NowshowList}/>
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
