import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import {setLoginStatus} from './store/actionCreator'
import {connect} from 'react-redux'
import {
    LoginWrapper,
    LoginBtn,
    InputArea
} from './style'

class Login extends PureComponent{
    render(){
        let {isLogin} = this.props
        
        if (!isLogin){
            return (
                <LoginWrapper>
                    <InputArea placeholder="手机或邮箱"/>
                    <InputArea placeholder="密码"/>
                    <LoginBtn  onClick={this.props.login}>登陆</LoginBtn>
                </LoginWrapper>
            )
        }else{
            return (<Redirect to='/'/>)
        }
        
    }
}

const mapStateToProps = state =>({
    isLogin: state.getIn(['login','login'])
})

const mapDispatchToProps = dispatch =>({
    login() {
        dispatch(setLoginStatus(true))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

