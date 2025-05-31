<template>
  <button class="sidebar-controller">|</button>
</template>

<style scoped>
.sidebar-controller {
  background: pink;
  border: unset;
  box-shadow: 2px 0 6px 2px #bbb;
  color: #666;
  opacity: 0;
  font-size: 12px;
  font-weight: bold;
  height: 100%;
  left: 0;
  padding: unset;
  position: absolute;
  top: 0;
}

.sidebar-controller:hover {
  animation: slideIn 0.1s ease-in-out;
  opacity: 1;
}

@keyframes slideIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
