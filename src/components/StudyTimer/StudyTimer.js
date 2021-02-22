import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-compound-timer'
import { withRouter } from 'react-router-dom'
import BreakTimer from '../BreakTimer/BreakTimer'
import Button from 'react-bootstrap/Button'

const StudyTimer = () => {
  const [timerEnded, setTimerEnded] = useState(false)
  const { value, controls } = useTimer({
    initialTime: 10000,
    direction: 'backward',
    startImmediately: false,
    onReset: () => setTimeout(() => {
      controls.setTime(10000)
      controls.start()
    }, 5000)
  })

  useEffect(() => {
    controls.setCheckpoints([
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
      }
    ])
  }, [])

  if (!value) {
    return null
  }

  return (
    <div>
      <div className="center-this">
        <Button variant="outline-secondary" onClick={controls.start}>Start Session</Button>
      </div>
      <h3> Study Timer</h3>
      <div>{value.m} m {value.s} s </div>
      <div>{controls.getTimerState()}</div>
      <div className="breakTimer">
        <BreakTimer timerEnded={timerEnded} />
      </div>

    </div>
  )
}

export default withRouter(StudyTimer)
