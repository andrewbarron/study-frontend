import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession, deleteSession } from '../../api/sessions'
import Layout from '../Layout/Layout'

const ShowSession = props => {
  const [session, setSession] = useState([])
  const [deleted, setDeleted] = useState(false)
  console.log('this is the props in show ', props)

  useEffect(() => {
    showSession(props.match.params.id, props.user)
      .then(res => setSession(res.data.session))
      .catch()
  }, [])

  const destory = () => {
    deleteSession(props.match.params.id, props.user)
      .then(setDeleted(true))
      .catch(console.error)
  }

  if (!session) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={'/'} />
  }

  return (
    <Layout>
      <p>This is show</p>
      <h4>{session.goals}</h4>
      <h4>{session.review}</h4>
      <h4>{session.owner}</h4>
      <h4>{session.createdAt}</h4>
      <h4>{session.updatedAt}</h4>
      <button onClick={destory}>Delete Session</button>
    </Layout>
  )
}
export default withRouter(ShowSession)
