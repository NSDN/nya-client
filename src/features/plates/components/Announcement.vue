<template>
  <div id="announcement">
    <span class="line" v-for="_ of 3">这是公告的示例</span>
  </div>
</template>

<style scoped>
#announcement {
  background: var(--color-normal-box-background);
  border-radius: 3px;
  box-shadow: var(--shadow-normal-box-shadow);
  display: flex;
  flex-direction: column;
  height: 5.5rem;
}

.line {
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}
</style>
