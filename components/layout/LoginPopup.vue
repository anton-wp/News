<template>
  <div class="login-popup">
    <div class="form-wrapper">
      <div class="form">
        <div class="close-form" @click="closeLoginPopup">×</div>
				<login />
      </div>
    </div>
  </div>
</template>

<script>
import Login from "~/components/login/Login";
export default {
  components: {
    Login
  },
  methods: {
    closeLoginPopup() {
      let data = {
        open: false,
        type: ""
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    }
  }
};
</script>
