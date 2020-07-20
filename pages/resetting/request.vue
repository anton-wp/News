<template>
	<div class="login-popup">
		<div class="block-login">
			<change-password />
		</div>
	</div>
</template>

<script>
import ChangePassword from '~/components/Login/changePassword'
export default {
	components: {
		ChangePassword
	}
};
</script>
