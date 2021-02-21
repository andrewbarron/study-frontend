import React, { useEffect } from 'react'
import { useTimer } from 'react-compound-timer'

export const BreakTimer = () => {
  const { value, controls } = useTimer({
    initialTime: 15000,
    direction: 'backward',
    startImmediately: false,
    onReset: () => setTimeout(() => {
      controls.setTime(15000)
      controls.start()
    }, 45000)
  })

  useEffect(() => {
    controls.setCheckpoints([
      {
        time: 0,
        callback: () => controls.reset()
      },
      {
        time: 0,
        callback: () => controls.start()
      }
    ])
  }, [])

  if (!value) {
    return null
  }

  return (
    <div>
      <div> {value.m} m {value.s} s </div>
      <div>{controls.getTimerState()}</div>
      <div> <button onClick={controls.start}>Start</button>
      </div>
    </div>
  )
}

export default BreakTimer
