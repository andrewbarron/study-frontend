import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession } from '../../api/sessions'
import Layout from '../Layout/Layout'
// import BreakTimer from '../BreakTimer/BreakTimer'
import StudyTimer from '../StudyTimer/StudyTimer'
import messages from '../AutoDismissAlert/messages'
// import Checkbox from '../Checkbox/Checkbox'
import Button from 'react-bootstrap/Button'

const TimerSession = props => {
  const [session, setSession] = useState([])
  const [clickMe, setClickMe] = useState(false)
  useEffect(() => {
    const msgAlert = props.msgAlert
    // SHOW SESSION
    showSession(props.match.params.id, props.user)
      .then(res => setSession(res.data.session))
      .then(() => msgAlert({
        heading: 'Showing Session',
        message: messages.showSessionSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Show Session failed with error: ' + error.message,
          message: messages.showSessionFailure,
          variant: 'danger'
        })
      })
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
      <div className="goals">
        <ul>
          <li>{session.goal1}</li>
          <li>{session.goal2}</li>
          <li>{session.goal3}</li>
        </ul>
      </div>
      <div className="studyTimer">
        <StudyTimer
        />
      </div>
      <div className="center-this">
        <Button variant="outline-danger" onClick={handleThisClick}>Finish Session</Button>
      </div>
    </Layout>
  )
}
export default withRouter(TimerSession)
