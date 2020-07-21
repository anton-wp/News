<template>
  <div class="login-popup">
    <div class="block-login">
			<login />
      <div class="trigger-form">
        <span>
          Don't have an account?
          <a @click="changeLoginPage">Sign Up</a>.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Login from '~/components/Login/login'

export default {
  middleware: "notAuth",
  components: {
    Login
  },
  methods: {
    changeLoginPage(type) {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>


