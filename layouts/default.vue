<template>
  <div>
    <custom-svg />
    <app-header />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
import AppHeader from '~/components/layout/AppHeader'
import AppFooter from '~/components/layout/AppFooter'
export default {
  components: {
    CustomSvg,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import "../assets/app";
</style>
