import { combineReducers } from 'redux'
import todos from './todos'
import attack from './attack'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  attack
})

export default todoApp
