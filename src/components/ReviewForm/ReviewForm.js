import React from 'react'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const ReviewForm = ({ session, handleChange, handleSubmit }) => (
  <React.Fragment>
    <h1 className="center-this">Review</h1>
    <p className="center-this">Take note of what you were able to accomplish, and what you would like to finish next time!</p>
    <form onSubmit={handleSubmit}>
      <div className="center-this">
        <input
          placeholder="Session review"
          value={session.review}
          name="review"
          onChange={handleChange}
        />
        <Button variant="outline-secondary" type="submit">Submit</Button>
      </div>
    </form>
  </React.Fragment>
)

export default withRouter(ReviewForm)
