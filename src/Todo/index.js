import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import shortid from 'shortid'
import glamorous from 'glamorous'
import store from './TodoReducer'

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
		console.log('called');
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
					{this.props.todos.map((todo) => {
						return (
							<li key={todo.id}>
								<Span strike={todo.completed}>{todo.text}</Span>
								<button onClick={(e) => {this.toggleTodo(e, todo.id)}}>Toggle</button>
							</li>
						)
					})}
				</ul>
			</span>
		)
	}
}
