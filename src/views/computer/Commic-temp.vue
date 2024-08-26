<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useCommicComment, useCommicStore } from '@/features/commic/hooks'
import { useRoute } from 'vue-router'

import { NTabs, NTabPane } from 'naive-ui'
import ComicTalk from '@/features/commic-new/components-yes/ComicTalk.vue'
import ComicInfo from '@/features/commic-new/components-yes/ComicInfo.vue'
import ComicComment from '@/features/commic-new/components-yes/ComicComment.vue'
import BackButton from '@/components/BackButton.vue'

const route = useRoute()
const commic = useCommicStore()
const comment = useCommicComment()

//获取路由带的帖子id参数
onBeforeMount(async (): Promise<void> => {
  const commicID = (route.query as { id: string }).id
  await commic.queryPages(commicID)
  await comment.queryList(commicID)
})

// 面板容器样式
const pane_wrapper_style = 'display: flex;flex:1;flex-direction: column;'
</script>

<template>
  <div id="commic">
    <BackButton class="back" />
    <n-tabs
      type="card"
      size="large"
      animated
      class="tabs"
      :pane-wrapper-style="pane_wrapper_style"
    >
      <n-tab-pane
        name="comic"
        tab="漫画"
        style="padding: 0"
        class="tab-pane"
        display-directive="show"
      >
        <ComicInfo />
      </n-tab-pane>
      <n-tab-pane name="talk" tab="简谈" style="padding: 0" class="tab-pane">
        <ComicTalk />
      </n-tab-pane>
      <n-tab-pane name="comment" tab="评论" style="padding: 0" class="tab-pane">
        <ComicComment />
      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<style scoped>
#commic {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.back {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  align-self: flex-start;
  border: 0.2rem black solid;
  padding: 0.5rem;
  border-radius: 2rem;
  background-color: #81d4fa;
}
.back:hover {
  background-color: #3498db;
}

.tabs {
  flex: 1;
}
.tab-pane {
  display: flex;
  flex: 1;
  background-color: rgb(121, 121, 121);
}
</style>
