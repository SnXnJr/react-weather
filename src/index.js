import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/store'

let reRender = (state) => {
  ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)}/>, document.getElementById('root'));
}

reRender(store.getState());

store.subscribe(() =>{
  let state = store.getState();
  reRender(state);
});
