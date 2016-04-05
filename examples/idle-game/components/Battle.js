import React, { Component, PropTypes } from 'react'
import { updateHealth, updateEnemyHealth, updateCurrency } from '../actions'
import Enemies from './Enemies'

class Battle extends Component { 

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

    const enemyAttack = () => {
    	//Enemy attack
    	console.log("ENEMIES TURN")
    	const playerLife = state.player.health - (state.enemy.attack - state.player.block);
		console.log("Enemy attacked player and did " + (state.enemy.attack - state.player.block) + " damage");
		if (playerLife > 0) {
    		store.dispatch(updateHealth(playerLife));
    		
    		console.log("Player has " + playerLife + " life remaining");
    	} else {
    		store.dispatch(updateHealth(0));
    		console.log("Player has died");
    	}
    }

    const playerAttack = () => {
    	//Player attack
    	console.log("PLAYERS TURN")
    	const enemyLife = state.enemy.health - state.player.attack;
		console.log("Player attacked Enemy and did " + state.player.attack + " damage");
    	if (enemyLife > 0) {
    		store.dispatch(updateEnemyHealth(enemyLife));
    		
    		console.log("Enemy has " + enemyLife + " life remaining");
    		enemyAttack();

    	} else {
    		store.dispatch(updateEnemyHealth(0));
    		//Enemy Died
    		console.log("Enemy died");
        const {attack, health, reward} = Enemies.getRandomEnemy();
        store.dispatch(createNewEnemy(attack, health, reward));
    		claimReward();
    	}
    }

    //Do Battle - Pikachu, I choose you! 
    const doBattle = () => {
    	if (state.player.health > 0) {
    		if (state.enemy.health > 0) {
    			playerAttack();
    		} else {
    			console.log("Can't attack enemy cause it's dead")
    		}
    		
    	} else {
    		console.log("Player can't attack cause they're dead")
    	}
  	}

  	const claimReward = () => {
  		const newCurrency = state.player.currency + state.enemy.reward;
  		store.dispatch(updateCurrency(newCurrency));
  	}

    return (
      <div>
      	<h1>Battle</h1>
        <button onClick={() => doBattle()}>Fight</button>
    </div>
    )
  }
}

Battle.contextTypes = {
  store: React.PropTypes.object
}

export default Battle