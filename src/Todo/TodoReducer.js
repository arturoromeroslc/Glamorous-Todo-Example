import {createStore} from 'Redux'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const store = createStore(todos)

console.log('initial State');
console.log(store.getState());
console.log('---------------');

console.log('dispatch  ADD_TODO');
store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  text: 'Learn More Redux'
})
console.log('current state');
console.log(store.getState());
console.log('---------------');

console.log('dispatch  TOGGLE_TODO');
store.dispatch({
  type: 'TOGGLE_TODO',
  id: 0,
})
console.log('current state');
console.log(store.getState());
console.log('---------------');

export default store
