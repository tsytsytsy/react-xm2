import React ,{Component} from "react"

class Search extends Component{
    render(){
        return(
            <div id= "searchbox">
                <div id="mallserch">
                    <a href="#" id="data-search">
                        <span className="fa fa-search" id="sech"></span>
                        <span id="word">搜索正版电影周边</span>
                    </a>
                    <a href="#" id="shopcar">
                         <span className="fa fa-shopping-cart" id="shopingcar"></span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Search;