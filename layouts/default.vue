<template>
  <div>
    <custom-svg />
    <app-header />
    <hot-news />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
import HotNews from '~/components/layout/HotNews'
import AppHeader from '~/components/layout/AppHeader'
import AppFooter from '~/components/layout/AppFooter'
export default {
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews
  }
}
</script>

<style lang="scss">
@import "../assets/app";
</style>
