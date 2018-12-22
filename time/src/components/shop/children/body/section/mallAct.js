import React, { Component } from "react"
import swiper from "swiper"
class MallAct extends Component {
    render() {
        let { mallNavList } = this.props;
        console.log(mallNavList)
        return (
            <div id="mallActBox">
                <div id="mallActTop">
                    <ul>
                        {
                            mallNavList.length > 0 ? mallNavList[11].map((item, index) => {
                                return <li key={index}>

                                    <img src={item.backgroupImage} />
                                </li>
                            }) : "正在加载"
                        }
                    </ul>
                </div>
                <div className="swiper-container" id="mallActHeader" ref="mallActHeader">
                    <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {
                             mallNavList.length > 0 ? mallNavList[11].map((item, index) => {
                                if (index > 0) {
                                    return <div key={index}>
                                        <img src={item.checkedImage} />
                                    </div>
                                }
                            }) : "正在加载"
                        }
                    </div>
                        
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
    componentDidMount() {
        setTimeout(() => {
            new swiper(this.refs.mallActHeader, {
                loop: true,
                autoplay: false,
            })
        }, 300)
    }
}
export default MallAct;