import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession } from '../../api/sessions'
import Layout from '../Layout/Layout'
import BreakTimer from '../BreakTimer/BreakTimer'
import StudyTimer from '../StudyTimer/StudyTimer'
// import TimerHOC from '../Timer2/Timer2'
// import TimerBreak from '../Timer2/TimerBreak'
// import Checkbox from '../Checkbox/Checkbox'

const TimerSession = props => {
  const [session, setSession] = useState([])
  const [clickMe, setClickMe] = useState(false)
  // const [checked, setChecked] = useState(false)
  // console.log(checked)

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

  // const handleCheckboxChange = event => {
  //   event.preventDefault()
  //   setChecked(!checked)
  // }

  if (!session) {
    return <p>Loading...</p>
  }

  if (clickMe) {
    return <Redirect to={`/sessions/${session._id}/close`} />
  }

  return (
    <Layout>
      <p>Session Goals (Timer)</p>
      <div className="goals">
        <ul>
          <li>{session.goal1}</li>
          <li>{session.goal2}</li>
          <li>{session.goal3}</li>
        </ul>
      </div>
      <div className="breakTimer">
        <BreakTimer
        />
      </div>
      <div className="studyTimer">
        <StudyTimer
        />
      </div>
      <div className="center-this">
        <button className="btn btn-success" onClick={handleThisClick}>Finish Session</button>
      </div>
    </Layout>
  )
}
export default withRouter(TimerSession)
