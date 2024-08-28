<script setup lang="ts">
import {
  NImage,
  NCard,
  NSpace,
  NTag,
  NButton,
  NDataTable,
  NImageGroup,
} from 'naive-ui'
import { computed, ref } from 'vue'
import { PictureListTypeEnum } from '@/features/commic/enums'
import PictureList from '@/features/commic/components/PictureList.vue'
import { Commic } from '@/features/commic/types'

const pictureItem = ref<Commic.PictureItem[]>(
  Array.from({ length: 28 }, (_, key) => ({
    id: key.toString(),
    thumbnail: `\\src\\assets\\img\\temp\\《究极至高的乌堇对决》\\${key}.jpg`,
    title: key.toString(),
  }))
)
const comicIndex = ref<string>(pictureItem.value[0].id)
const setComicIndex = (id: string) => {
  comicIndex.value = id
}
// 获取最新下标
const queryComicIndex = computed(() => {
  return pictureItem.value.findIndex((comic) => comic.id === comicIndex.value)
})

const onPrev = () => {
  if (queryComicIndex.value - 1 >= 0) {
    comicIndex.value = pictureItem.value[queryComicIndex.value - 1].id
  } else {
    //到头时执行获取漫画钩子，如果已经没了则提示
    comicIndex.value = pictureItem.value[pictureItem.value.length - 1].id
  }
}
const onNext = () => {
  if (queryComicIndex.value < pictureItem.value.length - 1) {
    comicIndex.value = pictureItem.value[queryComicIndex.value + 1].id
  } else {
    //到末尾时执行获取漫画钩子，如果已经没了则返回首页
    comicIndex.value = pictureItem.value[0].id
  }
}
// 静态漫画属性
const columns = [
  { title: '属性', key: 'attribute' },
  { title: '名字', key: 'name' },
]

const data = [
  {
    key: 0,
    attribute: '漫画原名',
    name: '这是漫画名字!!!',
  },
  {
    key: 1,
    attribute: '作者',
    name: '有机化合物',
  },
  {
    key: 1,
    attribute: '图源',
    name: 'AAA',
  },
  {
    key: 1,
    attribute: '修图',
    name: 'BBB',
  },
  {
    key: 1,
    attribute: '汉化',
    name: 'CCC',
  },
  {
    key: 1,
    attribute: '嵌字',
    name: 'DDD',
  },
  {
    key: 2,
    attribute: '校对',
    name: 'EEE',
  },
  {
    key: 3,
    attribute: '下载',
    name: 'www.pixie.com',
  },
  {
    key: 4,
    attribute: '上传日期',
    name: '2024-8-10',
  },
  {
    key: 4,
    attribute: '上传日期',
    name: '2024-8-10',
  },
  {
    key: 4,
    attribute: '上传日期',
    name: '2024-8-10',
  },
  {
    key: 4,
    attribute: '上传日期',
    name: '2024-8-10',
  },
]
</script>

<template>
  <div class="comic">
    <span class="title">魔理沙太尊了！！！</span>
    <div class="main">
      <!-- 图片区 -->
      <div class="cover">
        <!-- src="/src/assets/img/temp/封面方.jpg" -->
        <!-- src="/src/assets/img/temp/封面横.jpg" -->
        <n-image-group
          show-toolbar-tooltip
          :on-preview-prev="onPrev"
          :on-preview-next="onNext"
        >
          <n-image
            v-for="item in pictureItem"
            object-fit="contain"
            :src="item.thumbnail"
            class="flex-center"
            lazy
            :intersection-observer-options="{
              root: '#image-scroll-container',
            }"
            v-show="item.title === comicIndex"
          />
        </n-image-group>
      </div>

      <!-- 展示区 -->
      <div class="display">
        <n-card class="card" title="漫画标签">
          <n-space>
            <!-- 按帖主选择的标签，老用户也可打标签 -->
            <n-tag> 欢乐 </n-tag>
            <n-tag type="success">悲伤</n-tag>
            <n-tag type="warning">平和</n-tag>
            <n-tag type="error"> 魔理沙 </n-tag>
            <n-tag type="error" v-for="_ of 30"> 恶搞 </n-tag>
          </n-space>
        </n-card>
        <PictureList
          class="pages"
          :list="pictureItem"
          :list-type="PictureListTypeEnum.PAGE"
          @clickItem="setComicIndex"
        />
      </div>

      <!-- 信息区 -->
      <div class="info">
        <!-- 表格展示属性 -->
        <n-data-table
          class="attribute"
          :columns="columns"
          :data="data"
          flex-height
        />
        <div class="domain grid-center">
          <n-button color="#ffca28" round> 收藏 </n-button>
          <n-button color="#ffcdd2 " round> 点赞 </n-button>
          <n-button color="#26c6da" round> 分享 </n-button>
          <n-button color="#9ccc65 " round> 下载 </n-button>
          <n-button color="#e53935 " round> 举报 </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comic {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.title {
  font-size: 1.5rem;
  flex: 5;
  display: flex;
  align-items: center;
  background-color: white;
  margin-bottom: 1rem;
  padding: 0.3rem;
}
.main {
  flex: 95;
  display: flex;
}
.cover {
  flex: 1;
  background-color: black;
}
:deep(.n-image) {
  width: 100%;
  height: 100%;
  position: relative;
}
:deep(.n-image:hover) {
  cursor: default;
}
:deep(.n-image img) {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}

.display {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  background-color: wheat;
}
.card {
  flex: 3 1 0;
  overflow: auto;
}
.pages {
  flex: 7 1 0;
  background-color: red;
}
.info {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.attribute {
  flex: 9;
  margin-bottom: 1rem;
}
.domain {
  background-color: antiquewhite;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  flex: 1;
}
/* 隐藏滚动条（适用于Webkit内核浏览器） */
/* ::-webkit-scrollbar {
  display: none;
} */
</style>
