<template>
  <div class="login-popup">
    <div class="block-login">
			<check-email />
    </div>
  </div>
</template>

<script>
import CheckEmail from "~/components/Login/checkEmail";
export default {
	middleware: "notAuth",
	components: {
    CheckEmail
  }
};
</script>
