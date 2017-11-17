import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Counter} from './Counter'
import store from './Counter/CounterReducer';

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
				<Route exact path="/todos" component={Todos}/>
	      <Route
					exact path="/counter"
					render={()=>
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
						/>
					}>
				</Route>
	    </div>
	  </BrowserRouter>,
    document.getElementById('app')
  )
}

const Home = () => (
  <div>
    <h2>Welcome to my React examples</h2>
  </div>
)

const Todos = () => (
	<div>
		<h2>Todos</h2>
	</div>
)

store.subscribe(render);
render();
