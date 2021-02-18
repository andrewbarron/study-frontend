import React from 'react'
// import { Link } from 'react-router-dom'

const GoalsForm = ({ session, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit} >
    <label>Goals</label>
    <input
      placeholder="Session Goals"
      value={session.goals}
      name="goals"
      onChange={handleChange}
    />
    <label>Review</label>
    <input
      placeholder="Session review"
      value={session.review}
      name="review"
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

export default GoalsForm
