import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'Redux'

const toggleTodos = (todo) => {
  return {
    id: todo.id,
    text: todo.text,
    completed: !todo.completed
  }
}
