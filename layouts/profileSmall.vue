<template>
  <div class="profile-small-layout page__default">
    <custom-svg />
    <app-header />
    <small-header />
		<get-profile />
    <div class="container page__content">
      <div class="row" >
        <div class="col-12">
          <div class="line" />
        </div>
        <div class="col-auto sideBar mx-0">
          <tabs />
        </div>
        <div class="col content-profile px-0">
          <nuxt />
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import CustomSvg from '~/components/module/CustomSvg'
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
		smallHeader,
		getProfile,
    Tabs
    // Breadcrumbs
    // LoginPopup
  }
}
</script>
