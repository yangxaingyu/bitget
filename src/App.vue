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
import HzHeader from './components/HzHeader.vue'
import HzMain from "@/components/HzMain.vue"
import HzFooter from "@/components/HzFooter.vue"
import HzTabbar from "@/components/HzTabbar.vue"
export default {
  components: {
    HzHeader,
    HzMain,
    HzFooter,
    HzTabbar
  }
}
</script>

<style>

</style>


