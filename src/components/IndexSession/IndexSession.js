import React, { useState, useEffect, Fragment } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { indexSession } from '../../api/sessions'
import messages from '../AutoDismissAlert/messages'

const IndexSession = props => {
  const [sessions, setSessions] = useState([])

  useEffect(() => {
    const msgAlert = props.msgAlert
    // INDEX SESSIONS
    indexSession(props.user)
      .then(res => setSessions(res.data.sessions))
      .then(() => msgAlert({
        heading: 'Index your sessions',
        message: messages.indexSessionsSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Index Session failed with error: ' + error.message,
          message: messages.indexSessionFailure,
          variant: 'danger'
        })
      })
  }, [])

  const sessionsJsx = sessions.map(session => (
    <li key={session._id}>
      <Link to={`/sessions/${session._id}`}>{session._id}</Link>
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
