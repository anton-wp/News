<template>
  <div>
    <div class="primary-form">
      <div class="container account px-0">
        <div class="row">
          <div class="col-12 blockTitle">
            <h4 class="title">Account</h4>
          </div>
          <div class="col-12 email">
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Email</h5>
              <input
                class="col-sm-5 col-xl-3 email"
                type="text"
                v-model="email"
                placeholder="Email"
              />
              <label class="col-6 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                  <div class="active-radio" v-if="emailType === '0'" />
                </span>
                <input type="radio" class="radioEmail" id="emailType" value="0" v-model="emailType" />
                public
              </label>
              <label class="col-6 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                  <div class="active-radio" v-if="emailType === '1'" />
                </span>
                <input type="radio" class="radioEmail" id="emailType" value="1" v-model="emailType" />
                private
              </label>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Phone</h5>
              <div class="col-12 col-sm-auto col-xl phone">
                <div class="container" style="padding: 0;">
                  <div class="col-12" style="display: flex; padding: 0; flex-wrap: wrap;">
                    <div class="position-relative">
                      <div class="disabled" v-if="verified" />
                      <MazPhoneNumberInput
                        v-model="yourNumber"
                        @update="results = $event"
                        :default-country-code="countryCode"
                        style="max-width: 294px;"
                      />
                    </div>
                    <button
                      class="col-12 text-left button-change order-sm-3"
                      @click="changeVerified"
                    >change</button>
                    <button
                      class="verified order-sm-2"
                      :class="verified ? 'active' : 'inactive'"
                      :disabled="verified"
                      @click="openModal"
                    >
                      <svg width="12" height="15">
                        <use xlink:href="#shield" />
                      </svg>
                      <span v-if="verified">Verified</span>
                      <span v-if="!verified">Verify</span>
                    </button>
                  </div>
                </div>
                <!-- (click)="changeVerified()" -->
              </div>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">First Name</h5>
              <input
                class="col-12 col-sm-5 col-xl-3"
                type="text"
                v-model="firstName"
                placeholder="First Name"
              />
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Last Name</h5>
              <input
                class="col-12 col-sm-5 col-xl-3"
                type="text"
                v-model="lastName"
                placeholder="Last Name"
              />
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">About me</h5>
              <textarea
                class="col-12 col-sm-12 col-xl-9"
                type="text"
                v-model="aboutMe"
                placeholder="Tell something about yourself..."
              ></textarea>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Profile visibility</h5>
              <label class="col-6 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                  <div class="active-radio" v-if="profileVisibility === '0'" />
                </span>
                <input type="radio" class="profileVisibility" value="0" v-model="profileVisibility" />
                public
              </label>
              <label class="col-6 col-sm-3 col-lg-2 labelRadio">
                <span class="custom-radio">
                  <div class="active-radio" v-if="profileVisibility === '1'" />
                </span>
                <input type="radio" class="profileVisibility" value="1" v-model="profileVisibility" />
                private
              </label>
            </div>
            <div class="row container-fluid string">
              <h5 class="col-12 col-xl-3 text-xl-right">Password</h5>
              <div class="col-12 col-sm-12 col-xl-9 block-change-password">
                <button
                  class="col-12 text-left button-change"
                  v-if="!changePassword"
                  @click="visibleChangePasswordBlock"
                >change password</button>
                <div style="margin-top: 25px;" class="row mx-0" v-if="changePassword">
                  <input
                    class="col-12 col-xl-3"
                    type="password"
                    placeholder="old password"
                    v-model="password"
                  />
                  <input
                    class="col-12 col-xl-3"
                    type="password"
                    placeholder="new password"
                    v-model="newPassword"
                  />
                  <input
                    class="col-12 col-xl-3"
                    type="password"
                    placeholder="repeat new password"
                    v-model="repeatNewPassword"
                  />
                  <div class="block-button text-right ml-auto">
                    <button class="cancel" @click="visibleChangePasswordBlock">cancel</button>
                    <button class="update" @click="updatePassword">update profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="container px-0">
        <div class="row">
          <div class="col-12 blockTitle">
            <h4 class="title">Social profiles</h4>
          </div>
          <div class="row container-fluid string">
            <h5 class="col-12 col-xl-3 text-xl-right pl-3">Linked accounts</h5>
            <div class="col-12 col-sm-12 col-xl-9">
              <a
                class="social"
                :class="social"
                v-for="social in socialProfilesAccount"
                :key="social"
              >
                <svg width="21" height="21">
                  <use v-bind:xlink:href="`#${social}`" />
                </svg>
                <p>connect {{social}}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <div
          class="row container-fluid string"
          v-for="profile in socialProfiles"
          :key="profile"
          style="text-transform: capitalize;"
        >
          <h5 class="col-12 col-xl-3 text-xl-right">{{profile}} Profile</h5>
          <input
            class="input-social col-xl-3"
            type="text"
            v-bind:placeholder="`https://${profile}.com/profile`"
          />
        </div>
      </div>
      <hr />
      <div class="container px-0">
        <div class="row container-fluid string followingCategories px-0">
          <h4 class="col-12 col-xl-3 title-setting">Following Categories</h4>
          <div class="col-12 col-xl-9 px-0">
            <label
              class="col-sm-4 col-md-4"
              v-for="category in followingCategories"
              :key="category.id"
            >
              <div class="categoryCheckbox">
                <svg
                  width="10"
                  height="10"
                  v-if="followingCategoriesActive.filter(follow => follow === category.id).length > 0"
                >
                  <use xlink:href="#checkbox" />
                </svg>
              </div>
              <input
                type="checkbox"
                id="category.id"
                :value="category.id"
                v-model="followingCategoriesActive"
              />
              <div class="categoryTitle">{{category.name}}</div>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div class="container px-0">
        <div class="row">
          <div class="col-12 blockTitle">
            <h4 class="title">Notification settings</h4>
          </div>
          <div class="row container-fluid string">
            <h5 class="col-12 col-xl-3 text-xl-right pl-3">Send me notifications when</h5>
            <div class="col-12 col-sm-12 col-xl-9">
              <div class="row ml-0" v-for="string in notificationSettings" :key="string.id">
                <!-- <div class="col-12" > -->
                <h6 class="col-12 col-lg-5 col-xl-4 px-0">{{string.title}}</h6>
                <div
                  class="col-12 col-lg-7 col-xl-8 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center px-0"
                >
                  <label class="labelRadio" v-for="(setting, key, index) in settings" :key="index">
                    <span class="custom-radio">
                      <div class="active-radio" v-if="setting === string.settings" />
                    </span>
                    <input
                      type="radio"
                      class="radioEmail"
                      :value="setting"
                      v-model="string.settings"
                    />
                    {{setting}}
                  </label>
                </div>
              </div>
            </div>
            <h5 class="col-12 col-xl-3 text-xl-right pl-3" v-if="$store.state.auth.loggedIn && ['super-admin', 'editor'].includes($store.state.auth.user.group.name)">Send Admin notifications when</h5>
            <div class="col-12 col-sm-12 col-xl-9" v-if="$store.state.auth.loggedIn && ['super-admin', 'editor'].includes($store.state.auth.user.group.name)">
              <div class="row ml-0">
                <h6 class="col-12 col-lg-5 col-xl-4 px-0">someone adds new post</h6>
                <div
                  class="col-12 col-lg-7 col-xl-8 d-flex flex-column flex-sm-row justify-content-end align-items-sm-center px-0"
                >
                  <div class="d-flex justify-conten-space-between" >
                    <label class="labelRadio radioBottom">
                      <span class="custom-radio">
                        <div class="active-radio" v-if="admin_email_new_post === '0'" />
                      </span>
                      <input
                        type="radio"
                        class="radioEmail"
                        value="0"
                        v-model="admin_email_new_post"
                      />
                      display
                    </label>
                    <label class="labelRadio radioBottom">
                      <span class="custom-radio">
                        <div class="active-radio" v-if="admin_email_new_post === '1'" />
                      </span>
                      <input
                        type="radio"
                        class="radioEmail"
                        value="1"
                        v-model="admin_email_new_post"
                      />
                      hide
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-button">
          <!-- (click)='update()' -->
          <button class="update mr-15" @click="updateProfile">update profile</button>
        </div>
      </div>
    </div>
    <modal-window v-if="activeModal && typeModal === 'number check'" @closeModal="closeModal">
      <div class="form-header">
        <h4>Send Confirmation Code</h4>
        <p>Is this phone number correct?</p>
        <h4>{{results.formattedNumber}}</h4>
      </div>
      <div class="form-wrap">

        <span class="yes" @click="openModalCode">Yes</span>

        <span class="no" @click="closeModal">No</span>
      </div>
    </modal-window>
    <modal-window v-if="activeModal && typeModal === 'code modal'" @closeModal="closeModal">
      <div class="form-header">
        <h4>Enter Confirmation Code</h4>
        <input placeholder="Enter Code" @keyup.enter="phoneVerifyCode" v-model="code" />
      </div>
      <div class="form-wrap-confirm">
        <span class="confirm" @click="phoneVerifyCode">CONFIRM</span>
      </div>
    </modal-window>
  </div>
