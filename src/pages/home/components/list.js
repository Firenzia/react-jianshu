import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getMoreArticle} from '../store/actionCreator'
import { Link } from 'react-router-dom'

import {
    ItemWrapper,
    ItemInfo,
    LoadMore
} from '../style'

class List extends PureComponent{
    render (){
        const {articleList, getMoreArticle} = this.props
        return (
            <div>
                {
                  articleList.map((item, index)=>{
                    return (
                        <Link key={index} to={'/detail/'+item.get('id')}>
                            <ItemWrapper key={item.get('id')}>
                                <ItemInfo>
                                    <div className="title">{item.get('title')}</div>
                                    <p className="cont">
                                        {item.get('cont')}
                                    </p>
                                </ItemInfo>
                                <img src={item.get('img_src')} alt=""/>
                            </ItemWrapper> 
                        </Link>
                    )
                  })
                }
                <LoadMore onClick={getMoreArticle}>加载更多文字</LoadMore>
            </div>
        )
      
       
    }
}

const mapStateToProp = state => ({
    articleList: state.getIn(['home','articleList'])
})

const mapDispatchToProps = dispatch =>({
  getMoreArticle(){
    dispatch(getMoreArticle())
  }
})


export default connect(mapStateToProp, mapDispatchToProps)(List)