import type { Commic } from '@/features/commic/types'

import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUploadCommic = defineStore('upload-commic', () => {
  /** @description 图片列表 */
  const pages = ref<Commic.Pages>([])

  /**
   * @description 设置图片列表
   * @param list 图片列表
   */
  const setPages = (list: Commic.Pages) => (pages.value = list)

  /**
   * @description 上传图片至浏览器
   * @param event 上传事件
   */
  const uploadPages = (event: Event): void => {
    const node = event.target as HTMLInputElement
    const pictures: File[] = Array.from(node.files ?? [])

    const _pages: Commic.Pages = pictures.map<Commic.Page>(
      (picture: File, index: number) => ({
        id: (Date.now() + index).toString(),
        thumbnail: window.URL.createObjectURL(picture),
        title: picture.name,
        content: new File([picture], picture.name),
      }),
    )

    console.log(_pages)
    setPages(_pages)
  }

  /**
   * @description 提交漫画主题
   */
  const commitTopic = async (): Promise<void> => {
    // TODO
  }

  return {
    pages,
    setPages,
    uploadPages,
    commitTopic,
  }
})

export default useUploadCommic
