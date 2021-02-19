import apiUrl from '../apiConfig'
import axios from 'axios'
// index
export const indexSession = (user, session) => {
  return axios({
    url: apiUrl + '/sessions',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// create
export const createSession = (user, session) => {
  return axios({
    url: apiUrl + '/sessions',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { session: session }
  })
}

// update
export const closeSession = (id, user, session) => {
  return axios({
    url: apiUrl + '/sessions/' + id + '/close',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { session: session }
  })
}

// Show
export const showSession = (id, user, session) => {
  return axios({
    url: apiUrl + '/sessions/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Delete
export const deleteSession = (id, user) => {
  return axios({
    url: apiUrl + '/sessions/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
