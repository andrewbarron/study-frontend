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
  console.log('this is user', user)
  // My session is empty to start.
  const [session, setSession] = useState({ goals: '', review: '' })
  console.log('this is session', session)
  // Session ID is the redirect after GoalsForm
  const [createdSessionId, setCreatedSessionId] = useState(null)
  // goalsSet is set to false, once I complete the GoalsForm, set it to true & init the next step.
  // const [goalsSet, setGoalsSet] = useState(false)

  // handleChange is so that the GoalsForm is not constantly updated while I'm typing.
  const handleChange = event => {
    event.persist()
    console.log('this is handleChange event', event)
    setSession(prevSession => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedSession = Object.assign({}, prevSession, updatedField)
      console.log('this is editedSession', editedSession)
      return editedSession
    })
  }
  // handleSubmit on the GoalsForm should redirect to the timer page with Goals pinned on the top of the page.
  const handleSubmit = event => {
    event.preventDefault()
    console.log('this is handleSubmit event', event)
    createSession(user, session)
      .then(res => setCreatedSessionId(res.data.session._id))
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
