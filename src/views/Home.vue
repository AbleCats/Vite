<template>
  <p>
    <span>vuex user/age: {{age}}</span>
    <Button @click="addAge">age++</Button>
    <ElButton @click="addAge">age++</ElButton>
  </p>
</template>

<script>
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';
import { Button } from "ant-design-vue";
import { ElButton, ElSelect } from 'element-plus';
export default defineComponent({
  name: 'Home',
  setup() {
    const store = useStore(); // 调用 vuex 的 Composition API 获取 store ，相当于 $store
    const age = computed(() => store.getters['user/age']);
    const addAge = () => store.dispatch('user/addAge', 1);
    return {age,addAge};
  },
  components: {
    Button,
    ElButton
  }
})
</script>

<style>

</style>