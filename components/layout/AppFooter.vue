<template>
  <div class="app-footer">
    <div class="wrapper">
      <div class="container">
        <div class="row sub-wrapper">
          <div class="first-block col-lg-2 col-xl-3 col-12 col-sm-6 order-1">
            <a href="/" class="footer-logo">
              <img class="footer-logo-icon" src="/image/logo-white.svg" />
            </a>
            <h1
              class="text-block-after-logo"
            >your opinion on latest news, events, and society developments</h1>
          </div>
          <div class="second-block col-lg-8 col-xl-6 order-3 order-sm-3 order-md-3 order-lg-2">
            <div class="footer-general-icons-list">
              <nuxt-link class="footer-general-link" to="/">HOME</nuxt-link>
              <nuxt-link class="footer-general-link" to="/about-verdict">ABOUT VERDICT</nuxt-link>
              <nuxt-link class="footer-general-link" to="/terms-of-service">TERMS OF SERVICE</nuxt-link>
              <nuxt-link class="footer-general-link" to="/privacy-policy">PRIVACY POLICY</nuxt-link>
              <nuxt-link class="footer-general-link" to="/contact">CONTACT</nuxt-link>
              <a class="footer-general-link">RSS</a>
              <a class="footer-general-link">SITEMAP</a>
            </div>
            <div class="footer-social-icons-list">
              <a
                class="touchable-social-zone"
                v-for="icon in social"
                :key="icon.linkName"
                v-bind:class="icon.linkName"
                :href="icon.link"
              >
                <svg width="30" height="30">
                  <use v-bind:xlink:href="`#${icon.linkName}`" />
                </svg>
              </a>
            </div>
            <div class="copyright-text d-none d-sm-block">
              <span class="text-string">Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</span>
            </div>
          </div>
          <div
            class="third-block col-lg-2 col-xl-3 order-4 order-sm-2 order-md-2 order-lg-3 col-12 col-sm-6"
          >
            <!-- <div class="wrapper-market-icon">
              <button class="market-place-button">
                <img class="market-place-icon" src="/image/app-store-badge.svg" alt="Verdict">

              </button>
            </div>
            <div class="wrapper-market-icon">
              <button class="market-place-button">
                <img class="market-place-icon google-play" src="/image/google-play-badge.svg" alt="Verdict">

              </button>
            </div>-->

            <div class="copyright-text d-block d-sm-none">
              <span class="text-string">Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="scroll">
      <div v-if="scroll" class="button__scroll__top" @click="ScrollToTop">
        <svg width="20" height="20">
          <use xlink:href="#big-angle-up" />
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
      social: [
        { linkName: "facebook", link: "https://www.facebook.com/VerdictNews/" },
        { linkName: "twitter", link: "https://twitter.com/VerdictWebsite" },
        {
          linkName: "pinterest",
          link: "https://www.pinterest.com/VerdictNews/",
        },
        { linkName: "feed", link: "/feed/" },
        {
          linkName: "feedburner",
          link: "https://feeds.feedburner.com/VerdictNews",
        },
        {
          linkName: "instagram",
          link: "https://www.instagram.com/verdictnews/",
        },
      ],
    };
  },
  mounted() {
    if (process.env !== "server") {
      window.addEventListener("scroll", this.updateScroll);
    }
    this.updateScroll();
  },
  methods: {
    updateScroll() {
      if (window.scrollY > 600) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    },
    ScrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
