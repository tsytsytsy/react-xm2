import React, { Component } from "react"
import "../../../../../../node_modules/swiper/dist/css/swiper.min.css"
import swiper from "swiper"
class Banner extends Component {
    render() {
        let {bannerList} = this.props;
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

export default Banner;