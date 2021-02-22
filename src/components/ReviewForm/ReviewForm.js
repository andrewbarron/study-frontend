import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const ReviewForm = ({ session, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <label>Review</label>
    <input
      placeholder="Session review"
      value={session.review}
      name="review"
      onChange={handleChange}
    />
    <Button variant="outline-secondary" type="submit">Submit</Button>
  </form>
)

export default withRouter(ReviewForm)
