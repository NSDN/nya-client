<script setup lang="ts">
import type { CSSProperties } from 'vue'

withDefaults(
  defineProps<{
    hint: string
    marginLeft?: CSSProperties['marginLeft']
    scale?: CSSProperties['scale']
  }>(),
  {
    marginLeft: '0',
    scale: '0.85',
  },
)
</script>

<template>
  <span class="hint" :title="hint">?</span>
</template>

<style scoped>
.hint {
  border: 2px #333 solid;
  border-radius: 50%;
  cursor: default;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  height: 1rem;
  margin-left: v-bind('marginLeft');
  scale: v-bind('scale');
  text-align: center;
  line-height: 18px;
  width: 1rem;
}
</style>
