<template>
  <div class="login-popup">
    <div class="block-login" style="padding: 2.4rem 3rem 0em;">
      <div class="col-12">
        <h3 class="form-title">Reset</h3>
      </div>
      <span v-if="errorMessage.password" class="primary-error">{{errorMessage.password}}</span>
      <div class="input-block">
        <label class="label-input">
          <input
            placeholder="Password"
            autocomplete="off"
            class="form-input"
            type="password"
            v-model.trim="$v.password.$model"
          />
          <span
            v-if="errorNotif && !$v.password.required"
            class="primary-error"
          >Password is required</span>
        </label>
      </div>
      <div class="input-block">
        <label class="label-input">
          <input
            placeholder="Confirm Password"
            autocomplete="off"
            class="form-input"
            type="password"
            v-model.trim="$v.confirmPassword.$model"
          />
          <span
            v-if="errorNotif && !$v.confirmPassword.required"
            class="primary-error"
          >Confirm Password is required</span>
          <span
            v-if="errorNotif && !$v.confirmPassword.sameAsPassword"
            class="primary-error"
          >The entered passwords don’t match.</span>
        </label>
      </div>
      <div class="input-block">
        <button
          class="primary-form-button"
          form="authorizationForm"
          @click="click"
          :disabled="loading"
        >{{loading ? 'Loading' : 'Update password'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { sameAs, required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  middleware: "notAuth",
  data() {
    return {
      email: "",
      errorNotif: false,
      loading: false,
      password: "",
      confirmPassword: "",
      errorMessage: Object
    };
  },
  validations: {
    password: {
      required
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    click() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorNotif = true;
      } else {
        console.log(this.$route);
        let data = {
          token: this.$route.query.i,
          newPassword: this.password,
          newConfirmPassword: this.confirmPassword
        };
        console.log(data);
        this.confirmResetPassword(data);
      }
    },
    confirmResetPassword(formData) {
      this.errorMessage = Object;
      axios
        .post(`/api/auth/confirm-reset-password/`, formData)
        .then(res => {
          this.loading = false;
          // this.$router.push({ path: "/" });
          // this.$toasted.show(
          //   "You will be sent a message to confirm your email."
          // );
        })
        .catch(error => {
          console.log(error.response.data);
          if(error.response.data.message) this.$toasted.error(error.response.data.message);
          this.loading = false;
          this.errorMessage = error.response.data.properties;
        });
    }
  }
};
</script>

