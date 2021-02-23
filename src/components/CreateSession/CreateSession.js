import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import messages from '../AutoDismissAlert/messages'
// import axios from 'axios'
// import Button from 'react-bootstrap/Button'
import { createSession } from '../../api/sessions'
// import messages from '../AutodismissAlert/messages'
import GoalsForm from '../GoalsForm/GoalsForm'
// import Layout from '../Layout/Layout'

const CreateSession = props => {
  const user = (props.user)
  // My session is empty to start.
  const [session, setSession] = useState({ goal1: '', goal2: '', goal3: '', review: '' })
  // Session ID is the redirect after GoalsForm
  const [createdSessionId, setCreatedSessionId] = useState(null)
  // goalsSet is set to false, once I complete the GoalsForm, set it to true & init the next step.
  // handleChange is so that the GoalsForm is not constantly updated while I'm typing.
  const handleChange = event => {
    event.persist()
    setSession(prevSession => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedSession = Object.assign({}, prevSession, updatedField)
      return editedSession
    })
  }
  // handleSubmit on the GoalsForm should redirect to the timer page with Goals pinned on the top of the page.
  const handleSubmit = event => {
    event.preventDefault()
    const msgAlert = props.msgAlert
    // CREATE SESSION
    createSession(user, session)
      .then(res => setCreatedSessionId(res.data.session._id))
      .catch(error => {
        msgAlert({
          heading: 'Create Session failed with error: ' + error.message,
          message: messages.createSessionFailure,
          variant: 'danger'
        })
      })
  }

  if (createdSessionId) {
    return <Redirect to={`/sessions/${createdSessionId}/timer`} />
  }

  return (
    <React.Fragment>
      <GoalsForm
        session={session}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </React.Fragment>
  )
}

export default withRouter(CreateSession)
