import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'

// const GoalsForm = ({ session, handleSubmit, handleChange }) => (
//   <form onSubmit={handleSubmit} >
//     <label>Goals</label>
//     <input
//       placeholder="Session Goals"
//       value={session.goals}
//       name="goals"
//       onChange={handleChange}
//     />
//     <button type="submit">Submit</button>
//   </form>
// )

const GoalsForm = ({ session, handleSubmit, handleChange, handleReset }) => (
  <div>
    <h1 className="center-this">What would you like to accomplish?</h1>
    <Formik
      initialValues={{ goals: '' }}
    >
      {({ isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="center-this">
            <Field placeholder="Session Goals" type="text" name="goals" value={session.goals} onChange={handleChange} />
            <ErrorMessage name="password" component="div" />
          </div>
          <div className="center-this" >
            <button type="submit" className="btn btn-success" disabled={isSubmitting} >
            Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default withRouter(GoalsForm)
