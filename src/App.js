import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {Text} from 'react-native'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import firebase from 'firebase'
import Router from './Router'

class App extends Component{

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyBUQBDHs3F06DAMGe5C-nw4Vo_CbQw7cqs",
      authDomain: "manager-e2731.firebaseapp.com",
      databaseURL: "httpss://manager-e2731.firebaseio.com",
      projectId: "manager-e2731",
      storageBucket: "manager-e2731.appspot.com",
      messagingSenderId: "80127030964"
    }
    firebase.initializeApp(config)
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App