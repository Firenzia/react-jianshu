import React ,{Component, Fragment}from 'react'
import { connect } from 'react-redux'
import * as headerAciton from './store/actionCreator'
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
    const {focus,trending_list}  = this.props

    return (<Fragment>
        <Triangle/>
        <SearchTip>
            {trending_list.map((item)=>{
                return < SearchTrendItem>{item}</SearchTrendItem >
            })}
        </SearchTip>
    </Fragment>)
    // if(focus){
    //     return (<Fragment>
    //         <Triangle/>
    //         <SearchTip>
    //             {trending_list.map((item)=>{
    //                 return < SearchTrendItem>{item}</SearchTrendItem >
    //             })}
    //         </SearchTip>
    //     </Fragment>)
    // }else{
    //     return null
    // }
   }  

   render(){
    const {focus, handleInputFocus, handleInputBlur}  = this.props
    return (<Header>
            <HeaderWrapper>
                <LeftArea>
                    <Logo></Logo>
                    <span>首页</span>
                    <span>下载App</span>

                    <SearchArea>
                        <SearchInput 
                            onFocus={handleInputFocus} 
                            onBlur={handleInputBlur}
                            className={focus?'active':''}/>
                        <i  className={focus?'active iconfont':'iconfont'}>&#xe62b;</i> 
                        {this.getList()}
                    </SearchArea>
                           
                </LeftArea>
                
                <RightArea>
                    <i className="iconfont">&#xe636;</i>
                    < LoginBtn>登录</LoginBtn>
                    <SignUpBtn>注册</SignUpBtn>
                    <WriteBtn><i className="iconfont">&#xe678;</i>写文章</WriteBtn>
                </RightArea>
                
            </HeaderWrapper>
        </Header>)
   }
}


const mapStateToProp = state =>({
    focus: state.getIn(['header','focus']),
    trending_list: state.getIn(['header','trending_list'])
})

const mapDispatchToProp = dispatch =>({
    handleInputFocus() {
        dispatch(headerAciton.getFocusAction())
    },
    handleInputBlur(){
        dispatch(headerAciton.getBlurAction())
    }
})

export default connect(mapStateToProp, mapDispatchToProp)(HeaderComponent)
