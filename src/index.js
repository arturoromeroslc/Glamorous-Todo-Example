import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'Redux'
import glamorous from 'glamorous'

const mediaQueries = {
	phone: '@media only screen and (max-width: 500px)',
}

const Container = glamorous.div({
  backgroundColor: 'teal',
  [mediaQueries.phone]: {
    backgroundColor: 'gold'
  }
})

const Heading = glamorous.h1({
  fontSize: '2.4em',
  marginTop: 10,
  color: '#CC3A4B'
})

const CurrentCount = glamorous.h1({
  color: 'white',
  fontSize: '1.2em'
})

const Button = glamorous.button({
  padding: '5px 10px',
  color: 'black',
  fontSize: '1.2em'
})

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const store = createStore(counter)

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <Container>
    <Heading>Fun With Glamorous</Heading>
    <CurrentCount>{value}</CurrentCount>
    <Button onClick={onIncrement}>+</Button>
    <Button onClick={onDecrement}>-</Button>
	</Container>
)

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => {
        store.dispatch({
          type: 'INCREMENT'
        })
      }}
      onDecrement={() => {
        store.dispatch({
          type: 'DECREMENT'
        })
      }}
    />,
    document.getElementById('app')
  )
}

store.subscribe(render);
render();
