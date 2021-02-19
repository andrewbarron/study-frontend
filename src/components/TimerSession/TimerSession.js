import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession } from '../../api/sessions'
import Layout from '../Layout/Layout'

const TimerSession = props => {
  const [session, setSession] = useState([])
  const [clickMe, setClickMe] = useState(false)
  console.log('this is the props in show ', props)

  useEffect(() => {
    showSession(props.match.params.id, props.user)
      .then(res => setSession(res.data.session))
      .catch()
  }, [])

  const handleThisClick = event => {
    event.preventDefault()
    setClickMe(true)
  }

  if (!session) {
    return <p>Loading...</p>
  }

  if (clickMe) {
    return <Redirect to={`/sessions/${session._id}/close`} />
  }

  return (
    <Layout>
      <p>This is Timer</p>
      <h4>{session.goals}</h4>
      <h4>{session.createdAt}</h4>
      <button onClick={handleThisClick}>Close</button>
    </Layout>
  )
}
export default withRouter(TimerSession)
