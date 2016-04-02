import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import Statistics from './components/Statistics'
import game from './reducers/'

let store = createStore(game)

render(
  <Provider store={store}> 
    <Statistics />
  </Provider>,
  document.getElementById('root')
)
