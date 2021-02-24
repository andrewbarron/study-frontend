import React, { useEffect } from 'react'
import { useTimer } from 'react-compound-timer'
import { withRouter } from 'react-router-dom'

export const BreakTimer = ({ timerEnded, closeTimer }) => {
  let plsWork
  let closeThis
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

  useEffect(() => {
    if (closeTimer) {
      closeThis = controls.stop()
    }
  }, [closeTimer])

  if (!value) {
    return null
  }

  return (
    <React.Fragment>
      <a>{plsWork}</a>
      <a>{closeThis}</a>
      <div className="breakTimer"> {value.m} m {value.s} s {controls.getTimerState()} </div>
    </React.Fragment>
  )
}

export default withRouter(BreakTimer)
