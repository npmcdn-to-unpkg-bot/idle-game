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
      value= {state.player.currency}
    />
    <Stat
      text='Attack'
      value={state.player.attack}
      onIncrement={() => store.dispatch(updateAttack(state.player.attack+1, 1))}
    />
    <Stat
      text='Block'
      value={state.player.block}
      onIncrement={() => store.dispatch(updateBlock(state.player.block+1, 1))}
    /> 
    <Stat
      text='Health'
      value={state.player.health}
      onIncrement={() => store.dispatch(updateHealth(state.player.health+1, 1))} 
    />
    </div>
    )
  }
} 

Statistics.contextTypes = {
  store: React.PropTypes.object
}

export default Statistics
