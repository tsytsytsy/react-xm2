import React, { Component } from "react"

class Shops extends Component {
    render() {
        let { mallNavList } = this.props;
        return (
            <div id="shopsBox">
                {
                    mallNavList.length > 0 ? mallNavList[1].map((item, index) => {
                        return <div key={index} className="shopsBoxSmall">
                            <div className="shopsHead">
                                <h2>
                                    <i className="fa fa-navicon" style={{ color: item.colorValue }}></i>
                                    <span style={{ color: item.colorValue }}>{item.name}</span>
                                </h2>
                                <div className="shopsMore">
                                    <a href="#">
                                        更多
                                    <i className="fa fa-angle-right"></i>
                                    </a>
                                </div>
                            </div>
                            <dl>
                                <dt>
                                    <a href="#" className="shopsImgBig">
                                        <img src={item.image} />
                                    </a>
                                </dt>
                                <dd>
                                    <ul>
                                        {
                                            mallNavList.length > 0 ? mallNavList[1][index].subList.map((items, idx) => {
                                                return <li key={idx}>
                                                    <span>
                                                        <img src={items.image} />
                                                    </span>

                                                    <h3>{items.title}</h3>
                                                    <p>
                                                        ￥
                                                                <strong>{items.goodsId}</strong>
                                                    </p>
                                                </li>
                                            }) : "正在加载"
                                        }
                                    </ul>
                                </dd>
                            </dl>
                            <div id="shopsFoot"></div>
                        </div>
                    }) : "数据加载中"
                }
            </div>
        )
    }
}

export default Shops;