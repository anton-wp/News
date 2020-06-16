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
  }

}
</script>

<style lang="scss">

</style>
