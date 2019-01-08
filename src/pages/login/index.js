import React, { PureComponent } from 'react'
import { Redirect } from 'react-router-dom'
import {setLoginStatus} from './store/actionCreator'
import {connect} from 'react-redux'

class Login extends PureComponent{
    render(){
        let {isLogin} = this.props
        
        if (!isLogin){
            return (
                <div>
                    <input placeholder="account"/>
                    <input placeholder="pwd"/>
                    <button onClick={this.props.login}>登陆</button>
                </div>
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

