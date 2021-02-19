import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
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
  // const [goalsSet, setGoalsSet] = useState(false)

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
    // CREATE SESSION
    createSession(user, session)
      .then(res => setCreatedSessionId(res.data.session._id))
      .then(console.log('CREATE SUCCESS'))
      .catch(console.error)
  }

  if (createdSessionId) {
    return <Redirect to={`/sessions/${createdSessionId}/timer`} />
  }

  return (
    <GoalsForm
      session={session}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default withRouter(CreateSession)
