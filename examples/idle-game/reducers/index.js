import { combineReducers } from 'redux'
import player from './player'
import enemy from './enemy'

const game = combineReducers({
  player,
  enemy
})

export default game
