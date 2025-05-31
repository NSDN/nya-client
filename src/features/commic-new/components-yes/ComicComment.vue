<script setup lang="ts">
import CommicComment from '@/features/commic/components/CommicComment.vue'
import MarkdownSample from '@/components/MarkdownSample.vue'

import { onBeforeMount } from 'vue'
import { useCommicComment, useCommicStore } from '@/features/commic/hooks'
import { useRoute } from 'vue-router'
import { getFormattedDate } from '@/utils'

const route = useRoute()
const commic = useCommicStore()
const comment = useCommicComment()

onBeforeMount(async (): Promise<void> => {
  const commicID = (route.query as { id: string }).id
  await commic.queryPages(commicID)
  await comment.queryList(commicID)
})

function submitComment(content: string): void {
  comment.addItem({
    id: Date.now().toString(),
    date: getFormattedDate(new Date(), 'yyyy-mm-dd'),
    floor: comment.list.length + 1,
    username: 'hyoryu',
    content,
  })
}
</script>

<template>
  <div class="comment">
    <CommicComment class="display" tabindex="0" :list="comment.list" />
    <MarkdownSample class="speak" @submit="submitComment" />
  </div>
</template>

<style scoped>
.comment {
  flex: 1;
  display: flex;
  margin: 1rem;
}
/* 评论展示 */
.display {
  flex: 7;
  outline: none;
  margin: 0 1rem 0 0;
}
/* 评论发言 */
.speak {
  flex: 3;
  margin: 0;
  background-color: aqua;
}
.display:focus {
  flex: 14;
}
</style>
