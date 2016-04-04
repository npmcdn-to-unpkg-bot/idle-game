import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import Statistics from './components/Statistics'
import Enemy from './components/Enemy'
import Battle from './components/Battle'
import game from './reducers/'

let store = createStore(game) 

render(
  <Provider store={store}> 
  <div>
    <Statistics />
    <Enemy />
    <Battle />
    </div>
  </Provider>,
  document.getElementById('root')
)
