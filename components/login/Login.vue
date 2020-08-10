<template>
  <div class="p-3 px-sm-5 pt-sm-9">
    <div class="container in-form-container mx-md-0">
      <div class="row">
        <div class="col-12 px-0 px-md-3">
          <h3 class="form-title">Log In to Verdict</h3>
        </div>
      </div>
      <div class="row buttons-wrapper px-0 mx-md-0">
        <social />
      </div>
      <div class="row">
        <div class="col-12 px-0 px-md-3">
          <h6 class="form-sub-title mb-0">Or by email</h6>
          <span v-if="errorMessage.email" class="primary-error">{{errorMessage.email}}</span>
          <span v-if="errorMessage.password" class="primary-error">{{errorMessage.password}}</span>
        </div>
        <div class="col-12 px-0 px-md-3">
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
              <div class="forgot-link" @click="ForgotPassword">Forgot Password?</div>
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
                :disabled="loading"
              >{{loading ? 'Loading' : 'Log In'}}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { email, required } from "vuelidate/lib/validators";
import Social from "~/components/login/social-button.vue";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default {
  components: {
    Social
  },
  data() {
    return {
      res: null,
      errors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      loading: false,
      errorMessage: Object,
      email: "",
      password: "",
      errorNotif: false
    };
	},
	props: {
		type: String
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

  // An email has been sent. It contains a link you must click to reset your password. Note: You can only request a new password once within 2 hours. If you don't get an email check your spam folder or try again.

  mounted() {
    this.$store.commit("SET_BREADCRUMBS");

    if (this.$route.query.i) {
      this.confirmEmail();
    }
  },
  methods: {
		ForgotPassword() {
			if(this.type === "modal"){
				this.$store.commit("UPDATE_LOGIN_POPUP", {open: true, type: 'forgotPassword'});
			}else{
				this.$router.push({ path: "/resetting/request" })
			}
		},
    confirmEmail() {
      axios
        .post(`/api/auth/confirm-email`, { token: this.$route.query.i })
        .then(res => {
          this.$toasted.show(res.data.message);
        })
        .catch(error => {
          this.$toasted.error(error.response.data.message);
        });
    },
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
		closeLoginPopup() {
      let data = {
        open: false,
        type: ""
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    },
    login(formData) {
      this.$auth
        .loginWith("local", {
          data: formData
        })
        .then(resp => {
          this.loading = false;
          this.$store.dispatch("getBookmarks");
          this.$store.dispatch("getSubscriptions");
					this.$store.dispatch("getSubscriptions");
					this.closeLoginPopup();
        })
        .catch(error => {
          this.loading = false;
          this.errorMessage.password = error.response.data.message;
        });
    }
  }
};
</script>
