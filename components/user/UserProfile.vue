<template>
  <div id="wrapper-default-avatar" class="wrapper-default-avatar">
    <div
      class="icon-notification d-none d-sm-inline-block"
      v-if="authorization"
      v-click-outside="modalNotificationClose"
    >
      <div class="bell" @click="modalNotificationOpen">
        <svg width="20" height="20">
          <use xlink:href="#Notifications" />
        </svg>
        <span v-if="notifCount" class="counter-notification">{{ notifCount }}</span>
      </div>
      <div v-if="modalNotification && data.length > 0" class="notification">
        <div class="row blockNotification">
          <block-notification
            v-for="(notif, index) in data"
            :key="index"
            :data="notif"
            @deleteNotif="deleteNotif"
            small
          />
          <div class="viewAll" @click="modalNotificationClose">
            <nuxt-link to="/profile/notifications">view all</nuxt-link>
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
      <transition name="sing-popup">
        <div id="sign-popup" class="sign-popup" v-if="showPopup">
          <ul class="sign-popup-ul" v-if="!authorization">
            <li class="sign-popup-ul-item" @click="openLoginPopup('logIn')">Log In</li>
            <li class="sign-popup-ul-item" @click="openLoginPopup('signUp')">Sign Up</li>
          </ul>
          <ul class="sign-popup-ul" v-if="authorization">
            <nuxt-link class="sign-popup-ul-item d-list-item d-sm-none" to="/add">Add Post</nuxt-link>
            <span class="sign-popup-ul-item" @click="profile">Profile</span>
            <nuxt-link class="sign-popup-ul-item" to="/profile/notifications/">Notification</nuxt-link>
            <nuxt-link class="sign-popup-ul-item" to="/profile/settings/">Settings</nuxt-link>
            <nuxt-link class="sign-popup-ul-item" @click.native="logout" to="/">Logout</nuxt-link>
          </ul>
        </div>
      </transition>
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
    ClickOutside,
  },
  components: {
    BlockNotification,
  },
  props: {
    authorization: Boolean,
  },
  data() {
    return {
      showPopup: false,
      modalNotification: false,
			data: [],
			notifCount: String|Number
    };
  },
  computed: {
    ...mapState(["loginModal", "auth"]),
	},
	created() {
		if(this.auth.loggedIn){
			this.getNotificationsCount()
		}
	},
  methods: {
    deleteNotif(id) {
      this.data = this.data.filter((notif) => notif.id !== id);
    },
    openLoginPopup(type) {
      let data = {
        open: true,
        type: type,
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    },
    modalNotificationOpen() {
      this.modalNotification = true;
    },
    modalNotificationClose() {
      this.modalNotification = false;
    },

    getNotificationsCount() {
      this.$axios
        .$get(`/api/profile/notifications/count`)
        .then((res) => {
					this.notifCount = res.count;
					this.getNotifications();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getNotifications() {
      this.$axios
        .$get(`/api/profile/notifications/header`)
        .then((res) => {
          this.data = res.data;
          this.readNotif();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    readNotif() {
      let ids = [];
      this.data.map((notif) => {
        if (!notif.checked) {
          ids.push(notif.id);
        }
      });
      if (ids.length > 0) {
        this.$axios
          .$post(`/api/profile/notifications/read`, { ids: ids })
          .then((res) => {
            this.data.map((notif) => {
              if (ids.includes(notif.id)) {
                notif.checked = true;
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
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
    profile() {
      if (
        ["editor", "trusted-author", "super-admin"].includes(
          this.auth.user.group.name
        )
      ) {
        this.$router.push({ path: "/profile/dashboard/" });
      } else {
        this.$router.push({ path: "/profile/posts/" });
      }
    },
    logout() {
      this.$auth.logout("local").then(() => {});
      this.$store.commit("CLEAR_LOGOUT");
    },
  },
};
</script>

