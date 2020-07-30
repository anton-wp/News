<template>
  <div class="profile-layout page__default">
    <custom-svg />
    <app-header />
    <breadcrumbs />
    <big-header />
    <get-profile />
    <div class="container page__content">
      <div class="row">
        <div class="col-12 profile-bottom">
          <div class="line" />
        </div>
        <div class="col-auto sideBar mx-0">
          <tabs />
        </div>
        <div class="col px-0">
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
  name: "profile",
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    BigHeader,
    Breadcrumbs,
    NotFound,
    getProfile,
    Tabs,
  },
  data() {
    return {
      headTitle: null,
    };
  },
  head() {
    return {
      title: this.headTitle
        ? `Verdict Verdict ${this.headTitle} at VERDICT`
        : "Verdict Verdict at VERDICT",
    };
  },
  methods: {
    checkPage() {
      if (this.$route.query.page && this.$route.query.page !== 1) {
        this.headTitle = "Page #" + this.$route.query.page;
      } else {
        this.headTitle = null;
      }
    },
  },
  watch: {
    "$route.query"() {
      this.checkPage();
    },
  },
  mounted() {
    this.checkPage();
  },
};
</script>
