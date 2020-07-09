<template>
	<div>
		<following :type="'profile'" :typePage="'subscribers'" />
	</div>
</template>

<script>
import Following from '~/components/profile/following'

export default {
  layout: "profile",
  middleware: "auth",
  components: {
    Following
  }
};
</script>
