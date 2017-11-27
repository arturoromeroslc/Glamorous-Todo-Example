import React from 'react'
import FilterLink from './FilterLink'
import glamorous from 'glamorous'

const Span = glamorous.span({
  marginRight: '5px'
})

export default ({
  visibilityFilter,
  onFilterClick
}) => (
  <p>
    <Span>Show:</Span>
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
    <Span>ALL</Span>
    </FilterLink>
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
    <Span>ACTIVE</Span>
    </FilterLink>
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={visibilityFilter}
      onClick={onFilterClick}
    >
    <Span>COMPLETED</Span>
    </FilterLink>
  </p>
)
