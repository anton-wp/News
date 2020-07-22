<template>
  <div class="page__default">
    <custom-svg />
    <app-header />
    <breadcrumbs />
    <nuxt  class="page__content" />
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
    Breadcrumbs,
    // BackToTop
  }
};
</script>
<style lang="scss">
@import "../assets/app";
</style>
