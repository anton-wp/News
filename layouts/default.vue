<template>
  <div>
    <custom-svg />
    <app-header />
    <hot-news />
    <breadcrumbs />
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from "~/components/module/CustomSvg";
import HotNews from "~/components/layout/HotNews";
import AppHeader from "~/components/layout/AppHeader";
import Breadcrumbs from "~/components/layout/Breadcrumbs";
import AppFooter from "~/components/layout/AppFooter";

export default {
	name: 'default',
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    Breadcrumbs
  }
};
</script>

<style lang="scss">
@import "../assets/app";
</style>
