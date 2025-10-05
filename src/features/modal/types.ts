/** 模态框类型 */
export namespace Modal {
  /** 模态框选项 */
  export interface ModalOptions {
    /** 提示信息 */
    info: string
    /** 是否启用第二个按钮 */
    useSecondButton?: boolean
    /** 按钮文字 */
    buttonLabel?: [string, string]
    /** 确认键回调 */
    confirmCallback?: Function
    /** 取消键回调 */
    cancelCallback?: Function
  }
}
