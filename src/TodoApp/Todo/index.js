import React from 'react'
import glamorous from 'glamorous'


const Span = glamorous
	.span(({strike}) => ({textDecoration: strike ? 'line-through' : ''}))

export default ({
	id,
	onToggle,
	completed,
	text
}) => (
	<li>
		<Span strike={completed}>{text}</Span>
		<button onClick={(e) => onToggle(e, id)}>
			Toggle
		</button>
	</li>
)
