<template>
  <div class="login-popup">
    <div class="block-login" style="padding: 2.4rem 3rem 0em;">
      <div class="col-12">
        <h3 class="form-title">Log In</h3>
      </div>
      <div class="input-block">
        <label class="label-input">
          <input
            placeholder="Email"
            autocomplete="off"
            class="form-input"
            type="text"
            v-model.trim="$v.email.$model"
          />
          <span
            v-if="errorNotif && !$v.email.required"
            class="primary-error"
          >Email address is required</span>
          <span v-if="errorNotif && !$v.email.email" class="primary-error">invalid email</span>
        </label>
      </div>
      <div class="input-block">
        <button class="primary-form-button" form="authorizationForm" @click="click">Reset password</button>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
export default {
  middleware: "notAuth",
  data() {
    return {
      email: "",
      errorNotif: false
    };
  },
  methods: {
    click() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorNotif = true;
      } else {
				this.resetPassword()
					.then(res => {
						this.$router.push({ path: "/resetting/check-email" });
					})
					.cath
      }
    },
    resetPassword() {
      this.$axios.$post("/api/auth/reset-password/", { email: this.email});
    }
  },
  validations: {
    email: {
      required,
      email
    }
  }
};
</script>
