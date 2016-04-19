import React, { Component, PropTypes } from 'react'
import { updateHealth, updateEnemyHealth, updateCurrency, createNewEnemy, addMessage } from '../actions'
import Enemies from './Enemies'

let enemyList = new Enemies();

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

    const log = (message) => {
      store.dispatch(addMessage(message));
    }

    const enemyAttack = () => {
    	//Enemy attack
    	log("ENEMIES TURN")
    	const playerLife = state.player.health - (state.enemy.attack - state.player.block);
      log("Enemy attacked player and did " + (state.enemy.attack - state.player.block) + " damage");
      if (playerLife > 0) {
        store.dispatch(updateHealth(playerLife));
        log("Player has " + playerLife + " life remaining");
      } else {
        store.dispatch(updateHealth(0));
        log("Player has died");
      }
    }

    const playerAttack = () => {
    	//Player attack
    	log("PLAYERS TURN")
    	const enemyLife = state.enemy.health - state.player.attack;
      log("Player attacked Enemy and did " + state.player.attack + " damage");
      if (enemyLife > 0) {
        store.dispatch(updateEnemyHealth(enemyLife));

        log("Enemy has " + enemyLife + " life remaining");
        enemyAttack();

      } else {
        store.dispatch(updateEnemyHealth(0));
    		//Enemy Died
    		log("Enemy died");
        claimReward();
        const {name, attack, health, reward} = enemyList.getRandomEnemy();
        store.dispatch(createNewEnemy(name, attack, health, reward));
      }
    }

    //Do Battle - Pikachu, I choose you! 
    const doBattle = () => {
    	if (state.player.health > 0) {
    		if (state.enemy.health > 0) {
    			playerAttack();
    		} else {
    			log("Can't attack enemy cause it's dead")
    		}
    	} else {
    		log("Player can't attack cause they're dead")
    	}
    }

    const claimReward = () => {
      const newCurrency = Number(state.player.currency) + Number(state.enemy.reward);
      log("CLAIM REWARD", newCurrency)
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