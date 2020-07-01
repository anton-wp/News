<template>
  <div class="profile-small-layout">
    <custom-svg />
    <app-header />
    <hot-news />
    <!-- <breadcrumbs /> -->
    <small-header />
		<get-profile />
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
import smallHeader from '~/components/profile/smallHeader'
import getProfile from '~/components/profile/getProfile'
import Tabs from '~/components/profile/tabs'
import AppFooter from '~/components/layout/AppFooter'

export default {
	name: 'profileSmall',
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
		smallHeader,
		getProfile,
    Tabs
    // Breadcrumbs
    // LoginPopup
  }
}
</script>
