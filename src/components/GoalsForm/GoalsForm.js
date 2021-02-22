import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import Button from 'react-bootstrap/Button'
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
      initialValues={{ goal1: '', goal2: '', goal3: '' }}
    >
      {({ isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <div className="center-this">
            <Field placeholder="Session Goal 1" type="text" name="goal1" value={session.goal1} onChange={handleChange} />
            <Field placeholder="Session Goal 2" type="text" name="goal2" value={session.goal2} onChange={handleChange} />
            <Field placeholder="Session Goal 3" type="text" name="goal3" value={session.goal3} onChange={handleChange} />
          </div>
          <div className="center-this" >
            <Button type="submit" variant="outline-secondary" disabled={isSubmitting} >
            Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default withRouter(GoalsForm)
