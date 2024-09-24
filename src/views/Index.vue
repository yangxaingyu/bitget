<template>
  <div id="__nuxt">
    <div id="__layout">
      <div class="main-bitget global-theme white">
        <HzHeader></HzHeader>
        <HzMain></HzMain>
        <HzFooter></HzFooter>
        <HzTabbar></HzTabbar>
      </div>
    </div>
  </div>
</template>

<script>
import HzMain from "@/components/HzMain.vue";

export default {
  components: {HzMain}
}
</script>

<style scoped>

</style>