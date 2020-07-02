<template>
  <div>
    <div v-if="loginModal.type !== 'forgotPassword'" style="padding: 2.4rem 3rem 0em;">
      <div class="container in-form-container">
        <div class="row">
          <div class="col-12">
            <h3 v-if="loginModal.type === 'logIn'" class="form-title">Log In to Verdict</h3>
            <h3 v-if="loginModal.type === 'signUp'" class="form-title">Sign Up for Verdict</h3>
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
            <form
              v-if="loginModal.type === 'logIn'"
              @submit.prevent="logIn"
              id="authorizationForm"
              class="primary-form"
            >
              <div></div>
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
              <div class="forgot-button">
                <button type="button" @click="changeLoginPopup('forgotPassword')">Forgot Password?</button>
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
              v-if="loginModal.type === 'signUp'"
              id="registrationForm"
              class="primary-form"
              @submit.prevent="signUp"
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
                        v-model.trim="$v.firstName.$model"
                      />
                      <span
                        v-if="errorNotif && !$v.firstName.required"
                        class="primary-error"
                      >First Name is required</span>
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
                        v-model.trim="$v.lastName.$model"
                      />
                      <span
                        v-if="errorNotif && !$v.lastName.required"
                        class="primary-error"
                      >Last Name is required</span>
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
                <button class="primary-form-button" form="registrationForm" type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="loginModal.type !== 'forgotPassword'" class="trigger-form">
      <span v-if="loginModal.type === 'logIn'">
        Don't have an account?
        <a @click="changeLoginPopup('signUp')">Sign Up</a>.
      </span>
      <span v-if="loginModal.type === 'signUp'">
        Already have an account?
        <a @click="changeLoginPopup('logIn')">Log In</a>.
      </span>
    </div>
    <div v-if="loginModal.type === 'forgotPassword'" class="forgot-password">
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
</template>

<script>
import { sameAs, email, required } from "vuelidate/lib/validators";
import { mapState } from "vuex";
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorNotif: false
    };
  },
  // props: {
  //   type: String
  // },
  computed: {
    ...mapState(["loginModal"])
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    },
    confirmPassword: {
      required,
      sameAsPassword: sameAs("password")
    },
    firstName: {
      required
    },
    lastName: {
      required
    }
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
    signUp() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorNotif = true;
      } else {
        this.errorNotif = false;
        let formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          firstName: this.firstName,
          lastName: this.lastName
        };
        this.loading = true;
        this.registration(formData);
      }
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
    registration(formData) {
      this.errorMessage = Object;
      this.$http
        .post(`/api/auth/registration/`, formData)
        .then(resp => {
          this.loading = false;
          this.login({ email: this.email, password: this.password });
          // this.closeLoginPopup();
        })
        .catch(error => (this.errorMessage = error.response.data.properties));
    },

    closeLoginPopup() {
      let data = {
        open: false,
        type: ""
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    },
    changeLoginPopup(type) {
      let data = {
        open: true,
        type: type
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
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

