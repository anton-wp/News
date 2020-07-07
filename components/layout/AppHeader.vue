<template>
  <header v-if="$isAMP">
    <div class="container d-flex justify-center">
      <nuxt-link to="/amp/" class="header-logo">
        <amp-img src="/image/logo.svg" alt="Verdict - Main Logo" width="177" height="35"></amp-img>
      </nuxt-link>
    </div>
  </header>
  <header v-else class="app-header">
    <template class="wrapper-header">
      <div class="main-header container">
        <div class="burger-icon d-lg-none" @click="activeSideBarMenu">
          <svg width="30" height="35">
            <use xlink:href="#burger-menu-icon" />
          </svg>
        </div>
        <div class="main-logo">
          <nuxt-link to="/">
            <img class="main-logo-img" src="/image/logo.svg" alt="Verdict - Main Logo" />
          </nuxt-link>
        </div>
        <ul id="menu" class="nav-item-list d-none d-sm-none d-md-none d-lg-flex">
          <li
            class="nav-item"
            v-for="category of header.menu.slice(0, cropMenu)"
            :key="category.order"
          >
            <nuxt-link :to="`/${category.path}`" class="general-nav-item-link">{{ category.title }}</nuxt-link>
          </li>
          <li id="link" class="nav-item more" @mouseover="popupMoreOn" @mouseleave="popupMoreClose">
            <span id="more" class="general-nav-item-link">More</span>
            <span class="shevron">
              <svg width="12" height="15">
                <use xlink:href="#chevron-down" />
              </svg>
            </span>
            <div v-if="popupMore" class="popup-more">
              <ul>
                <li
                  class="nav-item"
                  v-for="category of header.menu.slice(cropMenu, header.menu.length)"
                  :key="category.order"
                >
                  <nuxt-link :to="`/${category.path}`" class="nav-item-link">{{ category.title }}</nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="nav-signup">
          <user-profile v-if="true" :authorization="$store.state.auth.loggedIn" />
          <!-- <user-profile
                        v-if="!true"
                        @openLoginPopup="openLoginPopup"
                        :authorization="false"
          />-->
          <button
            v-if="!$store.state.auth.loggedIn"
            class="signup-btn d-none d-md-block"
            @click="openLoginPopup('signUp')"
          >Sign Up</button>
          <button v-if="$store.state.auth.loggedIn" class="signup-btn d-none d-md-block">
            <nuxt-link class="link-button" to="/add">Add Post</nuxt-link>
          </button>
        </div>
      </div>
      <template v-if="SideBarMenu">
        <div class="background05"></div>
        <div id="side-menu" class="side-menu" @click="disabledSideBarMenu">
          <div class="close-sidemenu-icon">
            <svg width="30" height="30">
              <use xlink:href="#close" />
            </svg>
          </div>
          <ul class="menu">
            <li v-for="item of header.menu" :key="item.order">
              <nuxt-link class="general-nav-item-link" :to="`/${item.path}`">{{ item.title }}</nuxt-link>
            </li>
            <li>
              <div class="container follow">
                <span>Follow verdict</span>
                <div class="social">
                  <social-block />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
      <!-- <div class="c_modal">
        <div id="c-modal-verify-phone-modal" class="c_modal-wrapper opened">
          <div class="c_modal-reveal verify-form-wrap ">
            <button class="close-modal" (click)="modalClose()">×</button>
            <div class="c_modal-content">
              <div class="verify-form-wrap" id="verify-phone-modal">
                <p>To add your own posts
                  <a [routerLink]="['/profile/']" (click)="modalClose()" title="Verify">
                    <u>verify your account by adding a
                      phone number
                    </u>
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <login-popup v-if="loginModal.open" />
    </template>
  </header>
</template>

<script>
import { mapState } from "vuex";
import UserProfile from "~/components/user/UserProfile";
import LoginPopup from "~/components/layout/LoginPopup";
import SocialBlock from "~/components/universal-components/socialBlock.vue";
import { mapGetters } from "vuex";

export default {
  amp: "hybrid",
  ampLayout: "default.amp",

  components: {
    UserProfile,
    LoginPopup,
    SocialBlock
  },
  data() {
    return {
      popupMore: false,
      isToken: false,
      windowWidth: 0,
      cropMenu: 0,
      SideBarMenu: false
    };
  },
  mounted() {
    if (this.bookmarks.length === 0 && this.$store.state.auth.loggedIn) {
      this.$store.dispatch('getBookmarks');
      this.$store.dispatch('getSubscriptions');
    }
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      //Init
      this.getWindowWidth();
    });
  },
  computed: {
    ...mapState(["header", "bookmarks", "subscriptions", "loginModal"])
  },
  methods: {
    // getBookmarks() {
    //   this.$axios
    //     .$get(`/api/profile/bookmarks/ids`)
    //     .then(res => {
		// 			this.$store.dispatch("GET_BOOKMARK", res.data);
    //     })
    //     .catch(error => console.error(error));
    // },
    // getSubscriptions() {
    //   this.$axios
    //     .$get(`/api/profile/subscriptions/ids`)
    //     .then(res => {
    //       this.$store.dispatch("GET_SUBSCRIPTIONS", res.data);
    //     })
    //     .catch(error => console.error(error));
    // },
    getMenu() {
      this.$axios
        .$get(`/api/menu/header`)
        .then(res => this.$store.commit("SET_HEADER_MENU", res.data))
        .catch(error => console.error(error));
    },
    disabledSideBarMenu() {
      this.SideBarMenu = false;
    },
    activeSideBarMenu() {
      this.SideBarMenu = true;
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
      if (
        document.documentElement.offsetWidth === 992 ||
        document.documentElement.offsetWidth === 993
      ) {
        this.cropMenu = 3;
      } else if (document.documentElement.offsetWidth < 1200) {
        this.cropMenu = Math.floor(menu.offsetWidth / 100 - 1);
      } else {
        this.cropMenu = Math.floor(menu.offsetWidth / 100 - 0.1);
      }
    },
    openLoginPopup(type) {
      let data = {
        open: true,
        type: type
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
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
    },
    popupMoreOn() {
      setTimeout(() => {
        this.popupMore = true;
      }, 2);
    },
    popupMoreClose() {
      setTimeout(() => {
        this.popupMore = false;
      }, 200);
    },
    token() {
      return true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

