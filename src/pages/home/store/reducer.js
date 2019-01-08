import { fromJS } from 'immutable';
import * as types from './type'

const defaultState = fromJS({
    articleList:[
        // {   
        //     'id':1,
        //     'title': '《只管去做》：放下杂念，只管去做',
        //     'cont': '最近和许多个朋友分享了这本书，原因有二： 其一，我身边有很多人和我一样， 其实并不清楚自己想要什么？当然也有一些朋友知道自己要什么，却不知道怎么.',
        //     'img_src': '//upload-images.jianshu.io/upload_images/9462007-0698947f6e4e90bc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        // },
        // {   
        //     'id':2,
        //     'title': '《只管去做》：放下杂念，只管去做',
        //     'cont':'最近和许多个朋友分享了这本书，原因有二： 其一，我身边有很多人和我一样， 其实并不清楚自己想要什么？当然也有一些朋友知道自己要什么，却不知道怎么.',
        //     'img_src': '//upload-images.jianshu.io/upload_images/9462007-0698947f6e4e90bc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        // }
    ]
})

export default (state=defaultState, action)=>{
    let {value} = action
    switch (action.type){
        case types.SET_ARTICLE_DATA:
            return state.merge({'articleList': state.get('articleList').concat(value)})
        case types.SET_HOME_DATA:
            return state.set('articleList', action.value)
        default:
            return state;
    }
}