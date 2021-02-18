import React, { useState } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
// import axios from 'axios'
import { closeSession } from '../../api/sessions'
// import messages from '../AutodismissAlert/messages'
import ReviewForm from '../ReviewForm/ReviewForm'
// import Layout from '../Layout/Layout'

const CloseSession = props => {
  const user = (props.user)
  console.log('this is user in CloseSession', user)
  const [session, setSession] = useState({ review: '' })
  const [updated, setUpdated] = useState(false)
  const id = user._id

  const handleChange = event => {
    event.persist()
    console.log('this is handleChange event', event)
    setSession(prevSession => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedSession = { ...prevSession, ...updatedField }
      console.log('this is editedSession', editedSession)
      return editedSession
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('this is user in handleSubmit CloseSession', user)
    console.log('this is id in handleSubmit CloseSession', id)
    console.log('this is handleSubmit event', event)
    closeSession(id, user, session)
      .then(setUpdated(true))
      .catch(console.log('error'))
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
