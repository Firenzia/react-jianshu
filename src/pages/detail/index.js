import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import {getDetail} from './store/actionCreator'
import {
    DetailWrapper,
    DetailContent
} from './style'

class Detail extends PureComponent{
   
    render(){
        let {title, cont} = this.props
        return (<DetailWrapper>
                   <div className='title'>{title}</div>
                <DetailContent dangerouslySetInnerHTML={{__html: cont}}></DetailContent>
                </DetailWrapper>)
    }
    componentDidMount(){
        let {getDetail} = this.props
        getDetail(2)
    }
}

const mapStateToProps = state =>({
    title: state.getIn(['detail','title']),
    cont: state.getIn(['detail','cont'])
})

const mapDispatchToProps = dispatch =>({
    getDetail(id){
        dispatch(getDetail())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))