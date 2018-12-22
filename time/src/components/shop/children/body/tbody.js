import React, { Component } from "react"
import Search from "./section/search"
import Banner from "./section/banner"
import MallNav from "./section/mallNav"
import MallShop from "./section/mallShop"
import MallAct from "./section/mallAct"
import Shops from "./section/shops"
import "../../style/css/shop.css"
import { connect } from "react-redux"
import { getData_action, get_index } from "../../../../action/actionCreator"
import BScroll from 'better-scroll'
class Tbody extends Component {
    constructor(props){
        super(props);
        this.state = {
            index : 0
        }
    }
    render() {
        let { mallNavList, cIndex } = this.props;
        return (
            <div className="wrapper" ref="wrapper">
                <div className="content">
                    <Search />
                    <Banner mallNavList={mallNavList} />
                    <MallNav mallNavList={mallNavList} />
                    <MallShop mallNavList={mallNavList} />
                    <MallAct mallNavList={mallNavList} func={this.props.handleGetIdx} cIndex={cIndex}  />
                    <Shops />
                </div>
            </div>
        )
    }
    handleGetIdx(index){
        alert(this.props.index)
    }
    componentDidMount() {
        this.props.getData();
        this.props.handleGetIdx();
        const scroll = new BScroll(this.refs.wrapper, {
            click: true
        });
    }
}
const mapStateToProps = (state) => ({
    mallNavList: state.shops.mallNavList,
    cIndex: state.shops.curindex
})
const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_action())
    },
    handleGetIdx(index) {
        dispatch(get_index(index))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Tbody)