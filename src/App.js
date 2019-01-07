import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import Header from './common/header'
import Home from './pages/home'
import Login from './pages/login'
import store from './store'

class App extends Component {
  render() {
    return (
      // <div>
      <Provider store={store}>
         <Header/>
         <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}/>
            <Route path='/login' exact component={Login}/>
          </div>
        </BrowserRouter>
       </Provider>
      // {/* </div> */}
    );
  }
}

export default App;
