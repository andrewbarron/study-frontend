import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import axios from 'axios'
import { closeSession } from '../../api/sessions'
// import messages from '../AutodismissAlert/messages'
import ReviewForm from '../ReviewForm/ReviewForm'
// import Layout from '../Layout/Layout'

const CloseSession = props => {
  const user = (props.user)
  const [session, setSession] = useState({ review: '' })
  const [updated, setUpdated] = useState(false)
  console.log('this is session in session in closeSession ', session)

  const handleChange = event => {
    event.persist()
    setSession(prevSession => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedSession = { ...prevSession, ...updatedField }
      return editedSession
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    closeSession(props.match.params.id, user, session)
      .then(setUpdated(true))
      .catch(console.error)
  }

  console.log(updated)
  if (updated) {
    return <Redirect to={'/'} />
  }

  return (
    <ReviewForm
      session={session}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default withRouter(CloseSession)
