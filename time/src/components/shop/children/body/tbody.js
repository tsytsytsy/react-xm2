import React, { Component } from "react"
import Search from "./section/search"
import Banner from "./section/banner"
import MallNav from "./section/mallNav"
import MallShop from "./section/mallShop"
import MallAct from "./section/mallAct"
import Shops from "./section/shops"
import Recommend from "./section/recommend"
import MallOther from "./section/mallother"
import "../../style/css/shop.css"
import { connect } from "react-redux"
import { getData_action, get_index ,getMall_other} from "../../../../action/actionCreator"
import BScroll from 'better-scroll'
class Tbody extends Component {
    constructor(props){
        super(props);
        this.state = {
            index : 0
        }
    }
    render() {
        let { mallNavList, cIndex,mallOtherList } = this.props;
        return (
            <div className="wrapper" ref="wrapper">
                <div className="content">
                    <Search />
                    <Banner mallNavList={mallNavList} />
                    <MallNav mallNavList={mallNavList} />
                    <MallShop mallNavList={mallNavList} />
                    <MallAct mallNavList={mallNavList} func={this.props.handleGetIdx} cIndex={cIndex}  />
                    <Shops mallNavList={mallNavList} />
                    <Recommend />
                    <MallOther mallOtherList={mallOtherList}/>
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
        this.props.handleGetMallOther();
        const scroll = new BScroll(this.refs.wrapper, {
            click: true
        });
    }
}
const mapStateToProps = (state) => ({
    mallNavList: state.shops.mallNavList,
    cIndex: state.shops.curindex,
    mallOtherList : state.shops.mallOtherList
})
const mapDispatchToProps = (dispatch) => ({
    getData() {
        dispatch(getData_action())
    },
    handleGetIdx(index) {
        dispatch(get_index(index))
    },
    handleGetMallOther(){
        dispatch(getMall_other())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Tbody)