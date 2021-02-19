import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession } from '../../api/sessions'
import Layout from '../Layout/Layout'
import { StudyTimer, BreakTimer } from '../Timer/Timer'

const TimerSession = props => {
  const [session, setSession] = useState([])
  const [clickMe, setClickMe] = useState(false)

  useEffect(() => {
    // SHOW SESSION
    showSession(props.match.params.id, props.user)
      .then(res => setSession(res.data.session))
      .then(console.log('SHOW TIMERPAGE SUCCESS'))
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
      <p>this is Timer</p>
      <div className="goals">
        <ul>
          <li>Session Goals: {session.goals}</li>
        </ul>
      </div>
      <div className="timerContainer">
        <p>Study timer</p>
        <StudyTimer
        />
        <p>Break timer</p>
        <BreakTimer
        />
      </div>
      <div className="center-this">
        <button className="btn btn-success" onClick={handleThisClick}>Finish Session</button>
      </div>
    </Layout>
  )
}
export default withRouter(TimerSession)
