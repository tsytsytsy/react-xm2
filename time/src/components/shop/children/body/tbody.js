import React, { Component } from "react"
import Search from "./section/search"
import Banner from "./section/banner"
import MallNav from "./section/mallNav"
import MallShop from "./section/mallShop"
import MallAct from "./section/mallAct"
import Shops from "./section/shops"
import "../../style/css/shop.css"
import { connect } from "react-redux"
import { getData_action } from "../../../../action/actionCreator"
class Tbody extends Component {
    render() {
        let { bannerLists } = this.props;
        console.log(bannerLists)
        return (
            <div>
                <Search />
                <Banner bannerList={bannerLists} />
                <MallNav />
                <MallShop />
                <MallAct />
                <Shops />
            </div>
        )
    }
    componentDidMount() {
        this.props.getData();
    }
}
const mapStateToProps = (state) => ({
    bannerLists: state.shops.bannerList
})
const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_action());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Tbody)