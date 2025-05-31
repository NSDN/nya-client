/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** API ORIGIN */
  readonly VITE_API_ORIGIN: string
  /** API BASE PATH */
  readonly VITE_API_BASE_PATH: string
  /** API BASE URL(ORIGIN + PATH) */
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
