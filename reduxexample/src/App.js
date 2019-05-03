import './App.css';
import Posts from "./components/posts";
import React, { Component } from 'react';
import Postform from "./components/postform";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";

const store =createStore(()=>[],{},applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Postform/>
        <hr/>
        <Posts/>
      </div>
      </Provider>
    );
  }
}


export default App;
