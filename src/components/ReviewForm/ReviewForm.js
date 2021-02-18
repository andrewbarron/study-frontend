import React from 'react'
import { withRouter } from 'react-router-dom'
const ReviewForm = ({ session, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
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

export default withRouter(ReviewForm)
