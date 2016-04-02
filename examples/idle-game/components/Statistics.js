import React, { Component, PropTypes } from 'react'
import Stat from './Stat'
import Currency from './Currency'
import { Provider } from 'react-redux'
import stats from '../reducers/stats'
import { connect } from 'react-redux'
import { createStore } from 'redux'

//const store = 

//const store = createStore(stats)

class Statistics extends Component { 
  constructor(props) {
    super(props)
  }

  render() { 

  	const store = createStore(stats)

    return (
      <div>
  	<Currency
      text='Currency'
      value={store.getState().currency}
    />
    <Stat
      text='Attack'
      value={store.getState().attack}
      onIncrement={() => store.dispatch({ type: 'INCREMENT_ATTACK' })}
    />
    <Stat
      text='Block'
      value={store.getState().block}
      onIncrement={() => store.dispatch({ type: 'INCREMENT_BLOCK' })}
    /> 
    <Stat
      text='Health'
      value={store.getState().health}
      onIncrement={() => store.dispatch({ type: 'INCREMENT_HEALTH' })} 
    />
    </div>
    )
  }



  
} 


//console.log("sta", Statistics)


//Stat.propTypes = {
//  value: PropTypes.number.isRequired,
//  text: PropTypes.string.isRequired,
//  onIncrement: PropTypes.func.isRequired
//}

export default connect()(Statistics)
