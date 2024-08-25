<template>
  <div id="announcement">
    <span class="line" v-for="_ of 3">这是公告的示例</span>
  </div>
</template>

<style scoped>
#announcement {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  display: flex;
  flex-direction: column;
  height: 5.5rem;
}

.line {
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}
</style>
