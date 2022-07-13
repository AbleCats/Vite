<script setup>
import { Layout } from 'ant-design-vue'
import HeaderBar from '@/components/header/index.vue';
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <HeaderBar />
    </a-layout-header>
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
  background-color: #fff;
}

:deep(.ant-layout-header) {
  padding: 0;
  background: transparent;
}
:deep(.ant-layout-content) {
  padding: 10px;
}
</style>
