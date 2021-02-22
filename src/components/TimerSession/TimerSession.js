import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showSession } from '../../api/sessions'
import Layout from '../Layout/Layout'
// import BreakTimer from '../BreakTimer/BreakTimer'
import StudyTimer from '../StudyTimer/StudyTimer'
import messages from '../AutoDismissAlert/messages'
import Checkbox from '../Checkbox/Checkbox'
import Button from 'react-bootstrap/Button'

const TimerSession = props => {
  const [session, setSession] = useState([])
  const [closeThisSession, setCloseThisSession] = useState(false)
  const [checked, setChecked] = useState(false)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const divStyle = {
    listStyleType: 'none'
  }
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

  const handleCheckboxChange = event => {
    event.persist()
    setChecked(event.target.checked)
  }
  const handleCheckboxChange2 = event => {
    event.persist()
    setChecked2(event.target.checked)
  }
  const handleCheckboxChange3 = event => {
    event.persist()
    setChecked3(event.target.checked)
  }

  const handleClose = event => {
    event.preventDefault()
    setCloseThisSession(true)
  }

  if (!session) {
    return <p>Loading...</p>
  }

  if (closeThisSession) {
    return <Redirect to={`/sessions/${session._id}/close`} />
  }

  return (
    <Layout>
      <div className="goals">
        <ul style={divStyle}>
          <li><label>
            <Checkbox checked={checked} onChange={handleCheckboxChange} /> {session.goal1}
          </label></li>
          <li><label>
            <Checkbox checked={checked2} onChange={handleCheckboxChange2}/> {session.goal2}
          </label></li>
          <li><label>
            <Checkbox checked={checked3} onChange={handleCheckboxChange3}/> {session.goal3}
          </label></li>
        </ul>
      </div>
      <div className="studyTimer">
        <StudyTimer
        />
      </div>
      <div className="center-this">
        <Button variant="outline-danger" onClick={handleClose}>Finish Session</Button>
      </div>
    </Layout>
  )
}
export default withRouter(TimerSession)
