<template>
  <div>
    <custom-svg />
    <!-- <login-popup /> -->
    <app-header />
    <hot-news />
    <breadcrumbs />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
import HotNews from '~/components/layout/HotNews'
import AppHeader from '~/components/layout/AppHeader'
// import LoginPopup from '~/components/layout/LoginPopup'
import Breadcrumbs from '~/components/layout/Breadcrumbs'
import AppFooter from '~/components/layout/AppFooter'
export default {
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    Breadcrumbs
    // LoginPopup
  }
}
</script>

<style lang="scss">
@import "../assets/app";
</style>
