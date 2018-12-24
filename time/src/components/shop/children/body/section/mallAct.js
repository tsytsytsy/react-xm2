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
                                        <li>
                                            <img src={item.checkedImage} onClick={func.bind(this, index)} />
                                        </li>
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
                <div id="mallActFoot">

                </div>
            </div>
        )
    }
    componentDidMount() {
        var vm = this
        setTimeout(() => {
            var mySwiper = new swiper(this.refs.mallActHeader, {
                slidesPerView: '4',
                on: {
                    click: function () {
                        vm.curIndex = this.clickedIndex;
                        //单击 当前导航条到中心位置
                        this.setTransition(200);
                        var el = this.slides[vm.curIndex];  //当前单击 元素
                        var elpos = el.offsetLeft + el.clientWidth / 2; //当前单击 元素中心位置
                        var swiperContainerWidth = this.wrapperEl.clientWidth; //容器的宽度
                        var maxDis = this.maxTranslate();//最大的滚动距离
                        var maxPos = -maxDis + swiperContainerWidth / 2; //最大的中心位置
                        if (elpos < swiperContainerWidth / 2) {
                            this.setTranslate(0)
                        }
                        else if (elpos > maxPos) {
                            this.setTranslate(maxDis)
                        }
                        else {
                            this.setTranslate(swiperContainerWidth / 2 - elpos)
                        }
                    }

                }


            })
        }, 300)
    }

}
export default MallAct;