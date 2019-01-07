import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {getMoreArticle} from '../store/actionCreator'
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
                  articleList.map((item)=>{
                    return (
                        <ItemWrapper key={item.get('id')}>
                        <ItemInfo>
                            <div className="title">{item.get('title')}</div>
                            <p className="cont">
                                {item.get('cont')}
                            </p>
                        </ItemInfo>
                        <img src={item.get('img_src')} alt=""/>
                    </ItemWrapper> 
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
    dispatch(getMoreArticle)
  }
})


export default connect(mapStateToProp, mapDispatchToProps)(List)