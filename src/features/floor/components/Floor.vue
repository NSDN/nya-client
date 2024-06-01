<script setup lang="ts">
import { ArticleType } from '@/features/article/types'

defineProps<{
  /** 图片 */
  icon: string
  /** 用户昵称 */
  nickname: string
  /** 回帖文章类型 */
  bodyType: ArticleType
  /** 回帖正文 */
  body: string
  /** 楼层 */
  level: number
}>()
</script>

<template>
  <div id="floor">
    <div class="status">#{{ level }}</div>

    <div class="wrapper">
      <div class="personal-info">
        <img class="icon" :src="icon" />
        <span class="userinfo">{{ nickname }}</span>
      </div>

      <div class="article-container">
        <div class="article markdown-body" v-html="body" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#floor {
  background: var(--common-block-background);
  border-radius: var(--common-block-radius);
}

.wrapper {
  display: flex;
}

.personal-info {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  width: 10rem;
}

.icon {
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  height: 120px;
  width: 120px;
}

.userinfo {
  margin: 1rem 0 0;
}

.article-container {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem 1rem 1rem 0;
}

.status {
  text-align: end;
}

.article {
  background: transparent;
  box-sizing: border-box;
  flex: 1;
}
</style>
