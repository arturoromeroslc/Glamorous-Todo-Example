import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Counter from './Counter'
import couterStore from './Counter/CounterReducer';
import todoStore from './TodoApp/TodoReducer'
import TodoApp from './TodoApp'

const render = () => {
  ReactDOM.render(
	  <BrowserRouter>
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/counter">Counter</Link></li>
	        <li><Link to="/todos">Todos</Link></li>
	      </ul>
	      <hr/>
				<Route exact path="/" component={Home}/>
				<Route
          exact path="/todos"
          render={() =>
            <TodoApp
              todos={todoStore.getState().todos}
              visibilityFilter={todoStore.getState().visibilityFilter}
              addTodo={({text, id}) => {
                todoStore.dispatch({
                  type: 'ADD_TODO',
                  id: id,
                  text: text
                })
              }}
              toggleTodo={(id) => {
                todoStore.dispatch({
                  type: 'TOGGLE_TODO',
                  id: id
                })
              }}
            />
          }>
        </Route>
	      <Route
					exact path="/counter"
					render={()=>
						<Counter
							value={couterStore.getState()}
							onIncrement={() => {
								couterStore.dispatch({
									type: 'INCREMENT'
								})
							}}
							onDecrement={() => {
								couterStore.dispatch({
									type: 'DECREMENT'
								})
							}}
						/>
					}>
				</Route>
	    </div>
	  </BrowserRouter>,
    document.getElementById('app')
  )
}

const Home = () => <h2>Welcome to my React examples</h2>

//Technically, a container component is just a React component that uses store.subscribe() to read the part of state it
//needs to pass it down to presentation components it renders.
couterStore.subscribe(render);
todoStore.subscribe(render);
render();
