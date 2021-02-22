import React, { useEffect } from 'react'
import { useTimer } from 'react-compound-timer'
import { withRouter } from 'react-router-dom'

export const BreakTimer = ({ timerEnded }) => {
  let plsWork
  const { value, controls } = useTimer({
    initialTime: 5000,
    direction: 'backward',
    startImmediately: false,
    onReset: () => setTimeout(() => {
      controls.setTime(5000)
      controls.start()
    }, 10000)
  })

  useEffect(() => {
    controls.setCheckpoints([
      {
        time: 0,
        callback: () => console.log('Break Timer finished.')
      },
      {
        time: 0,
        callback: () => controls.reset()
      }
    ])
  }, [timerEnded])

  useEffect(() => {
    if (timerEnded) {
      plsWork = controls.start()
    }
  }, [timerEnded])

  if (!value) {
    return null
  }

  return (
    <div>
      <h3>Break Timer</h3>
      <div> {value.m} m {value.s} s </div>
      <div>{controls.getTimerState()}</div>
      <a>{plsWork}</a>
    </div>
  )
}

export default withRouter(BreakTimer)
