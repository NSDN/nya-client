<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import PictureList from '@/features/commic/components/PictureList.vue'
import CommicComment from '@/features/commic/components/CommicComment.vue'
import MarkdownSample from '@/components/MarkdownSample.vue'

import { onBeforeMount } from 'vue'
import { useCommicComment, useCommicStore } from '@/features/commic/hooks'
import { useRoute } from 'vue-router'
import { PictureListTypeEnum } from '@/features/commic/enums'
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
  <div id="commic">
    <BackButton class="back" />

    <PictureList
      class="pages"
      :list-type="PictureListTypeEnum.PAGE"
      :list="commic.pages"
    />

    <CommicComment class="comment" tabindex="0" :list="comment.list" />
    <MarkdownSample @submit="submitComment" />
  </div>
</template>

<style scoped>
#commic {
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rebeccapurple;
}

.back {
  align-self: flex-start;
  margin: -1rem 0 0;
}

.pages {
  flex: 3;
}

.comment {
  flex: 1;
  outline: none;
}

.comment:focus {
  flex: 6;
}
</style>
