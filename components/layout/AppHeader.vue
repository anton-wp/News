<template>
  <header>
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
          <user-profile
            v-if="true"
            @openLoginPopup="openLoginPopup"
            :authorization="$store.getters.IS_TOKEN"
          />
          <!-- <user-profile
                        v-if="!true"
                        @openLoginPopup="openLoginPopup"
                        :authorization="false"
          />-->
          <button
            v-if="!$store.getters.IS_TOKEN"
            class="signup-btn d-none d-md-block"
            @click="openLoginPopup('signUp')"
          >Sign Up</button>
          <button v-if="$store.getters.IS_TOKEN" class="signup-btn d-none d-md-block">
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

      <login-popup
        v-if="loginPopupActive"
        @closeLoginPopup="closeLoginPopup"
        @changeLoginPopup="changeLoginPopup"
        :type="typeLoginPopup"
      />
    </template>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import UserProfile from "~/components/user/UserProfile";
import LoginPopup from "~/components/layout/LoginPopup";
import Cookies from "js-cookie";
import SocialBlock from "~/components/universal-components/socialBlock.vue";

export default {
  components: {
    UserProfile,
    LoginPopup,
    SocialBlock
  },
  data() {
    return {
      loginPopupActive: false,
      typeLoginPopup: "",
      popupMore: false,
      // categories: [],
      isToken: false,
      windowWidth: 0,
      cropMenu: 0,
      SideBarMenu: false
    };
  },
  mounted() {
		if(this.header.menu.length === 0) {
			this.getMenu()
		}
		if(this.bookmarks.length === 0) {
			this.getBookmarks()
		}
		if(this.subscriptions.length === 0) {
			this.getSubscriptions()
		}
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);
      //Init
      this.getWindowWidth();
    });
	},
	computed: {
		...mapState(['header', 'bookmarks', 'subscriptions'])
	},
  methods: {
		async	getBookmarks () {
			await this.$http
		  .get(`/api/profile/bookmarks/ids`)
		  .then(res => {
		    this.$store.dispatch("GET_BOOKMARK", res.data.data);
		  })
		  .catch(error => console.error(error));
		},
		async getSubscriptions () {
			await this.$http
		  .get(`/api/profile/subscriptions/ids`)
		  .then(res => {
		    this.$store.dispatch("GET_SUBSCRIPTIONS", res.data.data);
		  })
		  .catch(error => console.error(error));
		},
		async getMenu () {
			await this.$http
      .get(`/api/menu/header`)
      .then(res => (this.$store.commit('SET_HEADER_MENU', res.data.data)))
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
        this.cropMenu = Math.floor(menu.offsetWidth / 100);
      }
    },
    openLoginPopup(type) {
      this.typeLoginPopup = type;
      this.loginPopupActive = true;
    },
    closeLoginPopup() {
      this.loginPopupActive = false;
    },
    changeLoginPopup(type) {
      this.typeLoginPopup = type;
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
      // console.log(Cookies.get("token"));

      //   if(Cookies.get('token')) {
      //     return true
      //   }
      return true;
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
header {
  position: fixed;
  background-color: $white;
  top: 0;
  z-index: 1000;
  width: 100%;
  border: solid 1px $secondary-bgcolor;
}

.link-button {
  text-decoration: none;
  color: inherit;
}
.main-header {
  display: grid;
  grid-gap: 24px;
  max-width: $global-width;
  margin: 0 auto;
  margin-left: 0;
  padding: 7px 10px 11px 15px;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  left: 50%;
  transform: translate(-50%);
  position: relative;
  .burger-icon {
    cursor: pointer;
    transition: color 0.25s;
    &:hover {
      color: #6d6d6d;
    }
    svg {
      fill: rgb(33, 37, 41);
    }
  }
}
.close-sidemenu-icon {
  position: absolute;
  left: 25px;
  top: 25px;
  cursor: pointer;
  svg {
    color: $primary_color;
    font-size: 36px;
  }
}

.main-logo {
  .main-logo-img {
    width: 177px;
  }
}

.popup-more {
  position: absolute;
  background-color: $white;
  z-index: 100;
  top: 22px;
  left: -18px;
  width: 180px;
  padding: 0.5em 0.45em;
  box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
  animation: popupMore linear 0.2s;
  .nav-item {
    margin: 0;
  }

  @keyframes popupMore {
    0% {
      opacity: 0;
      // transform: translateY(20px);
      // transform: rotateX(100deg);
    }
    100% {
      opacity: 1;
      // transform: translateY(0px);
      // transform: rotateY(0deg);
    }
  }
  ul {
    list-style: none;
    padding-left: 0;
    li {
      border-top: none;

      a {
        line-height: 28px;
        color: $black;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        padding-left: 10px;
        // padding: 5.6px 5.6px 5.6px 13.6px;
      }
    }
    li:hover {
      border-color: transparent;
      border-top: none;
      a {
        cursor: pointer;
        color: $hover_color;
        text-decoration: none;
      }
    }
  }
}

.nav-item-list {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  font-size: 14px;
  margin: 0 0;
  padding-left: 25px;
}
.more {
  border-color: white !important;
}
.nav-item {
  list-style: none;
  position: relative;
  border-bottom: solid 4px $coralRed;
  border-top: solid 4px white;
  transition: all linear 0.3s;
  margin: 0 1em;
  &:hover {
    border-bottom: solid 4px $primary_color;
    border-top: solid 4px white;
    .general-nav-item-link {
      user-select: none;
      cursor: pointer;
      color: $primary_color;
    }
  }
  .shevron {
    // margin-left: 5px;
    svg {
      width: 20px;
      height: 20px;
      margin-top: -4px;
    }
  }
  .general-nav-item-link {
    color: $black;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 42px;
    padding: 18px 0 10px 0;
  }
}

.nav-signup {
  display: flex;
  align-items: center;
  margin-right: 3px;
  .signup-btn {
    background-color: $primary_color;
    color: $white;
    cursor: pointer;
    height: 40px;
    padding: 0 21px;
    font-weight: 700;
    font-size: 0.9rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    border: none;
    -webkit-appearance: none;
    font-family: "Open Sans";
    &:hover {
      background-color: $hover_color;
    }
  }
}

.side-menu {
  position: absolute;
  z-index: 2000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  transition: 0.3s;
}
.background05 {
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

@media (min-width: 992px) {
  .nav-item-list {
    padding-left: 0;
  }
}
@media (max-width: 480px) {
  .nav-signup {
    margin-right: 15px;
  }
  .main-header {
    grid-template-columns: auto 1fr auto;
    .main-logo {
      .main-logo-img {
        width: 150px;
      }
    }
  }
}

.c_modal {
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5;
  color: #0a0a0a;
  -webkit-font-smoothing: antialiased;
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  box-sizing: inherit;
  position: fixed;
  top: 0 !important;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 900;
  background-color: rgba(40, 40, 40, 0.8);
  transition: opacity 0.25s 0.2s, visibility 0.25s 0.2s;
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  display: flex;
  justify-content: center;
  .opened {
    min-height: 120px;
    margin-top: 88px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    background: #fff;
    width: 95%;
    max-width: 32rem;
    pointer-events: all;
    box-sizing: inherit;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    align-items: flex-start;
    opacity: 1;
    transition: none;
    max-height: 80px;
    display: flex;
    align-items: center;
    .close-modal {
      -webkit-font-smoothing: antialiased;
      pointer-events: all;
      box-sizing: inherit;
      margin: 0;
      overflow: visible;
      text-transform: none;
      padding: 0;
      -webkit-appearance: none;
      border-radius: 0;
      font-family: inherit;
      font-size: 2.5rem;
      line-height: 1;
      background: 0 0;
      border: none;
      outline: none;
      position: absolute;
      top: 5px;
      right: 11px;
      color: #ff4242;
      font-weight: 700;
      cursor: pointer;
      z-index: 20;
    }
  }
  .c_modal-content {
    pointer-events: all;
    box-sizing: inherit;
    padding: 1.2rem;
    .verify-form-wrap {
      box-sizing: inherit;
      p {
        // margin-top: auto;
        margin-bottom: 0px;
        a {
          color: #0a0a0a;
        }
      }
    }
  }
}
.menu {
  background-color: $white;
  width: 260px;
  height: 82%;
  margin-top: 100px;
  margin-left: 29px;
  overflow: scroll;
  padding-top: 15px;
  padding-left: 0;
  position: fixed;
  overflow: hidden;
  li {
    list-style: none;
    .general-nav-item-link {
      display: block;
      color: $black;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1em;
      border-left: 4px solid $white;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      padding: 8px 28px;
      -webkit-transition: color 0.3s, border 0.3s;
      -o-transition: color 0.3s, border 0.3s;
      transition: color 0.3s, border 0.3s;
      cursor: pointer;
      &:hover {
        color: $primary_color;
        border-left-color: $primary_color;
      }
    }
  }
}

.follow {
  margin: 2em 0;
  .row {
    padding: 0 13px;
    margin-top: 22px;
  }
  span {
    font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
      sans-serif;
    color: $doveGray;
    font-weight: 700;
    line-height: 16px;
    font-size: 1.4em;
    // letter-spacing: 1px;
    position: relative;
    z-index: 2;
    background-color: white;
    // display: block;
    // width: 100%;
    // height: 100%;
    &::after {
      content: "";
      position: absolute;
      top: calc(50% + 0.05em);
      left: 167px;
      height: 1px;
      width: 32%;
      background-color: #696969;
      z-index: 1;

      top: 17px;
    }
  }
  .social {
    margin: 0 auto;
    width: 175px;
  }
}
</style>
