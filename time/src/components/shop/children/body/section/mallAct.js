import React, { Component } from "react"
import swiper from "swiper"
class MallAct extends Component {
    render() {
        let { mallNavList, func, cIndex } = this.props;
        return (
            <div id="mallActBox">
                <div id="mallActTop">
                    <ul>
                        {

                            mallNavList.length > 0 ? mallNavList[11].map((item, index) => {
                                if (cIndex == undefined) {
                                    return <li key={index} style={{ display: 'block' }} >

                                        <img src={item.backgroupImage} />
                                    </li>
                                } else if (cIndex == index) {
                                    return <li key={index} style={{ display: 'block' }} >

                                        <img src={item.backgroupImage} />
                                    </li>
                                }


                            }) : "正在加载"
                        }
                    </ul>
                </div>
                <div className="swiper-container" id="mallActHeader" ref="mallActHeader">
                    <div className="swiper-wrapper">
                        {
                            mallNavList.length > 0 ? mallNavList[11].map((item, index) => {
                                if (index < 5) {
                                    return <div className="swiper-slide" key={index} >
                                        <img src={item.checkedImage} onClick={func.bind(this, index)} />
                                    </div>
                                }
                            }) : "正在加载"
                        }

                    </div>
                </div>
                
                <div id="mallGoodsList">
                    <ul>
                        {
                            mallNavList.length > 0 ? mallNavList[11].map((item, index) => {
                                if (cIndex == undefined) {
                                    return <li key={index} style={{ display: 'block' }}>
                                        <div id="goodsListTop">
                                            <h4>{item.titleEn}</h4>
                                            <h3>{item.titleCn}</h3>
                                        </div>
                                        <div id="goodsListBody">
                                            {
                                                mallNavList[11][index].subList.map((items, idx) => {
                                                    return <div key={idx}>
                                                        <p id="ppppp">
                                                            <img src={items.image} />
                                                        </p>
                                                        <h3>{items.title}</h3>
                                                        <p id="price">
                                                            ￥
                                                    <strong>{items.goodsId}</strong>
                                                        </p>

                                                    </div>
                                                })
                                            }
                                        </div>
                                        <div id="goodsListFooter"></div>
                                    </li>
                                } else if (cIndex == index) {
                                    console.log(cIndex)
                                    return <li key={index} style={{ display: 'block' }}>
                                        <div id="goodsListTop">
                                            <h4>{item.titleEn}</h4>
                                            <h3>{item.titleCn}</h3>
                                        </div>
                                        <div id="goodsListBody">
                                            {
                                                mallNavList[11][index].subList.map((items, idx) => {
                                                    return <div key={idx}>
                                                        <p id="ppppp">
                                                            <img src={items.image} />
                                                        </p>
                                                        <h3>{items.title}</h3>
                                                        <p id="price">
                                                            ￥
                                                    <strong>{items.goodsId}</strong>
                                                        </p>

                                                    </div>
                                                })
                                            }
                                        </div>

                                    </li>
                                }
                            }) : "正在加载"
                        }
                    </ul>
                </div>
                <div id="goodsListFooter">
                   <a href="#">加载更多></a>
                </div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            new swiper(this.refs.mallActHeader, {
                slidesPerView: '4',
                spaceBetween: 40,
            })
        }, 300)
    }
}
export default MallAct;