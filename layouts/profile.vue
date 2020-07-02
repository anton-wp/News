<template>
  <div class="profile-layout">
    <custom-svg />
    <app-header />
    <hot-news />
    <breadcrumbs />
    <big-header />
		<get-profile />
    <div class="container">
      <div class="row" >
        <div class="col-12 profile-bottom">
          <div class="line" />
        </div>
        <div class="col-auto sideBar">
          <tabs />
        </div>
        <div class="col content">
          <nuxt />
          <!-- <not-found /> -->
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
import getProfile from '~/components/profile/getProfile'

export default {
	name: 'profile',
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    HotNews,
    BigHeader,
    Breadcrumbs,
		NotFound,
		getProfile,
    Tabs
	},
}
</script>
