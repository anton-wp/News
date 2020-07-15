<template>
    <div v-if="$isAMP" class="text-page container contacts">
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
            <nuxt-link
                :to="'/amp/' + menuLink.path"
                v-for="(menuLink, index) of headerMenu"
                :key="index"
            >{{ menuLink.title }}</nuxt-link>
        </amp-sidebar>

        <h1 class="post-cat">CONTACT</h1>

        <div class="contact-item">
            <h4>Verdict Membership Questions</h4>
            <p>For any question related to your Verdict Member account please contact:</p>
            <p>
                Verdict Members Team -
                <a
                    href="mailto:members@verdict.org"
                    class="terms-text-link"
                >members@verdict.org</a>
            </p>
        </div>

        <div class="contact-item">
            <h4>Verdict Technical Problems</h4>
            <p>For any question related to Verdict Site or App please contact:</p>
            <p>
                Verdict Support Team -
                <a
                    href="mailto:support@verdict.org"
                    class="terms-text-link"
                >support@verdict.org</a>
            </p>
        </div>

        <div class="contact-item">
            <h4>Verdict Content Questions</h4>
            <p>For any question related to Content on Verdict Site or App please contact:</p>
            <p>
                Verdict Content Team -
                <a
                    href="mailto:content@verdict.org"
                    class="terms-text-link"
                >content@verdict.org</a>
            </p>
        </div>

        <div class="contact-item">
            <h4>Verdict Development</h4>
            <p>For any question related to Verdict development including ideas:</p>
            <p>
                Verdict Community Team -
                <a
                    href="mailto:community@verdict.org"
                    class="terms-text-link"
                >community@verdict.org</a>
            </p>
        </div>

        <nuxt-link to="/contact" class="btn">Contact us</nuxt-link>
    </div>
    <div v-else class="contact">
        <div class="terms-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="wrapper-terms">
                            <h1 class="terms-page-title">CONTACT</h1>
                            <p class="text">Verdict Membership Questions</p>
                            <p
                                class="text"
                            >For any question related to your Verdict Member account please contact:</p>
                            <p class="text">
                                Verdict Members Team -
                                <a class="terms-text-link">members@verdict.org</a>
                            </p>
                            <br />
                            <br />
                            <div class="paragraph">
                                <p class="text">Verdict Technical Problems</p>
                                <p
                                    class="text"
                                >For any question related to Verdict Site or App please contact:</p>
                                <p class="text">
                                    Verdict Support Team -
                                    <a
                                        class="terms-text-link"
                                    >support@verdict.org</a>
                                </p>
                            </div>
                            <br />
                            <br />
                            <div class="paragraph">
                                <p class="text">Verdict Content Questions</p>
                                <p
                                    class="text"
                                >For any question related to Content on Verdict Site or App please contact:</p>
                                <p class="text">
                                    Verdict Content Team -
                                    <a
                                        class="terms-text-link"
                                    >content@verdict.org</a>
                                </p>
                            </div>
                            <br />
                            <br />
                            <div class="paragraph">
                                <p class="text">Verdict Development</p>
                                <p
                                    class="text"
                                >For any question related to Verdict development including ideas:</p>
                                <p class="text">
                                    Verdict Community Team -
                                    <a
                                        class="terms-text-link"
                                    >community@verdict.org</a>
                                </p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div class="paragraph">
                                <p class="text">Other Questions About Verdict:</p>
                                <p
                                    class="text"
                                >For all other questions please fill out the form below:</p>
                            </div>
                            <form class="form">
                                <div class="input-unit">
                                    <h3>Your Name (required)</h3>
                                    <input v-model.trim="$v.yourName.$model" />
                                    <div>
                                        <div
                                            v-if="errorNotif && !$v.yourName.required"
                                            class="errors"
                                        >Name is required</div>
                                    </div>
                                </div>
                                <div class="input-unit">
                                    <h3>Your Email (required)</h3>
                                    <input v-model.trim="$v.email.$model" />
                                    <div>
                                        <div
                                            v-if="errorNotif && !$v.email.required"
                                            class="errors"
                                        >Email is required</div>
                                        <div
                                            v-if="errorNotif && !$v.email.email"
                                            class="errors"
                                        >Email must be a valid email address</div>
                                    </div>
                                </div>
                                <div class="input-unit">
                                    <h3>Your Message</h3>
                                    <textarea v-model.trim="$v.message.$model" />
                                    <div>
                                        <div
                                            v-if="errorNotif && !$v.message.required"
                                            class="errors"
                                        >Message is required</div>
                                    </div>
                                </div>
                                <div class="input-unit">
                                    <div class="reCaptcha">
                                        <vue-recaptcha
                                            sitekey="6Lcp8vkUAAAAAA2t0VjE6zLLHFEW1Td_OYuoTKUF"
                                            :loadRecaptchaScript="true"
                                            @verify="markRecaptchaAsVerified"
                                        ></vue-recaptcha>
                                    </div>
                                    <div>
                                        <div
                                            v-if="errorNotif && !reСaptch"
                                            class="errors"
                                        >Press the reСaptch</div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    @click.prevent="sendEmail"
                                    class="signup-btn"
                                >Send mail</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <follow />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Follow from "~/components/universal-components/followBlock.vue";
import { email, required } from "vuelidate/lib/validators";
import VueRecaptcha from "vue-recaptcha";

export default {
    amp: "hybrid",
    ampLayout: "default.amp",
    components: {
        Follow,
        VueRecaptcha
    },
    data() {
        return {
            email: "",
            yourName: "",
            message: "",
            reСaptch: false,
            errorNotif: false,
            headerMenu: null
        };
    },

    async asyncData({ $axios, params }) {
        const homePageInfo = await $axios.$get(`/api/home`);

        let arrayPosts = [homePageInfo.data.posts.items];
        let pagination = homePageInfo.data.posts.pagination;
        let menu = homePageInfo.data.menu;
        let tags = homePageInfo.data.tags;

        const headerMenu = await $axios.$get(`/api/menu/header`);

        return {
            arrayPosts: arrayPosts,
            pagination: pagination,
            menu: menu,
            tags: tags,
            headerMenu: headerMenu.data
        };
    },
    created() {
        this.$store.commit("SET_BREADCRUMBS", [{ title: "Contact" }]);
    },
    methods: {
        sendEmail() {
            this.$v.$touch();

            if (this.$v.$invalid) {
                this.errorNotif = true;
            }
        },
        markRecaptchaAsVerified(response) {
            // this.loginForm.pleaseTickRecaptchaMessage = '';
            this.reСaptch = true;
        }
    },
    validations: {
        email: {
            required,
            email
        },
        yourName: {
            required
        },
        message: {
            required
        },
        reСaptch: {
            required
        }
    }
};
</script>

