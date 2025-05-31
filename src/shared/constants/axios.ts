export const AXIOS_DEFAULT_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  CONTENT_TYPE: 'application/json',
  TIMEOUT: 3000
} as const
