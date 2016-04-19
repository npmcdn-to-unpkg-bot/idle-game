import { combineReducers } from 'redux'
import player from './player'
import enemy from './enemy'
import messageBoard from './messageBoard'

const game = combineReducers({
  player,
  enemy,
  messageBoard
})

export default game
