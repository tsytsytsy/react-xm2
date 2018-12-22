import React, { Component } from "react"

class MallShop extends Component {
    render() {
        let { mallNavList } = this.props;
        return (
            <div id="mallShopBox">
                <div className="shop1">

                </div>
                <div className="shop2">
                    <img src={mallNavList.length > 0 ? mallNavList[4].list[0].image : "正在加载"} />
                </div>
                <div className="shop3">
                    <img src={mallNavList.length > 0 ? mallNavList[4].list[1].image : "正在加载"} />
                </div>
                <div className="shop4">
                    <img src={mallNavList.length > 0 ? mallNavList[3].img : "正在加载"} />
                </div>
            </div>
        )
    }
}

export default MallShop;