<template>
  <div>
    <custom-svg />
    <app-header />
    <hot-news />
    <breadcrumbs />
    <big-header />
    <div class="container">
      <div class="row">
        <div class="col-12 profile-bottom">
          <div class="line" />
        </div>
        <div class="col-auto sideBar">
          <tabs />
        </div>
        <div class="col content">
          <nuxt />
          <not-found />
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
import HotNews from '~/components/layout/HotNews'
import AppHeader from '~/components/layout/AppHeader'
import BigHeader from '~/components/profile/bigHeader'
import Breadcrumbs from '~/components/layout/Breadcrumbs'
import AppFooter from '~/components/layout/AppFooter'
import NotFound from '~/components/profile/not-found'
import Tabs from '~/components/profile/tabs'

export default {
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    BigHeader,
    Breadcrumbs,
    NotFound,
    Tabs
    // LoginPopup
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/app";

.container {
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  max-width: 1310px;

  .content {
    margin-top: 30px;
    @media (max-width: 480px) {
      margin-top: 10px;
      max-width: 70%;
    }
  }

  .line {
    border-top: 1px solid #9b9b9b;
    margin-top: 2.4em;
    margin-right: 20px;
  }

  .profile-bottom {
    padding-bottom: 2.2em;
  }

  .sideBar {
    padding: 0 0 0 2.5em;
    @media (max-width: 991px) {
      padding: 0 0 0 1.1em;
    }
    @media (max-width: 768px) {
      padding: 0 0 0 1.1em;
    }
    @media (max-width: 639px) {
      margin-left: 15px;
      margin-right: 15px;
      padding: 0 0 0 0;
    }

    .active {
      color: #ff4242 !important;
    }
  }
}
</style>
