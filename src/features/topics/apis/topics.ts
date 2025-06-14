import type { Option, Result } from '@/shared/utils/rust'
import type { TopicListItem } from '../types'
import { request } from '@/shared/services/request'
import { API_URLS } from '@/shared/constants'
import type { ApiError } from '@/shared/errors'

/**
 * 获取帖子列表。
 *
 * @param plateId - 版块 ID
 * @returns 帖子列表
 */
export async function getTopics(
  plateId: string
): Promise<Result<Option<Option<TopicListItem>[]>, ApiError>> {
  return request({
    url: `${API_URLS.TOPICS}?plateId=${encodeURIComponent(plateId)}`,
    method: 'GET'
  })
}
