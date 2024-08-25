<script setup lang="ts">
import { NImage, NCard, NSpace, NTag, NButton, NDataTable } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { PictureListTypeEnum } from '@/features/commic/enums'
import PictureList from '@/features/commic/components/PictureList.vue'
const imgDiv = ref<HTMLElement | null>(null)
let width = ref()
let height = ref()
onMounted(() => {
  // 获取初始宽高
  if (imgDiv.value) {
    width.value = imgDiv.value.offsetWidth
    height.value = imgDiv.value.offsetHeight
  }
})
// 静态图片列表
const PictureItem = ref([
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '0',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '1',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
  {
    id: 1,
    thumbnail:
      'https://lain.bgm.tv/pic/cover/l/0a/7f/340381_oqqxt.jpg?_gl=1*g65124*_ga*MTY2MDExNzk4LjE3MjM0NTczMDA.*_ga_1109JLGMHN*MTcyNDQwMjc4Ny43LjEuMTcyNDQwMjgzMi4wLjAuMA..',
    title: '2',
  },
])
// 静态漫画属性
const columns = [
  {
    title: '属性',
    key: 'attribute',
  },
  {
    title: '名字',
    key: 'name',
  },
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
      <div class="cover flex-center" ref="imgDiv">
        <n-image
          object-fit="contain"
          src="\src\assets\img\temp\fm1.jpg"
          :width
          :height
        />
      </div>
      <!-- 展示区 -->
      <div class="display">
        <n-card
          class="card"
          title="漫画标签"
          :style="{ maxHeight: height * 0.3 + 'px' }"
        >
          <n-space>
            <!-- 按帖主选择的标签，老用户也可打标签 -->
            <n-tag> 欢乐 </n-tag>
            <n-tag type="success">悲伤</n-tag>
            <n-tag type="warning">平和</n-tag>
            <n-tag type="error"> 魔理沙 </n-tag>
            <n-tag type="error" v-for="i in 30"> 恶搞 </n-tag>
          </n-space>
        </n-card>
        <PictureList
          class="pages"
          :style="{ maxHeight: height * 0.7 + 'px' }"
          :list="PictureItem"
          :list-type="PictureListTypeEnum.PAGE"
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
  overflow: hidden;
}

.display {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  background-color: wheat;
}
.card {
  overflow: auto;
}
.pages {
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
