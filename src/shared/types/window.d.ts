import type { useMessage } from 'naive-ui'

export declare global {
  interface Window {
    $message: ReturnType<typeof useMessage>
  }
}
