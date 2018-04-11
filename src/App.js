import React, { Component } from 'react';
//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import createSagaMiddleware from 'redux-saga';
//const sagaMiddleware = createSagaMiddleware()

//import reducers from './redux/reducers';
//import dataSaga from './redux/sagas';

//const store = createStore(reducers, applyMiddleware(sagaMiddleware))
//sagaMiddleware.run(dataSaga);

import AppNavigator from './navigate';
const App = () =>{
    return (
        <AppNavigator />
    )
}

export default App;