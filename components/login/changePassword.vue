<template>
  <div class="p-3 px-sm-5 pt-sm-9">
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
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      errorNotif: false
    };
	},
	props: {
		type: String
	},
  methods: {
    click() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.errorNotif = true;
      } else {
        this.resetPassword()
          .then(res => {
						this.$toasted.show(res.data.message);
						if(this.type === 'modal'){
							this.$store.commit("UPDATE_LOGIN_POPUP", {open: true, type: 'CheckEmail'});
						}else {
							this.$router.push({ path: "/resetting/check-email" });
						}
          })
          .catch(error => {
            this.$toasted.error(error.response.data.message);
          });
      }
    },
    resetPassword() {
      return axios.post("/api/auth/reset-password/", { email: this.email });
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
