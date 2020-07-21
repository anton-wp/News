<template>
  <div>
    <custom-svg />
    <app-header />
    <hot-news />
    <breadcrumbs />
    <nuxt />
    <app-footer />
    <!-- <back-to-top bottom="50px" right="50px">
      <button type="button" class="btn btn-info btn-to-top">
        <i class="fa fa-chevron-up"></i>
      </button>
    </back-to-top> -->
  </div>
</template>

<script>
import CustomSvg from "~/components/module/CustomSvg";
import HotNews from "~/components/layout/HotNews";
import AppHeader from "~/components/layout/AppHeader";
import Breadcrumbs from "~/components/layout/Breadcrumbs";
import AppFooter from "~/components/layout/AppFooter";
// import BackToTop from "vue-backtotop";

export default {
  name: "default",
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    Breadcrumbs,
    // BackToTop
  }
};
</script>
<style lang="scss">
@import "../assets/app";
</style>
