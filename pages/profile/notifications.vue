<template>
  <div class="container">
    <div class="row">
      <notification-block  class="col-12" />
    </div>
  </div>
</template>

<script>
import NotificationBlock from '~/components/profile/block-notification'

export default {
  layout: 'profile',
	middleware: "auth",
  components: {
    NotificationBlock
	},
	created () {
		this.getNotifications()
	},
	methods: {
		getNotifications() {
			this.$axios.$get('/api/profile/notifications')
				.then(res => {
					console.log(res)
				})
				.catch(error => {
					console.log(error)
				})
		}
	}

}
</script>

<style lang="scss">

</style>
