import React ,{Component, Fragment}from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import * as headerAciton from './store/actionCreator'
import {setLoginStatus} from '../../pages/login/store/actionCreator'
import {
Header,
HeaderWrapper,
LeftArea,
Logo,

SearchArea,
SearchInput,
SearchTip,
Triangle,
SearchTrendItem,

RightArea,
LoginBtn,
SignUpBtn,
WriteBtn} from './style'

class HeaderComponent extends Component{

  // 复杂逻辑用函数 if逻辑
   getList(){
    const {focus,mouseIn, trending_list, trending_list_index, setIndex, handleMouseIn, handleMouseOut}  = this.props
    if(focus || mouseIn){
        return (<Fragment>
            <Triangle/>
            <SearchTip onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                <div>
                  <span>热门搜索</span>
                  <span onClick={()=>{setIndex(trending_list_index+1)}}>换一换</span>
                </div>
                {trending_list.slice((trending_list_index-1)*10,trending_list_index*10).map((item, index)=>{
                    return < SearchTrendItem key={index}>{item}</SearchTrendItem >
                })}
            </SearchTip>
        </Fragment>)
    }else{
        return null
    }
   }  

   render(){
    const {focus, trending_list, handleInputFocus, handleInputBlur,isLogin}  = this.props
    return (<Header>
            <HeaderWrapper>
                <LeftArea>
                    <Logo></Logo>
                    <span>首页</span>
                    <span>下载App</span>

                    <SearchArea>
                        <SearchInput 
                            onFocus={ ()=>{handleInputFocus(trending_list)}} 
                            onBlur={handleInputBlur}
                            className={focus?'active':''}/>
                        <i  className={focus?'active iconfont':'iconfont'}>&#xe62b;</i> 
                        {this.getList()}
                    </SearchArea>
                           
                </LeftArea>
                
                <RightArea>
                    <i className="iconfont">&#xe636;</i>
                    {/* < LoginBtn>登录</LoginBtn> */}
                    {this.setLoginBtn(isLogin)}
                    <SignUpBtn>注册</SignUpBtn>
                    <WriteBtn><i className="iconfont">&#xe678;</i>写文章</WriteBtn>
                </RightArea>
                
            </HeaderWrapper>
        </Header>)
   }

   setLoginBtn(status){
        if(!status)return (<Link to="/login"><LoginBtn>登录</LoginBtn></Link>)
        else return (< LoginBtn onClick={this.props.logout}>登出</LoginBtn>)
   }
}


const mapStateToProp = state =>({
    focus: state.getIn(['header','focus']),
    mouseIn :state.getIn(['header','mouseIn']),
    trending_list: state.getIn(['header','trending_list']),
    trending_list_index: state.getIn(['header','trending_list_index']),
    isLogin: state.getIn(['login','login'])
})

const mapDispatchToProp = dispatch =>({
    handleInputFocus(list) {
        if(list.size=== 0){
            dispatch(headerAciton.initTrendingList())
        }
        dispatch(headerAciton.getFocusAction())
        
    },
    handleInputBlur(){
        dispatch(headerAciton.getBlurAction())
    },
    setIndex(index){
        dispatch(headerAciton.setTrendingListIndex(index))
    },
    handleMouseIn(){
        dispatch(headerAciton.setMouseIn())
    },
    handleMouseOut(){
        dispatch(headerAciton.setMouseOut())
    },
    logout(){
        dispatch(setLoginStatus(false))
    }
})

export default connect(mapStateToProp, mapDispatchToProp)(HeaderComponent)
