import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-compound-timer'
import { withRouter } from 'react-router-dom'
import BreakTimer from '../BreakTimer/BreakTimer'
import Button from 'react-bootstrap/Button'

const StudyTimer = () => {
  const [timerEnded, setTimerEnded] = useState(false)
  const [starter, setStarter] = useState(false)
  const [thisTime, setThisTime] = useState(false)
  const { value, controls } = useTimer({
    initialTime: 10000,
    direction: 'backward',
    startImmediately: false,
    onReset: () => setTimeout(() => {
      controls.setTime(10000)
      controls.start()
    }, 5000),
    onStart: () => { setStarter(true) }
  })

  useEffect(() => {
    controls.setCheckpoints([
      {
        time: 9500,
        callback: () => setThisTime(true)
      },
      {
        time: 0,
        callback: () => console.log('Study Timer Finished.')
      },
      {
        time: 0,
        callback: () => controls.reset()
      },
      {
        time: 0,
        callback: () => setTimerEnded(true)
      },
      {
        time: 0,
        callback: () => setThisTime(false)
      }
    ])
  }, [])

  if (!value) {
    return null
  }

  return (
    <React.Fragment>
      <h2 className="center-this"> { starter ? null : <Button variant="outline-secondary" onClick={controls.start}>Start Session</Button> } </h2>
      { thisTime ? <h3 className="thisTime">Study Time!</h3> : <h3 className="thisTime">Break Time!</h3> }
      <div className="timerContainer">
        <div className="studyTimer">{value.m} m {value.s} s {controls.getTimerState()}</div>
        <BreakTimer timerEnded={timerEnded} />
      </div>
    </React.Fragment>
  )
}

export default withRouter(StudyTimer)
