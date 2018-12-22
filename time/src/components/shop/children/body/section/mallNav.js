import React, { Component } from "react"

class MallNav extends Component {
    render() {
        let { mallNavList } = this.props;
        return (
            <div id="mallNav_box">
                <ul id="mallNav_ul">
                    {
                        mallNavList.length > 0 ? mallNavList[8].map((item, index) => {
                            if (index >= 0) {
                                return <li id="mallNav_li" key={index}>
                                    <a href="#" >
                                        <img src={item.image} />
                                        <p>{item.iconTitle}</p>
                                    </a>
                                </li>
                            }
                        }) : "请求数据中"
                    }
                </ul>
                <div id="kong"></div>
            </div>
        )
    }
}

export default MallNav;