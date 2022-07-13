<script setup>
import { Layout } from 'ant-design-vue'
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>Header</a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>

</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  position: relative;
}
</style>

<style lang="scss" scoped>

.layout {
  height: 100%;
}

:deep(.ant-layout-header) {
  background: transparent;
}
</style>
