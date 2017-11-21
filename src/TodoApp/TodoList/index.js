import React from 'react'
import Todo from '../Todo'

export default ({
	todos,
	onToggle
}) => (
	<ul>
		{todos.map((todo) =>
			<Todo
				key={todo.id}
				id={todo.id}
				completed={todo.completed}
				text={todo.text}
				onToggle={onToggle}
			/>
		)}
	</ul>
)
