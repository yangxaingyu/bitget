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
import HzFooter from "@/components/HzFooter.vue";
import HzHeader from "@/components/HzHeader.vue";
import HzTabbar from "@/components/HzTabbar.vue";
import HzMain from "@/components/HzMain.vue";

export default {
  components: {HzMain, HzTabbar, HzHeader, HzFooter}
}
</script>

<style scoped>

</style>