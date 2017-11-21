import React from 'react'

export default ({
  handleSubmit,
  value,
  handleChange
}) => (
  <form onSubmit={handleSubmit}>
    <label>
      Todo:
      <input type="text" value={value} onChange={handleChange}></input>
    </label>
    <input type="submit" value="Submit" />
  </form>
)
