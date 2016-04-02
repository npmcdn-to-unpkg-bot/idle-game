import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import IncreaseAttack from '../containers/IncreaseAttack'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <IncreaseAttack /> 
    <Footer />
  </div>
)

export default App
