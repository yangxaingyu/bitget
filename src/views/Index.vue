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
@media (max-width: 750px){
  img.top-banner-image.w-560px.h-560px.flex.\<xl\:-ml-120px.air\:w-488px.air\:h-488px.air\:mt-50px.pad\:order-first.pad\:ml-0.\!pad\:m-auto.phone\:hidden {
    display: none;
  }
}
</style>