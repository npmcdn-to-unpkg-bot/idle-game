import { combineReducers } from 'redux'
import stats from './stats'
import enemy from './enemy'

const game = combineReducers({
  stats,
  enemy
})

export default game