</template>

<script>
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import MazPhoneNumberInput from "vue-phone-number-input";
import ModalWindow from "~/components/universal-components/modalWindow";

export default {
  layout: "profile",
  middleware: "auth",
  components: {
    MazPhoneNumberInput,
    ModalWindow,
  },
  data() {
    return {
      yourNumber: "034985309",
      results: null,
      countryCode: "US",

      typeModal: "number check",
      activeModal: false,

      code: "",
      codeError: "",

      repeatNewPassword: "",
      newPassword: "",
      password: "",

      email: "",
      emailType: "",
      verified: "",
      firstName: "",
      lastName: "",
      aboutMe: "",
      profileVisibility: "",
      admin_email_new_post: "",

      changePassword: false,
      socialProfilesAccount: ["facebook", "google", "twitter", "linkedin"],
      socialProfiles: ["facebook", "twitter", "linkedin"],
      followingCategories: [],
      followingCategoriesActive: [],
      profile: Object,
      settings: ["immediately", "daily", "weekly", "never"],
      notificationSettings: {
        email_post_published: {
          title: "my post is published",
          settings: "",
        },
        email_post_replies: {
          title: "someone replies to my verdict/comment/reply",
          settings: "",
        },
        email_user_follow: {
          title: "someone follows me",
          settings: "",
        },
        email_recive_point: {
          title: "my post is published",
          settings: "",
        },
        email_verdict_replies: {
          title: "gained V-rep",
          settings: "",
        },
      },
    };
  },
  created() {
    this.getFollowingCategories();
    this.getProfileFull();
  },
  methods: {
    openModal() {
      if (this.results.isValid) {
        this.activeModal = true;
      }
    },
    closeModal() {
      this.activeModal = false;
    },
    openModalCode() {
      this.phoneVerify();
    },
    changeVerified() {
      this.verified = false;
    },
    updateProfile() {
      let settings = {
        bio: this.aboutMe,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        categories: this.followingCategoriesActive,
        settings: {
          admin_email_new_post: this.admin_email_new_post,
          email_post_published: this.notificationSettings.email_post_published
            .settings,
          email_post_replies: this.notificationSettings.email_post_replies
            .settings,
          email_recive_point: this.notificationSettings.email_recive_point
            .settings,
          email_user_follow: this.notificationSettings.email_user_follow
            .settings,
          email_verdict_replies: this.notificationSettings.email_verdict_replies
            .settings,
          email_visibility: this.emailType,
          profile_visibility: this.profileVisibility,
        },
      };
      this.$axios
        .$patch(`/api/profile`, settings)
        .then((res) => {
          this.$toasted.show(res.message);
        })
        .catch((error) => console.error(error));
    },
    visibleChangePasswordBlock() {
			this.changePassword = !this.changePassword;
			this.password = '';
			this.newPassword = '';
			this.repeatNewPassword = '';
    },
    getFollowingCategories() {
      this.$axios
        .$get(`/api/categories/list`)
        .then((res) => {
          this.followingCategories = res.data;
        })
        .catch((error) => console.error(error));
    },
    phoneVerify() {
      let phone = {
        country: this.results.countryCallingCode,
        phone: this.results.nationalNumber,
      };
      this.$axios
        .$post(`/api/phone/verify`, phone)
        .then((res) => {
          this.$toasted.show(res.message);
          this.typeModal = "code modal";
        })
        .catch((error) => console.error(error));
    },
    phoneVerifyCode() {
      let phone = {
        code: this.code,
        country: this.results.countryCallingCode,
        countryCodeLetters: this.results.countryCode,
        phone: this.results.nationalNumber,
      };
      this.$axios
        .$post(`/api/phone/verify-code`, phone)
        .then((res) => {
          if (res.success) {
            this.$toasted.show(res.message);
            this.typeModal = "number check";
            this.activeModal = false;
            this.verified = true;
          } else {
            this.$toasted.error(res.message);
          }
        })
        .catch((error) => console.error(error));
    },
    getProfileFull() {
      this.$axios
        .$get(`/api/profile/full`)
        .then((res) => {
          this.OutputSettings(res.data);
        })
        .catch((error) => console.error(error));
    },
    updatePassword() {
      let params = {
        newConfirmPassword: this.repeatNewPassword,
        newPassword: this.newPassword,
        oldPassword: this.password,
      };
      this.$axios
        .post(`/api/auth/change-password`, params)
        .then((res) => {
          this.$toasted.show(res.data.message);
        })
        .catch((error) => this.$toasted.error(error.response.message));
    },
    OutputSettings(data) {
      this.email = data.email;
      (this.emailType = data.settings.email_visibility),
        (this.verified = data.verified),
        (this.firstName = data.firstName),
        (this.lastName = data.lastName),
        (this.aboutMe = data.bio),
        (this.profileVisibility = data.settings.profile_visibility),
        (this.admin_email_new_post = data.settings.admin_email_new_post);
      this.notificationSettings.email_post_published.settings =
        data.settings.email_post_published;
      this.notificationSettings.email_post_replies.settings =
        data.settings.email_post_replies;
      this.notificationSettings.email_user_follow.settings =
        data.settings.email_user_follow;
      this.notificationSettings.email_recive_point.settings =
        data.settings.email_recive_point;
      this.notificationSettings.email_verdict_replies.settings =
        data.settings.email_verdict_replies;

      this.followingCategoriesActive = data.categories;

      this.yourNumber = data.phone;
      this.countryCode = data.countryCodeLetters;
    },
  },
};
</script>

