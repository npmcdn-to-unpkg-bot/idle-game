import React, { Component, PropTypes } from 'react'
import Stat from './Stat'
import Currency from './Currency'
import { updateAttack, updateBlock, updateHealth } from '../actions'
// import { connect} from 'react-redux';

// const mapStatToProps = (state) => {

// }

// const mapDispatchToProps (dispatch) => {
//   return {

//   }
// }

class Statistics extends Component {

  componentDidMount() { 
    const {store} = this.context;
    this.unsubscribe = store.subscribe(() => 
      this.forceUpdate()
    )
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() { 

    const {store} = this.context;
    const state = store.getState();

    return (
      <div>
      <h1>You</h1>
  	<Currency
      text='Currency'
      value= {state.stats.currency}
    />
    <Stat
      text='Attack'
      value={state.stats.attack}
      onIncrement={() => store.dispatch(updateAttack(state.stats.attack+1, 1))}
    />
    <Stat
      text='Block'
      value={state.stats.block}
      onIncrement={() => store.dispatch(updateBlock(state.stats.block+1, 1))}
    /> 
    <Stat
      text='Health'
      value={state.stats.health}
      onIncrement={() => store.dispatch(updateHealth(state.stats.health+1, 1))} 
    />
    </div>
    )
  }
} 

Statistics.contextTypes = {
  store: React.PropTypes.object
}

export default Statistics
