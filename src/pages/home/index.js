import React, { PureComponent } from 'react'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends PureComponent{
    render () {
        return (<HomeWrapper>
                    <HomeLeft>
                        <img alt=""  className="pic" src ="//upload.jianshu.io/admin_banners/web_images/4600/67db00190e013279ccac4b00bc5702c5f974b9aa.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    </HomeLeft>
                    <HomeRight>

                    </HomeRight>
                </HomeWrapper>)
    }
}

export default Home