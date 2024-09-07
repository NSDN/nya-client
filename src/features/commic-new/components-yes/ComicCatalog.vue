<script setup lang="ts">
import { NImage, NButton } from 'naive-ui'
import { ref } from 'vue'
let imageUrl = ref<string>('')
// imageUrl.value='/src/assets/img/temp/封面横.jpg'
// imageUrl.value = '/src/assets/img/temp/封面方.jpg'
// imageUrl.value = '/src/assets/img/temp/小图.jpg'
imageUrl.value = '/src/assets/img/temp/《究极至高的乌堇对决》/0.jpg'

//滚动方法
const handleWheel = (event: WheelEvent) => {
  if (event.deltaY !== 0) {
    event.preventDefault() // 阻止默认的垂直滚动
    ;(event.currentTarget as HTMLElement).scrollLeft += event.deltaY // 水平滚动
  }
}
</script>
<template>
  <div class="catalog">
    <h1>魔理沙太尊了！！！</h1>
    <div class="main">
      <div class="info">
        <div class="display">
          <div class="cover">
            <n-image
              show-toolbar-tooltip
              object-fit="contain"
              :src="imageUrl"
              :style="{ '--background-url': `url(${imageUrl})` }"
              class="flex-center"
            />
            <!-- <img :src="imageUrl" alt="" /> -->
          </div>
          <div class="text">
            <p>作者：有机化合物</p>
            <p>分类？例如爱情、冒险、恐怖</p>
            <p>更新至（章节列表数量）</p>
            <p>...</p>
          </div>
        </div>
        <div class="describe">
          <p>
            这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。这是一段书籍简介内容。。。
          </p>
        </div>
        <div class="domain grid-center">
          <n-button color="#ffca28"> 追更 </n-button>
          <n-button color="#26c6da"> 分享 </n-button>
          <n-button color="#e53935"> 投诉 </n-button>
        </div>
      </div>
      <div class="chapter">
        <h2>章节列表</h2>
        <div class="option-domain">
          <div class="option-box" @wheel="handleWheel">
            <n-button color="#4fc3f7" round> 0-50 </n-button>
            <template v-for="i of 30">
              <n-button color="#d5d8dc" round
                >{{ i * 50 }}-{{ i * 50 + 50 }}</n-button
              >
            </template>
          </div>
        </div>
        <div class="list grid-center">
          <n-button color="#ffb300">0.我是标题</n-button>
          <template v-for="i of 49">
            <n-button color="#d5d8dc">{{ i }}.我是标题</n-button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1rem;
}
.catalog h1 {
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
.info {
  flex: 34;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
}
.display {
  flex: 52;
  display: flex;
  margin-bottom: 0.7rem;
}
.cover {
  margin-right: 0.5rem;
  flex: 6;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.568);
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
  max-width: 100%;
  height: calc(100% - 1rem);
  cursor: pointer;
  z-index: 1;
}

.text {
  flex: 4;
}
.text p {
  margin: 0.3rem;
}
.text p:first-child {
  margin: 0 0.3rem;
  font-size: 1.2rem;
}
.describe {
  flex: 37 0 0;
  display: flex;
  margin-bottom: 0.7rem;
  overflow: auto;
}
.describe p {
  font-size: 1.1rem;
  margin: 0.3rem;
}
.domain {
  flex: 11;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
}
.domain button {
  width: 80%;
  height: 60%;
  font-size: 1rem;
}
.chapter {
  flex: 66;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.chapter h2 {
  font-size: 1.3rem;
  flex: 5;
  margin: 0;
  padding: 0.5rem 0.7rem;
}
.option-domain {
  flex: 9 0 0;
  position: relative;
  overflow: hidden;
}
.option-box {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-x: auto;
  display: flex;
  align-items: center;
}
.option-domain button {
  color: #424949;
  min-width: 5rem;
  margin-left: 0.7rem;
}
.list {
  flex: 85;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(10, 1fr);
  background-color: aquamarine;
}
.list button {
  color: #424949;
  min-width: 80%;
  margin-left: 0.7rem;
}
</style>
