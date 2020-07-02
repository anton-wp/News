<template>
  <div class="login-popup">
    <div class="block-login">
      <div style="padding: 2.4rem 3rem 0em;">
        <div class="container in-form-container">
          <div class="row">
            <div class="col-12">
              <h3 class="form-title">Log In to Verdict</h3>
            </div>
          </div>
          <div class="row buttons-wrapper">
            <social />
          </div>
          <div class="row">
            <div class="col-12">
              <h6 class="form-sub-title">Or by email</h6>
              <span v-if="errorMessage.email" class="primary-error">{{errorMessage.email}}</span>
              <span v-if="errorMessage.password" class="primary-error">{{errorMessage.password}}</span>
            </div>
            <div class="col-12">
              <form @submit.prevent="logIn" id="authorizationForm" class="primary-form">
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
                <div class="terms-forgot">
                  <nuxt-link class="forgot-link" to="/resetting/request">Forgot Password?</nuxt-link>
                </div>
                <div class="terms">
                  By proceeding, you agree to Verdict's
                  <nuxt-link to="/terms-of-service">Terms of Service</nuxt-link>&
                  <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
                </div>
                <div class="input-block">
                  <button
                    class="primary-form-button"
                    form="authorizationForm"
                    type="submit"
                  >{{loading ? 'Loading' : 'Log In'}}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
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
import { email, required } from "vuelidate/lib/validators";
import Social from "~/components/login/social-button.vue";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default {
  components: {
    Social
  },
  data() {
    return {
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      loading: false,
      error: false,
      errorMessage: Object,
      email: "",
      password: "",
      errorNotif: false
    };
  },

  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  created() {
    this.$store.commit("SET_BREADCRUMBS");
  },
  methods: {
    logIn() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorNotif = true;
      }
      if (!this.$v.email.$invalid && !this.$v.password.$invalid) {
        this.errorNotif = false;
        let formData = {
          email: this.email,
          password: this.password
        };
        this.loading = true;
        this.login(formData);
      }
    },
    login(formData) {
      this.$auth
        .loginWith("local", {
          data: formData
        })
        .then(resp => {
          this.loading = false;
        });
    },
    changeLoginPage(type) {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>


