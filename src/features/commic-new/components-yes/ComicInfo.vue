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
    thumbnail: `/src/assets/img/temp/《究极至高的乌堇对决》/${key}.jpg`,
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
    //到头检查是否有前话，有则获取最新话的漫画列表并从最后一页开始
    comicIndex.value = pictureItem.value[pictureItem.value.length - 1].id
  }
}
const onNext = () => {
  if (queryComicIndex.value < pictureItem.value.length - 1) {
    comicIndex.value = pictureItem.value[queryComicIndex.value + 1].id
  } else {
    //到尾检查是否有后话，有则获取最新话的漫画列表并从第一页开始
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
    <h1>魔理沙太尊了！！！</h1>
    <div class="main">
      <!-- 图片区 -->
      <div class="cover">
        <!-- src="/src/assets/img/temp/封面方.jpg" -->
        <!-- src="/src/assets/img/temp/封面横.jpg" -->
        <!-- src="/src/assets/img/temp/小图.jpg"  -->
        <n-image-group
          show-toolbar-tooltip
          :on-preview-prev="onPrev"
          :on-preview-next="onNext"
        >
          <!-- :src="item.thumbnail" -->
          <n-image
            object-fit="contain"
            v-for="item in pictureItem"
            :src="item.thumbnail"
            :style="{ '--background-url': `url(${item.thumbnail})` }"
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
          :comicId="comicIndex"
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
.comic h1{
  font-size: 1.6rem;
  flex: 5;
  background-color: white;
  margin: 0 0 1rem;
  padding: 0.3rem;
}
.main {
  flex: 95;
  display: flex;
}
.cover {
  flex: 1;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.61);
}
:deep(.cover .n-image) {
  position: relative;
  width: 100%;
  height: 100%;
}
:deep(.cover .n-image:hover) {
  cursor: default;
}
:deep(.cover .n-image::before) {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: var(--background-url);
  background-size: cover;
  background-position: center;
  filter: blur(0.5rem);
  z-index: 0;
}
:deep(.cover .n-image img) {
  position: absolute;
  max-height: 100%;
  width: 100%;
  cursor: pointer;
  z-index: 1;
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
