import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCQI6bPQ_3UMEAnjlrmPqswEO_Np1Ybo0U',
      authDomain: 'managerapp-17df0.firebaseapp.com',
      databaseURL: 'https://managerapp-17df0.firebaseio.com',
      projectId: 'managerapp-17df0',
      storageBucket: 'managerapp-17df0.appspot.com',
      messagingSenderId: '54660366767'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
