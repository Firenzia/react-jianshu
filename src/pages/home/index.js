import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import List from './components/list'
import {getHomeData, setShowScrollStatus} from './store/actionCreator'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackToTop
} from './style'

class Home extends PureComponent{
    render () {
        return (<HomeWrapper>
                    <HomeLeft>
                        <img alt=""  className="pic" src ="//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>

                    </HomeRight>
                    {
                        this.props.isShowScroll&&<BackToTop onClick={this.goToTop}>回到顶部</BackToTop>
                    }
                    

                </HomeWrapper>)
    }
    componentDidMount(){
        this.props.getHomeData()
        this.bindEvent()
    }

    bindEvent(){
        let {setShowScrollStatus} = this.props
        window.addEventListener("scroll",()=>{
            if(document.documentElement.scrollTop<200){
                setShowScrollStatus(false)
            }else{
                setShowScrollStatus(true)
            }
        })
    }

    goToTop(){
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}

const mapStateToProps = state => ({
    isShowScroll : state.getIn(['home','isShowScroll'])
})

const mapDispatchToProps = dispatch => ({
    getHomeData(){
        dispatch(getHomeData())
    },
    setShowScrollStatus(val){
        dispatch(setShowScrollStatus(val))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)