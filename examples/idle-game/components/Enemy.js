import React, { Component, PropTypes } from 'react'
//import Enemy from './Enemy'
//import Currency from './Currency'
//import { increaseAttack, increaseBlock, increaseHealth } from '../actions'
// import { connect} from 'react-redux';

// const mapStatToProps = (state) => {

// }

// const mapDispatchToProps (dispatch) => {
//   return {

//   }
// }

class Enemy extends Component { 

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
        <h1>Enemy</h1>
      <p>
        Name: {state.enemy.name}
      </p>
      <p>
        Attack: {state.enemy.attack}
      </p>
      <p>
        Health: {state.enemy.health}
      </p>
      <p>
        Reward: {state.enemy.reward}
      </p>
    </div>
    )
  }
} 

Enemy.contextTypes = {
  store: React.PropTypes.object
}

export default Enemy
