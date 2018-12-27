import React, { Component } from "react"
import "../../../../../../node_modules/swiper/dist/css/swiper.min.css"
import swiper from "swiper"
class Banner extends Component {
    render() {
        let { mallNavList } = this.props;
        return (
            <div className="swiper-container banner_box" ref="banner_box" >
                <div className="swiper-wrapper banner_wrapper">
                        {
                            mallNavList.length > 0 ? mallNavList[9].map((item, index) => {
                                if (index > 0) {
                                    return <div className="swiper-slide banner_slide" key={index}>
                                        <img src={item.image} />
                                    </div>
                                }
                            }) : "正在加载"
                        }
                </div>
                <div className="swiper-pagination  banner_pagination">
                </div>
            </div>
        )
    }
    componentDidMount(){
        setTimeout(()=>{
            new swiper(this.refs.banner_box,{
                loop: true,
                autoplay : true,
                pagination: {
                    el: '.swiper-pagination',
                  }
            })
        },2000)
    }
}

export default Banner;