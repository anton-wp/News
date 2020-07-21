<template>
  <div class="login-popup">
    <div class="form-wrapper">
      <div>
        <div class="form">
          <div class="close-form" @click="closeLoginPopup">×</div>
          <!-- <login /> -->

          <register v-if="loginModal.type === 'signUp'" />

          <login v-if="loginModal.type === 'logIn'" :type="'modal'" />
          <change-password v-if="loginModal.type === 'forgotPassword'" :type="'modal'" />
          <check-email v-if="loginModal.type === 'CheckEmail'" />

          <div
            v-if="loginModal.type !== 'forgotPassword' && loginModal.type !== 'CheckEmail'"
            class="trigger-form"
          >
            <span v-if="loginModal.type === 'logIn'">
              Don't have an account?
              <a @click="changeLoginPopup('signUp')">Sign Up</a>.
            </span>
            <span v-if="loginModal.type === 'signUp'">
              Already have an account?
              <a @click="changeLoginPopup('logIn')">Log In</a>.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "~/components/Login/register";
import Login from "~/components/Login/login";
import ChangePassword from "~/components/Login/changePassword";
import CheckEmail from "~/components/Login/checkEmail";
import { mapState } from "vuex";

export default {
  components: {
    Login,
    Register,
    ChangePassword,
    CheckEmail
  },
  computed: {
    ...mapState(["loginModal"])
  },
  methods: {
    changeLoginPopup(type) {
      let data = {
        open: false,
        type: type
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
      setTimeout(() => {
        this.$store.commit("TOGGLE__ANIMATION__LOGIN__MODAL", true);
      }, 10);
    },
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
