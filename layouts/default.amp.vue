<template>
    <div>
        <!-- <custom-svg /> -->

        <app-header />

        <!-- <breadcrumbs /> -->
        <Nuxt />

        <footer>
            <div class="container">
                <div class="text-center">
                    <nuxt-link to="/" class="footer-logo">
                        <amp-img
                            src="/image/logo-white.svg"
                            alt="Verdict - Main Logo"
                            width="177"
                            height="35"
                        ></amp-img>
                    </nuxt-link>
                    <p
                        class="footer-text"
                    >your opinion on latest news, events, and society developments</p>
                </div>

                <div class="footer-nav">
                    <nuxt-link class="footer-nav__item" to="/amp/">HOME</nuxt-link>
                    <nuxt-link class="footer-nav__item" to="/amp/about-verdict">ABOUT VERDICT</nuxt-link>
                    <nuxt-link class="footer-nav__item" to="/amp/terms-of-service">TERMS OF SERVICE</nuxt-link>
                    <nuxt-link class="footer-nav__item" to="/amp/privacy-policy">PRIVACY POLICYT</nuxt-link>
                    <nuxt-link class="footer-nav__item" to="/amp/contact">CONTACT</nuxt-link>
                    <a href="#" class="footer-nav__item">RSS</a>
                    <a href="#" class="footer-nav__item">SITEMAP</a>
                </div>

                <div class="footer-social">
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#facebook" />
                        </svg>
                    </a>
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#twitter" />
                        </svg>
                    </a>
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#pinterest" />
                        </svg>
                    </a>
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#feed" />
                        </svg>
                    </a>
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#feedburner" />
                        </svg>
                    </a>
                    <a href="#" class="footer-social__item">
                        <svg width="30" height="30">
                            <use xlink:href="#instagram" />
                        </svg>
                    </a>
                </div>
                <p class="text-center">Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</p>
            </div>
        </footer>
    </div>
</template>


<script>
import CustomSvg from "~/components/module/CustomSvg";
// import HotNews from "~/components/layout/HotNews";
import AppHeader from "~/components/layout/AppHeader";
// import Breadcrumbs from "~/components/layout/Breadcrumbs";
// import AppFooter from "~/components/layout/AppFooter";

export default {
    components: {
        CustomSvg,
        AppHeader
        // AppFooter
        // HotNews,
        // Breadcrumbs
    }
};
</script>

<style lang="scss">
@import "../assets/amp.scss";
</style>
