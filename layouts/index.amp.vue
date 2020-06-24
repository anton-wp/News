<template>
    <div>
        <custom-svg />

        <header>
            <div class="container d-flex justify-center">
                <nuxt-link to="/" class="header-logo">
                    <amp-img
                        src="/image/logo.svg"
                        alt="Verdict - Main Logo"
                        width="177"
                        height="35"
                    >
                        <!-- <img decoding="async" alt="Verdict - Main Logo" src="/image/logo.svg" /> -->
                    </amp-img>
                </nuxt-link>
            </div>
        </header>

        <!-- <breadcrumbs /> -->
        <Nuxt />

        <footer>
            <div class="container">
                <div class="text-center">
                    <a href="/" class="footer-logo">
                        <amp-img
                            src="/image/logo-white.svg"
                            alt="Verdict - Main Logo"
                            width="177"
                            height="35"
                        >
                            <!-- <img decoding="async" alt="Verdict - Main Logo" src="/image/logo.svg" /> -->
                        </amp-img>
                    </a>
                    <p
                        class="footer-text"
                    >your opinion on latest news, events, and society developments</p>
                </div>

                <div class="col-12">
                    <div class="footer-general-icons-list">
                        <nuxt-link class="footer-general-link" to="/">HOME</nuxt-link>
                        <nuxt-link class="footer-general-link" to="/about-verdict">ABOUT VERDICT</nuxt-link>
                        <nuxt-link
                            class="footer-general-link"
                            to="/terms-of-service"
                        >TERMS OF SERVICE</nuxt-link>
                        <nuxt-link class="footer-general-link" to="/privacy-policy">PRIVACY POLICYT</nuxt-link>
                        <nuxt-link class="footer-general-link" to="/contact">CONTACT</nuxt-link>
                        <a class="footer-general-link">RSS</a>
                        <a class="footer-general-link">SITEMAP</a>
                    </div>
                </div>

                <div class="d-flex">
                    <a href="/" class="footer-logo">
                        <amp-img
                            class="footer-logo-icon"
                            src="/image/logo-white.svg"
                            alt="Verdict - Main Logo"
                            width="177"
                            height="35"
                        >
                            <!-- <img decoding="async" alt="Verdict - Main Logo" src="/image/logo.svg" /> -->
                        </amp-img>
                    </a>
                    <p
                        class="text-block-after-logo"
                    >your opinion on latest news, events, and society developments</p>
                </div>

                <div class="footer-social-icons-list">
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#facebook" />
                        </svg>
                    </a>
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#twitter" />
                        </svg>
                    </a>
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#pinterest" />
                        </svg>
                    </a>
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#feed" />
                        </svg>
                    </a>
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#feedburner" />
                        </svg>
                    </a>
                    <a class="touchable-social-zone">
                        <svg width="30" height="30">
                            <use xlink:href="#instagram" />
                        </svg>
                    </a>
                </div>
                <div class="copyright-text d-none d-sm-block">
                    <span
                        class="text-string"
                    >Copyright © 2018-2020 VERDICT, LLC - All Rights Reserved.</span>
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
import CustomSvg from "~/components/module/CustomSvg";
// import HotNews from "~/components/layout/HotNews";
// import AppHeader from "~/components/layout/AppHeader";
// import Breadcrumbs from "~/components/layout/Breadcrumbs";
// import AppFooter from "~/components/layout/AppFooter";

export default {
    components: {
        CustomSvg
        // AppHeader,
        // AppFooter
        // HotNews,
        // Breadcrumbs
    }
};
</script>

<style lang="scss">
@import "../assets/app.amp";
</style>
