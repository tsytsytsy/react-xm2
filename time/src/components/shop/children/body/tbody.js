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
import BScroll from 'better-scroll'
class Tbody extends Component {
    render() {
        let { mallNavList } = this.props;
        return (
            <div className="wrapper" ref="wrapper">
            <div className="content">
                <Search />
                <Banner mallNavList={mallNavList}/>
                <MallNav mallNavList={mallNavList} />
                <MallShop mallNavList={mallNavList} />
                <MallAct  mallNavList={mallNavList}/>
                <Shops />
            </div>
            </div>
        )
    }
    componentDidMount() {
        this.props.getData();
      const scroll =  new BScroll(this.refs.wrapper)
      console.log(scroll)
    }
}
const mapStateToProps = (state) => ({
    mallNavList : state.shops.mallNavList
})
const mapDispatchToProps = (dispatch) => ({
    getData() {
        // dispatch(movie_data());
        dispatch(getData_action())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Tbody)