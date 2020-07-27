<template>
  <div class="p-3 px-sm-5 pt-sm-9">
    <div class="container in-form-container">
      <div class="row">
        <div class="col-12">
          <h3 class="form-title">Sign Up for Verdict</h3>
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
          <span v-if="errorMessage.checkbox" class="primary-error">{{errorMessage.checkbox}}</span>
        </div>
        <div class="col-12">
          <form id="registrationForm" class="primary-form" @submit.prevent="signUp">
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
            <div class="terms">
              <input type="checkbox" :value="true" v-model="checkbox" />
              By checking this box, you confirm that you have read, understand and agree with
              Verdict's
              <nuxt-link to="/terms-of-service">Terms of Service</nuxt-link>&
              <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
            </div>
            <div class="input-block">
              <button
                class="primary-form-button"
                form="registrationForm"
                type="submit"
                :disabled="loading"
              >{{loading ? 'Loading' : 'Sign Up'}}</button>
            </div>
          </form>
        </div>
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
import axios from "axios";
import { log } from "util";
import { loadavg } from "os";

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
      errorNotif: false,
      checkbox: null
    };
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
  created() {
    this.$store.commit("SET_BREADCRUMBS");
  },
  methods: {
    signUp() {
      if (this.checkbox) {
        this.errorMessage.checkbox = null;
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
      } else {
        this.errorMessage.checkbox =
          "You must agree to Verdict's Terms of Service & Privacy Policy to create an account";
      }
    },
    registration(formData) {
      this.errorMessage = Object;
      axios
        .post(`/api/auth/registration/`, formData)
        .then(res => {
          this.loading = false;
          this.$router.push({ path: "/" });
          this.$toasted.show(
            "You will be sent a message to confirm your email."
          );
        })
        .catch(error => {
          this.loading = false;
          this.errorMessage = error.response.data.properties;
        });
    }
  }
};
</script>

