import axios from 'axios'
import { AXIOS_DEFAULT_CONFIG } from '../constants'
import { optionizeDeep } from '../utils/useful'

export const http = axios.create({
  baseURL: AXIOS_DEFAULT_CONFIG.BASE_URL,
  headers: { 'Content-Type': AXIOS_DEFAULT_CONFIG.CONTENT_TYPE },
  timeout: AXIOS_DEFAULT_CONFIG.TIMEOUT,
})

http.interceptors.response.use((response) => {
  response.data = optionizeDeep(response.data)
  return response
})
