<template>
  <div class="author-layout page__default">
    <custom-svg />
    <app-header />
    <breadcrumbs />
    <big-header />
    <get-profile />
    <div class="container page__content">
      <div class="row">
        <div class="col-12">
          <div class="line" />
        </div>
        <div class="col-auto sideBar">
          <tabs />
        </div>
        <div class="col content-profile px-0">
          <nuxt />
          <!-- <not-found /> -->
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from "~/components/module/CustomSvg";
import AppHeader from "~/components/layout/AppHeader";
import BigHeader from "~/components/profile/bigHeader";
import Breadcrumbs from "~/components/layout/Breadcrumbs";
import AppFooter from "~/components/layout/AppFooter";
import NotFound from "~/components/profile/not-found";
import Tabs from "~/components/profile/tabs";
import getProfile from "~/components/profile/getProfile";

export default {
  name: "author",
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    BigHeader,
    Breadcrumbs,
    NotFound,
    getProfile,
    Tabs
    // LoginPopup
  },
};
</script>
