import React, { Component } from "react"

class Recommend extends Component{
    render(){
        return(
            <div id="recommend">
                <h2>
                    <i className="fa fa-dot-circle-o"></i>
                    <b>你可能感兴趣的</b>
                    <span className="line"></span>
                </h2>
            </div>
        )
    }
}

export default Recommend;