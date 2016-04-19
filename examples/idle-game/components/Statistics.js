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

    const increaseAttack = (amount = 1, cost = 1) => {
      if (moneyRemaining(cost)) {
        store.dispatch(updateAttack(state.player.attack+amount, 1));
      }
    }

    const increaseBlock = (amount = 1, cost = 1) => {
      if (moneyRemaining(cost)) {
        store.dispatch(updateBlock(state.player.block+amount, 1));
      }
    }

    const increaseHealth = (amount = 1, cost = 1) => {
      if (moneyRemaining(cost)) {
        store.dispatch(updateHealth(state.player.health+amount, 1));
      }
    }

    const moneyRemaining = (cost) => {
      return state.player.currency >= cost;
    }

    return (
      <div>
      <h1>You</h1>
      <Currency
      text='Currency'
      value= {state.player.currency}
      />
      <Stat
      text='Attack'
      value={state.player.attack}
      onIncrement={() => increaseAttack()}
      />
      <Stat
      text='Block'
      value={state.player.block}
      onIncrement={() => increaseBlock()}
      /> 
      <Stat
      text='Health'
      value={state.player.health}
      onIncrement={() => increaseHealth()} 
      />
      </div>
      )
  }
} 

Statistics.contextTypes = {
  store: React.PropTypes.object
}

export default Statistics
