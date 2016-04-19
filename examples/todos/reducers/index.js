import { combineReducers } from 'redux'
import todos from './todos'
import stats from './stats'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  stats
})

export default todoApp
