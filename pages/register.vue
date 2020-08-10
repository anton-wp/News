<template>
  <div class="login-popup">
    <div class="block-login">
      <register />
      <div class="trigger-form">
        <span>
          Already have an account?
          <nuxt-link to="/login">Log In</nuxt-link>.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "~/components/login/register";

export default {
  middleware: "notAuth",
  components: {
    Register
  }
};
</script>
