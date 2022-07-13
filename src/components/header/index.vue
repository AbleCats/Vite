<template>
  <div class="header-bar">
    <div class="icon"></div>
    <div class="title">Cats App</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-bar {
  display: flex;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0 20px 27px rgb(0 0 0 / 5%);
  .icon {
    width: 48px;
    height: 48px;
    margin: auto 20px;
    background-image: url("/favicon.ico");
  }
  .title {
    flex: 1;
    font-size: 18px;
    font-weight: 600;
  }
}
</style>