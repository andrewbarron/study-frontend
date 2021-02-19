import React from 'react'
import Timer from 'react-compound-timer'

export const StudyTimer = () => (
  <Timer
    initialTime={10000}
    direction="backward"
    lastUnit="s"
    checkpoints={[
      {
        time: 5000,
        callback: () => console.log('5 seconds left')
      },
      {
        time: 0,
        callback: () => console.log('Timer Finshed')
      }
    ]}
    startImmediately={false}
    onStart={() => console.log('You started.')}
    onResume={() => console.log('onResume hook')}
    onPause={() => console.log('onPause hook')}
    onStop={() => console.log('onStop hook')}
    onReset={() => console.log('You reset.')}
  >
    {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
      <React.Fragment>
        <div className="studyTimer">
          <div >
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
          </div>
          <div>{getTimerState()} {getTime()}</div>
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </React.Fragment>
    )}
  </Timer>
)

export const BreakTimer = () => (
  <Timer
    initialTime={5000}
    direction="backward"
    lastUnit="s"
    checkpoints={[
      {
        time: 5000,
        callback: () => console.log('5 seconds left')
      },
      {
        time: 0,
        callback: () => console.log('Timer Finshed')
      }
    ]}
    startImmediately={false}
    onStart={() => console.log('You started.')}
    onResume={() => console.log('onResume hook')}
    onPause={() => console.log('onPause hook')}
    onStop={() => console.log('onStop hook')}
    onReset={() => console.log('You reset.')}
  >
    {({ start, resume, pause, stop, reset, getTimerState, getTime }) => (
      <React.Fragment>
        <div className="breakTimer">
          <div>
            <Timer.Hours /> hours
            <Timer.Minutes /> minutes
            <Timer.Seconds /> seconds
          </div>
          <div>{getTimerState()} {getTime()}</div>
          <br />
          <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={resume}>Resume</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </React.Fragment>
    )}
  </Timer>
)
