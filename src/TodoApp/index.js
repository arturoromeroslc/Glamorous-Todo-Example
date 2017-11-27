import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import shortid from 'shortid'
import store from './TodoReducer'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Todo from './Todo'
import Footer from './Footer'

const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			)
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			)
	}
}

export default class TodoApp extends Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.toggleTodo = this.toggleTodo.bind(this)
	}

	handleChange(e) {
		this.setState({value: e.target.value})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addTodo({text: this.state.value, id: shortid.generate()})
	}

	toggleTodo(e, id) {
		e.preventDefault()
		e.stopPropagation()
		this.props.toggleTodo(id)
	}

	render() {
		const {
			todos,
			visibilityFilter
		} = this.props

		const visibleTodos = getVisibleTodos(
			todos,
			visibilityFilter
		)

		return ([
				<h2>Todos</h2>,
				<AddTodo
					handleSubmit={this.handleSubmit}
					value={this.state.value}
					handleChange={this.handleChange}
				/>,
				<TodoList
					todos={visibleTodos}
					onToggle={this.toggleTodo}
				/>,
				<Footer
					visibilityFilter={visibilityFilter}
					onFilterClick={filter =>
						store.dispatch({
							type: 'SET_VISIBILITY_FILTER',
							filter
						})
					}
				/>
			]
		)
	}
}
