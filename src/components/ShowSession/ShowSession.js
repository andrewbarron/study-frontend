import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession, deleteSession } from '../../api/sessions'
import Layout from '../Layout/Layout'

const ShowSession = props => {
  const [session, setSession] = useState([])
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    // SHOW SESSION
    showSession(props.match.params.id, props.user)
      .then(res => setSession(res.data.session))
      .then(console.log('SHOW FINISHED SESSION SUCCCESS'))
      .catch()
  }, [])

  const destory = () => {
    // DELETE SESSION
    deleteSession(props.match.params.id, props.user)
      .then(setDeleted(true))
      .then(console.log('DELETE SUCCESS'))
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
      <p>Session Goals (Show)</p>
      <div className="goals">
        <ul>
          <li>{session.goal1}</li>
          <li>{session.goal2}</li>
          <li>{session.goal3}</li>
        </ul>
      </div>
      <h4>Session Review {session.review}</h4>
      <div className="center-this">
        <button className="btn btn-danger" onClick={destory}>Delete Session</button>
      </div>
    </Layout>
  )
}
export default withRouter(ShowSession)
