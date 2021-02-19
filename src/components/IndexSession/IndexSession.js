import React, { useState, useEffect, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { indexSession } from '../../api/sessions'

const IndexSession = props => {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    // INDEX SESSIONS
    indexSession(props.user)
      .then(res => setSessions(res.data.sessions))
      .then(console.log('INDEX SUCCESS'))
      .catch()
  }, [])

  const sessionsJsx = sessions.map(session => (
    <li key={session._id}>
      <Link to={`/sessions/${session._id}`}>{session.goals}</Link>
    </li>
  ))

  if (sessionsJsx.length === 0) {
    return <p>No prior sessions.</p>
  }

  return (
    <Fragment>
      <h4>Sessions</h4>
      <ul>
        {sessionsJsx}
      </ul>
    </Fragment>
  )
}

export default withRouter(IndexSession)