<style lang="scss" scoped>
.primary-form {
  font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;

  .text-xl-right {
    @media (min-width: 1200px) {
      text-align: right;
    }
  }
  .mb-2 {
    p {
      font-family: Lato;
    }
  }
  .labelRadio {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
    }
  }
  .custom-radio {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;

    .active-radio {
      width: 8px;
      height: 8px;
      background-color: black;
      border-radius: 5px;
    }
  }
  .categoryCheckbox {
    width: 16px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    border: 1px solid #0a0a0a;
    border-radius: 5px;

    svg {
      display: block;
    }
  }

  .input-social {
    width: 205px;
  }
  .categoryTitle {
    display: inline-block;
    vertical-align: middle;
  }
  .title-settings {
    margin-top: 15px;
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    padding: 0;
    color: inherit;
    white-space: normal;
    font-weight: 600;
    font-size: 1.2em;
    letter-spacing: 0.5px;
    line-height: 1;
    margin-bottom: 0.8em;
  }
  .followingCategories {
    input {
      display: none;
    }
    label {
      font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
        sans-serif;
      cursor: pointer;
      margin-bottom: 1.05em;
      font-size: 0.9em;
      font-weight: 700;
      text-transform: uppercase;
      fa-icon {
        margin-right: 5px;
        font-size: 1.1em;
      }
    }
  }
  .string {
    margin-bottom: 15px;

    .social {
      display: flex;
      align-items: center;
      width: 220px;
      height: 40px;
      background-color: #8d8d8d;
      margin-right: 10px;
      margin-bottom: 23px;
      padding: 0.5em 1.4em 0.5em 0.6em;
      cursor: pointer;
      transition: background-color 0.25s;
      p {
        font-weight: 700;
        font-size: 0.9rem;
        color: #fff;
        margin-bottom: 0px;
        margin-left: auto;
      }
      .right {
        float: right;
      }
      svg {
        fill: #fff;
      }
    }
    .facebook:hover {
      background-color: #2d4373;
    }
    .google:hover {
      background-color: #c63224;
    }
    .twitter:hover {
      background-color: #2795e9;
    }
    .linkedin:hover {
      background-color: #0a5579;
    }
  }
  .phone {
    padding: 0px;
    display: flex;
    // ngx-intl-tel-input {
    //   float: left;
    //   margin-right: 32px;
    // }
    .verified {
      cursor: pointer;
      width: 90px;
      height: 23px;
      border: 1px solid;
      border-radius: 3px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 19px;
      margin-left: 20px;
      @media (max-width: 576px) {
        margin: 0;
      }

      &.active {
        border-color: #00a167;
        background-color: #4cbd39;
        color: white;
      }
      &.inactive {
        border-color: #ff4242;
        background-color: white;
        color: #ff4242;
        &:hover {
          color: white;
          background-color: #bc2d2d;
        }
      }
      svg {
        width: 15px;
        height: 15px;
        color: inherit;
      }
      span {
        line-height: 1;
        text-align: center;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        user-select: none;
        font-size: 0.6rem;
        color: inherit;
        box-sizing: inherit;
        vertical-align: middle;
      }
    }
  }
  .disabled {
    position: absolute;
    z-index: 2;
    max-width: 292px;
    width: 100%;
    height: 40px;
    opacity: 0.1;
    background-color: black;
  }
  h4 {
    display: inline-block;
    font-size: 1.2em;
    font-weight: 600;
  }
  h5 {
    padding-left: 0;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
  }
  h6 {
    margin-bottom: 1rem;
    font-size: 100%;
    line-height: 1.5;
    box-sizing: inherit;
    font-weight: 700;
    color: #8f8f8f;
    padding-right: 2em;
  }
  input,
  textarea {
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: 0.65em;
    line-height: 1.25;
    &:focus {
      outline: #8d8d8d auto 2px;
      outline-color: #8d8d8d;
      outline-style: auto;
      outline-width: 2px;
    }
  }
  .radioEmail,
  .profileVisibility {
    display: none;
  }
  .button-change {
    cursor: pointer;
    text-decoration: underline;
    border: 0;
    border-radius: 0;
    background: transparent;
    line-height: 1;
    padding: 0;
    margin-bottom: 8px;
  }
  .block-change-password {
    padding-left: 0px;
    input {
      margin-right: 16px;
      margin-bottom: 0.8em;
    }
    .block-button {
      button {
        user-select: none;
        padding: 0.85em 1.4em 0.8em 1.4em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #fefefe;
        border: none;
        margin-left: 5px;
        transition: background-color 0.25s;
        font-size: 0.9rem;
      }
      .cancel {
        background-color: #8d8d8d;
        &:hover {
          background-color: #606060;
        }
      }
      .update {
        background-color: #ff4242;
        &:hover {
          background-color: #bc2d2d;
        }
      }
    }
  }
  label {
    cursor: pointer;
  }
  .bottom-button {
    margin-top: 2.5em;
    margin-bottom: 2em;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button {
      user-select: none;
      padding: 0.85em 1.4em 0.8em;
      line-height: 17.4px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #fefefe;
      border: none;
      margin-left: 5px;
      transition: background-color 0.25s;
      font-size: 0.9rem;
    }
    .update {
      background-color: #ff4242;
      &:hover {
        background-color: #bc2d2d;
      }
    }
  }
  .radioBottom {
    margin-right: 30px;
  }
  hr {
    margin: 2.45em 0 2.7em;
    border-top: 1px solid #e1e1e1;
    border-bottom: none;
    color: #fff;
    border-left: none;
    border-right: none;
    padding: 1px;
  }
}

.form-wrap {
  display: flex;
  justify-content: space-between;
  .merge {
    font-size: 14px !important;
  }
  .yes {
    color: #ff4242;
    border-color: #ff4242;
    margin-left: 50px;
    &:hover {
      border-color: #a10000;
      color: #fff;
      background-color: #bc2d2d;
    }
  }
  .no {
    color: #8d8d8d;
    border-color: #8d8d8d;
    margin-right: 50px;
    &:hover {
      border-color: #474747;
      color: #fff;
      background-color: #606060;
    }
  }
}
</style>
