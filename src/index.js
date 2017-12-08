import React from 'react'
import { render } from 'react-dom'
import App from './App'
import initialState from './initial-state'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const store = createStore(reducer, initialState)

const renderApp = () => {
  render( 
    <Provider store={store}>
      <App />
    </Provider>
  , document.getElementById('root')
)}

store.subscribe(renderApp)
renderApp()
