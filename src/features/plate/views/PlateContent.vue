<script setup lang="ts">
// import Announcement from '@/features/plate/components/Announcement.vue'
// import ArticleList from '@/features/article/components/ArticleList.vue'
// import PictureList from '@/features/commic/components/PictureList.vue'
//
// import { watchEffect } from 'vue'
// import { useCommicStore } from '@/features/commic/hooks'
// import { usePlateStore } from '@/features/plate/store'
// import useArticleStore from '@/features/article/hooks/use-article-store'

// const plate = usePlateStore()
//
// const commic = useCommicStore()
// const article = useArticleStore()
//
// watchEffect(async () => {
//   if (plate.isCommicPlate) {
//     await commic.queryList()
//   } else {
//     await article.queryList()
//   }
// })
</script>

<template>
  <div id="plate-content">
    <!-- <Announcement /> -->

    <div class="search">筛选 / 检索</div>

    <!-- 
    <PictureList
      v-if="plate.isCommicPlate"
      :list="commic.list"
      @click-item="commic.clickListItem"
    />
    -->
    <!--
    <ArticleList v-else :list="article.list" />
    -->
  </div>
</template>

<style scoped>
#plate-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.search {
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 1rem 0 0;
}
</style>
