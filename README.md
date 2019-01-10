## 项目描述
使用redux创建store管理全局数据，组件为容器组件，通过'react-redux'提供的connect方法与store连接，组件因此可以获取store中的state, 也可以向store派发action。
在action和store之间使用了中间件'redux-thunk'，因此派发action的时候可以做异步操作。store的reducer接收到action后更改state, 组件因state更新被更新，刷新UI。

模块化实践：
每个组件有自己的store, 处理自己的types/action/reducer， 全部组件的reducer通过combineReducers进行合并。

## 技术栈
* react
* redux/ react-redux
* redux-thunk 中间件
* react-router
* style-componentd (JS in CSS)
* immutable.js

## 重点
* 异步组件 第三方库 react-loadable
* React-transition-grup
* UI 组件 容器组件

## 代码结构
```
├─common
│  └─header
│      └─store
├─pages
│  ├─detail
│  │  └─store
│  ├─home
│  │  ├─components
│  │  └─store
│  └─login
│      └─store
├─static
│  ├─iconfont
│  └─img
└─store
```

## 设计
![avatar](/doc/design.png)