import apiUrl from '../apiConfig'
import axios from 'axios'

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
