<template>
  <div id="wrapper-default-avatar" class="wrapper-default-avatar">
    <div
      class="icon-notification d-none d-sm-inline-block"
      v-if="authorization"
      v-click-outside="() => {modalNotification = false}"
    >
      <div class="bell" @click="modalNotification = true">
        <svg width="20" height="20">
          <use xlink:href="#Notifications" />
        </svg>
        <span class="counter-notification">4</span>
      </div>
      <div v-if="modalNotification" class="notification">
        <div class="row blockNotification">
          <block-notification small />
          <!-- <vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>
					<vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>
					<vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>
					<vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>
					<vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>
          <vrd-ppnb class="col-12 block" [small]='true'></vrd-ppnb>-->
          <div class="viewAll">
            <a>view all</a>
          </div>
        </div>
      </div>
    </div>
    <div @mouseover="getPopUp" @mouseleave="hidePopUp" style="position: relative;">
      <img
        v-if="!$store.state.auth.user || !$store.state.auth.user.avatar"
        class="default-avatar"
        src="/image/default-avatar-original.png"
      />
      <img
        v-if="$store.state.auth.user && $store.state.auth.user.avatar"
        class="default-avatar"
        :src="$store.state.auth.user.avatar.small"
      />
      <div class="icon">
        <svg width="12" height="15">
          <use xlink:href="#chevron-down" />
        </svg>
      </div>
      <div id="sign-popup" class="sign-popup" v-if="showPopup">
        <ul class="sign-popup-ul" v-if="!authorization">
          <li class="sign-popup-ul-item" @click="openLoginPopup('logIn')">Log In</li>
          <li class="sign-popup-ul-item" @click="openLoginPopup('signUp')">Sign Up</li>
        </ul>
        <ul class="sign-popup-ul" v-if="authorization">
          <nuxt-link class="sign-popup-ul-item" to="/profile/dashboard/">Profile</nuxt-link>
          <nuxt-link class="sign-popup-ul-item" to="/profile/notifications/">Notification</nuxt-link>
          <nuxt-link class="sign-popup-ul-item" to="/profile/settings/">Settings</nuxt-link>
          <nuxt-link class="sign-popup-ul-item" @click.native="logout" to="/">Logout</nuxt-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookies from "js-cookie";
import BlockNotification from "~/components/profile/block-notification";
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside
  },
  components: {
    BlockNotification
  },
  props: {
    authorization: Boolean
  },
  data() {
    return {
      showPopup: false,
      modalNotification: false
    };
  },
  computed: {
    ...mapState(["loginModal"])
  },
  methods: {
    openLoginPopup(type) {
      let data = {
        open: true,
        type: type
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    },
    getPopUp() {
      setTimeout(() => {
        this.showPopup = true;
      }, 2);
    },
    hidePopUp() {
      setTimeout(() => {
        this.showPopup = false;
      }, 200);
    },
    logout() {
      // console.log(this.$cookies)
			this.$auth.logout("local").then(() => {});

			this.$store.commit('CLEAR_BOOKMARKS')
			this.$store.commit('CLEAR_SUBSCRIPTION')

      // location.reload();
    }
  }
};
</script>

