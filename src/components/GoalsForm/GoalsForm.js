import React from 'react'
import { withRouter } from 'react-router-dom'

const GoalsForm = ({ session, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} >
    <label>Goals</label>
    <input
      placeholder="Session Goals"
      value={session.goals}
      name="goals"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default withRouter(GoalsForm)
