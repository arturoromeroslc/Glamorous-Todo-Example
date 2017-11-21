import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import shortid from 'shortid'
import glamorous from 'glamorous'
import store from './TodoReducer'

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

const FilterLink = ({
	filter,
	currentFilter,
	children
}) => {
	if (filter === currentFilter) {
		return <span>{children}</span>
	}
	return (
		<a
			href="#"
			onClick={e => {
				e.preventDefault()
				store.dispatch({
					type: 'SET_VISIBILITY_FILTER',
					filter
				})
			}}
		>
			{children}
		</a>
	)
}

const Span = glamorous
	.span(({strike}) => ({textDecoration: strike ? 'line-through' : ''}))

export default class Todo extends Component {
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
		return (
			<span>
				<h1>Todos</h1>

				<form onSubmit={this.handleSubmit}>
					<label>
						Todo:
						<input type="text" value={this.state.value} onChange={this.handleChange}></input>
					</label>
					<input type="submit" value="Submit" />
				</form>

				<ul>
					{visibleTodos.map((todo) => {
						return (
							<li key={todo.id}>
								<Span strike={todo.completed}>{todo.text}</Span>
								<button onClick={(e) => {this.toggleTodo(e, todo.id)}}>Toggle</button>
							</li>
						)
					})}
				</ul>
				<p>
					Show:
					{' '}
					<FilterLink
						filter="SHOW_ALL"
						currentFilter={visibilityFilter}
					>
						ALL
					</FilterLink>
					{' '}
					<FilterLink
						filter="SHOW_ACTIVE"
						currentFilter={visibilityFilter}
					>
						ACTIVE
					</FilterLink>
					{' '}
					<FilterLink
						filter="SHOW_COMPLETED"
						currentFilter={visibilityFilter}
					>
						COMPLETED
					</FilterLink>
				</p>
			</span>
		)
	}
}
