<template>
  <div class="login-popup">
    <div class="form-wrapper">
      <div class="form">
        <div class="close-form" @click="closeLoginPopup">×</div>
        <div v-if="type !== 'forgotPassword'" style="padding: 2.4rem 3rem 0em;">
          <div class="container in-form-container">
            <div class="row">
              <div class="col-12">
                <h3 v-if="type === 'logIn'" class="form-title">Log In to Verdict</h3>
                <h3 v-if="type === 'signUp'" class="form-title">Sign Up for Verdict</h3>
              </div>
            </div>
            <div class="row buttons-wrapper">
              <social />
            </div>
            <div class="row">
              <div class="col-12">
                <h6 class="form-sub-title">Or by email</h6>
              </div>
              <div class="col-12">
                <form
                  v-if="type === 'logIn'"
                  @submit.prevent="checkForm"
                  id="authorizationForm"
                  class="primary-form"
                >
                  <div>
                    <p style="color: red; text-align: center;">{{ errorMessage }}</p>
                  </div>
                  <div class="input-block">
                    <label class="label-input">
                      <input
                        placeholder="Email"
                        autocomplete="off"
                        class="form-input"
                        type="text"
                        v-model="email"
                      />
                      <span class="primary-error">{{errors.email}}</span>
                    </label>
                  </div>
                  <div class="input-block">
                    <label class="label-input">
                      <input
                        placeholder="Password"
                        autocomplete="off"
                        class="form-input"
                        type="password"
                        v-model="password"
                      />
                      <span class="primary-error">{{errors.password}}</span>
                    </label>
                  </div>
                  <div class="forgot-button">
                    <button
                      type="button"
                      @click="changeLoginPopup('forgotPassword')"
                    >Forgot Password?</button>
                  </div>
                  <div class="terms">
                    By proceeding, you agree to Verdict's
                    <nuxt-link to="/terms-of-service">
                      <span @click="closeLoginPopup">Terms of Service</span>
                    </nuxt-link>&
                    <nuxt-link to="/privacy-policy">
                      <span @click="closeLoginPopup">Privacy Policy</span>
                    </nuxt-link>
                  </div>
                  <div class="input-block">
                    <button
                      class="primary-form-button"
                      form="authorizationForm"
                      type="submit"
                    >{{loading ? 'Loading' : 'Log In'}}</button>
                  </div>
                </form>
                <form
                  v-if="type === 'signUp'"
                  id="registrationForm"
                  class="primary-form"
                  @submit.prevent="checkForm"
                >
                  <div class="row">
                    <div class="col-12 col-lg-6">
                      <div class="input-block">
                        <label class="label-input">
                          <input
                            placeholder="First Name"
                            autocomplete="off"
                            class="form-input"
                            type="text"
                            v-model="firstName"
                          />
                          <span class="primary-error">getErrorMessageEmail</span>
                        </label>
                      </div>
                    </div>
                    <div class="col-12 col-lg-6">
                      <div class="input-block">
                        <label class="label-input">
                          <input
                            placeholder="Last Name"
                            autocomplete="off"
                            class="form-input"
                            type="text"
                            v-model="lastName"
                          />
                          <span class="primary-error">getErrorMessageEmail</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="input-block">
                    <label class="label-input">
                      <input
                        placeholder="Email"
                        autocomplete="off"
                        class="form-input"
                        type="text"
                        v-model="email"
                      />
                      <span class="primary-error">getErrorMessageEmail</span>
                    </label>
                  </div>
                  <div class="input-block">
                    <label class="label-input">
                      <input
                        placeholder="Password"
                        autocomplete="off"
                        class="form-input"
                        type="password"
                        v-model="password"
                      />
                      <span class="primary-error">getErrorMessagePassword</span>
                    </label>
                  </div>
                  <div class="input-block">
                    <label class="label-input">
                      <input
                        placeholder="Confirm Password"
                        autocomplete="off"
                        class="form-input"
                        type="password"
                        v-model="confirmPassword"
                      />
                      <span class="primary-error">getErrorMessagePasswordConfirm</span>
                    </label>
                  </div>
                  <!-- <div class="forgot-button">
                <button>Forgot Password?</button>
                  </div>-->
                  <div class="terms">
                    By checking this box, you confirm that you have read, understand and agree with
                    Verdict's
                    <nuxt-link to="/terms-of-service">
                      <span @click="closeLoginPopup">Terms of Service</span>
                    </nuxt-link>&
                    <nuxt-link to="/privacy-policy">
                      <span @click="closeLoginPopup">Privacy Policy</span>
                    </nuxt-link>
                  </div>
                  <div class="input-block">
                    <button
                      class="primary-form-button"
                      form="registrationForm"
                      type="submit"
                    >Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div v-if="type !== 'forgotPassword'" class="trigger-form">
          <span v-if="type === 'logIn'">
            Don't have an account?
            <a @click="changeLoginPopup('signUp')">Sign Up</a>.
          </span>
          <span v-if="type === 'signUp'">
            Already have an account?
            <a @click="changeLoginPopup('logIn')">Log In</a>.
          </span>
        </div>
        <div v-if="type === 'forgotPassword'" class="forgot-password">
          <h3 class="form-title">Forgot your password?</h3>
          <h4>Enter your email address, and we’ll send a link to choose a new password.</h4>
          <div class="input-block">
            <label class="label-input">
              <input placeholder="Email" autocomplete="off" class="form-input" type="text" />
            </label>
          </div>
          <div class="input-block">
            <button class="primary-form-button">RESET PASSWORD</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      errorMessage: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  props: {
    type: String
  },
  methods: {
    checkForm() {
      if (!this.firstName) {
        this.errors.firstName = "First Name is required";
        this.error = true;
      }
      if (!this.lastName) {
        this.errors.lastName = "Last Name is required";
        this.error = true;
      }
      if (!this.email) {
        this.errors.email = "email address is required";
        this.error = true;
      }
      if (!this.password) {
        this.errors.password = "password is required";
        this.error = true;
      }
      if (!this.confirmPassword) {
        this.errors.confirmPassword = "password is required";
        this.error = true;
      }
      let formData = {
        email: this.email,
        password: this.password
      };
      this.loading = true;
      this.login(formData);
    },

    login(formData) {
      this.$auth
        .loginWith("local", {
          data: formData
        })
        .then(resp => {
          this.loading = false;

          this.closeLoginPopup();
        });
    },

    closeLoginPopup() {
      this.$emit("closeLoginPopup");
    },
    changeLoginPopup(type) {
      this.$emit("changeLoginPopup", type);
      this.clearForm();
    },
    clearForm() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
    }
  }
};
</script>
