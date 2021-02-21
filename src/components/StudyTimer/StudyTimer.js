import React, { useEffect } from 'react'
import { useTimer } from 'react-compound-timer'

export const StudyTimer = () => {
  const { value, controls } = useTimer({
    initialTime: 45000,
    direction: 'backward',
    startImmediately: false,
    onReset: () => setTimeout(() => {
      controls.setTime(45000)
      controls.start()
    }, 15000)
  })

  useEffect(() => {
    controls.setCheckpoints([
      {
        time: 30000,
        callback: () => console.log('30 seconds')
      },
      {
        time: 0,
        callback: () => controls.reset()
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

export default StudyTimer
