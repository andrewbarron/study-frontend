import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
// import axios from 'axios'
import { closeSession } from '../../api/sessions'
// import messages from '../AutodismissAlert/messages'
import ReviewForm from '../ReviewForm/ReviewForm'
// import Layout from '../Layout/Layout'

const CloseSession = props => {
  const user = (props.user)
  const [session, setSession] = useState({ review: '' })
  const [updated, setUpdated] = useState(false)

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
    const msgAlert = props.msgAlert
    // UPDATE SESSION
    closeSession(props.match.params.id, user, session)
      .then(setUpdated(true))
      .then(() => msgAlert({
        heading: 'Closed Session!',
        message: messages.closeSessionSuccess,
        variant: 'secondary'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Close Session failed with error ' + error.message,
          message: messages.closeSessionFailure,
          variant: 'danger'
        })
      })
  }

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
