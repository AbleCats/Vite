<script setup>
import { ref } from 'vue'
import { Button } from 'ant-design-vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <a-button type="button" @click="count++">count is: {{ count }}</a-button>
</template>

<style lang="scss" scoped>

</style>
