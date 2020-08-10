<template>
  <div class="login-popup">
    <div class="block-login">
			<check-email />
    </div>
  </div>
</template>

<script>
import CheckEmail from "~/components/login/checkEmail";
export default {
	middleware: "notAuth",
	components: {
    CheckEmail
  }
};
</script>
