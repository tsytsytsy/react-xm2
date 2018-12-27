import React, { Component } from "react"

class MallOther extends Component {
    render() {
        let { mallOtherList } = this.props;
        console.log(mallOtherList)
        return (
            <div id="mallOtherBox">
                <ul>
                    {
                        mallOtherList.length > 0 ? mallOtherList[2].map((item, index) => {
                            return <li key={index}>
                                <div className="mallOtherBoxSmall">
                                    <div className="mallOtherMtips">
                                        <i style={{ backgroundColor: item.background }}>{item.iconText}</i>
                                    </div>
                                    <div className="mallOtherPicbox">
                                        <img src={item.image} />
                                    </div>
                                    <div className="mallOthertxtbox">
                                        <dt>
                                        {item.goodsTip?<span>{item.goodsTip}</span>:""}
                                            {item.name}
                                        </dt>
                                        <dd>
                                            <span>￥{item.minSalePrice}</span>
                                        </dd>
                                    </div>
                                </div>
                            </li>
                        }) : "数据加载中"
                    }
                </ul>
            </div>
        )
    }
}

export default MallOther;