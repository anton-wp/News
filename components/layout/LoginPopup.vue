<template>
    <div class="form-wrapper">
        <div class="form">
            <div class="close-form" @click="closeLoginPopup">×</div>
            <div v-if="type !== 'forgotPassword'" style="padding: 2.4rem 3rem 0em;">
                <div class="container in-form-container">
                    <div class="row">
                        <div class="col-12">
                            <h3 v-if="type === 'logIn'" class="form-title">Log In to Verdict</h3>
                            <h3 v-if="type === 'signUp'" class="form-title">Sign Up for Verdict</h3>
                        </div>
                    </div>
                    <div class="row buttons-wrapper">
                        <social />
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h6 class="form-sub-title">Or by email</h6>
                        </div>
                        <div class="col-12">
                            <form
                                v-if="type === 'logIn'"
                                @submit.prevent="checkForm"
                                id="authorizationForm"
                                class="primary-form"
                            >
                                <div>
                                    <p style="color: red; text-align: center;">{{ errorMessage }}</p>
                                </div>
                                <div class="input-block">
                                    <label class="label-input">
                                        <input
                                            placeholder="Email"
                                            autocomplete="off"
                                            class="form-input"
                                            type="text"
                                            v-model="email"
                                        />
                                        <span class="primary-error">{{errors.email}}</span>
                                    </label>
                                </div>
                                <div class="input-block">
                                    <label class="label-input">
                                        <input
                                            placeholder="Password"
                                            autocomplete="off"
                                            class="form-input"
                                            type="password"
                                            v-model="password"
                                        />
                                        <span class="primary-error">{{errors.password}}</span>
                                    </label>
                                </div>
                                <div class="forgot-button">
                                    <button
                                        type="button"
                                        @click="changeLoginPopup('forgotPassword')"
                                    >Forgot Password?</button>
                                </div>
                                <div class="terms">
                                    By proceeding, you agree to Verdict's
                                    <nuxt-link to="/terms-of-service">
                                        <span @click="closeLoginPopup">Terms of Service</span>
                                    </nuxt-link>&
                                    <nuxt-link to="/privacy-policy">
                                        <span @click="closeLoginPopup">Privacy Policy</span>
                                    </nuxt-link>
                                </div>
                                <div class="input-block">
                                    <button
                                        class="primary-form-button"
                                        form="authorizationForm"
                                        type="submit"
                                    >{{loading ? 'Loading' : 'Log In'}}</button>
                                </div>
                            </form>
                            <form
                                v-if="type === 'signUp'"
                                id="registrationForm"
                                class="primary-form"
                                @submit.prevent="checkForm"
                            >
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <div class="input-block">
                                            <label class="label-input">
                                                <input
                                                    placeholder="First Name"
                                                    autocomplete="off"
                                                    class="form-input"
                                                    type="text"
                                                    v-model="firstName"
                                                />
                                                <span class="primary-error">getErrorMessageEmail</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <div class="input-block">
                                            <label class="label-input">
                                                <input
                                                    placeholder="Last Name"
                                                    autocomplete="off"
                                                    class="form-input"
                                                    type="text"
                                                    v-model="lastName"
                                                />
                                                <span class="primary-error">getErrorMessageEmail</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="input-block">
                                    <label class="label-input">
                                        <input
                                            placeholder="Email"
                                            autocomplete="off"
                                            class="form-input"
                                            type="text"
                                            v-model="email"
                                        />
                                        <span class="primary-error">getErrorMessageEmail</span>
                                    </label>
                                </div>
                                <div class="input-block">
                                    <label class="label-input">
                                        <input
                                            placeholder="Password"
                                            autocomplete="off"
                                            class="form-input"
                                            type="password"
                                            v-model="password"
                                        />
                                        <span class="primary-error">getErrorMessagePassword</span>
                                    </label>
                                </div>
                                <div class="input-block">
                                    <label class="label-input">
                                        <input
                                            placeholder="Confirm Password"
                                            autocomplete="off"
                                            class="form-input"
                                            type="password"
                                            v-model="confirmPassword"
                                        />
                                        <span class="primary-error">getErrorMessagePasswordConfirm</span>
                                    </label>
                                </div>
                                <!-- <div class="forgot-button">
                <button>Forgot Password?</button>
                                </div>-->
                                <div class="terms">
                                    By checking this box, you confirm that you have read, understand and agree with
                                    Verdict's
                                    <nuxt-link to="/terms-of-service">
                                        <span @click="closeLoginPopup">Terms of Service</span>
                                    </nuxt-link>&
                                    <nuxt-link to="/privacy-policy">
                                        <span @click="closeLoginPopup">Privacy Policy</span>
                                    </nuxt-link>
                                </div>
                                <div class="input-block">
                                    <button
                                        class="primary-form-button"
                                        form="registrationForm"
                                        type="submit"
                                    >Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="type !== 'forgotPassword'" class="trigger-form">
                <span v-if="type === 'logIn'">
                    Don't have an account?
                    <a @click="changeLoginPopup('signUp')">Sign Up</a>.
                </span>
                <span v-if="type === 'signUp'">
                    Already have an account?
                    <a @click="changeLoginPopup('logIn')">Log In</a>.
                </span>
            </div>
            <div v-if="type === 'forgotPassword'" class="forgot-password">
                <h3 class="form-title">Forgot your password?</h3>
                <h4>Enter your email address, and we’ll send a link to choose a new password.</h4>
                <div class="input-block">
                    <label class="label-input">
                        <input
                            placeholder="Email"
                            autocomplete="off"
                            class="form-input"
                            type="text"
                        />
                    </label>
                </div>
                <div class="input-block">
                    <button class="primary-form-button">RESET PASSWORD</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Social from "~/components/login/social-button.vue";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default {
    components: {
        Social
    },
    data() {
        return {
            errors: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            loading: false,
            error: false,
            errorMessage: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };
    },
    props: {
        type: String
    },
    methods: {
        checkForm() {
            if (!this.firstName) {
                this.errors.firstName = "First Name is required";
                this.error = true;
            }
            if (!this.lastName) {
                this.errors.lastName = "Last Name is required";
                this.error = true;
            }
            if (!this.email) {
                this.errors.email = "email address is required";
                this.error = true;
            }
            if (!this.password) {
                this.errors.password = "password is required";
                this.error = true;
            }
            if (!this.confirmPassword) {
                this.errors.confirmPassword = "password is required";
                this.error = true;
            }
            let formData = {
                email: this.email,
                password: this.password
            };
            this.loading = true;
            this.login(formData);
        },

        login(formData) {
            this.$auth
                .loginWith("local", {
                    data: formData
                })
                .then(resp => {
                    this.loading = false;

                    this.closeLoginPopup();
                });
        },

        closeLoginPopup() {
            this.$emit("closeLoginPopup");
        },
        changeLoginPopup(type) {
            this.$emit("changeLoginPopup", type);
            this.clearForm();
        },
        clearForm() {
            this.firstName = "";
            this.lastName = "";
            this.email = "";
            this.password = "";
            this.confirmPassword = "";
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.invalid {
    opacity: 0.5;
}

.primary-error {
    color: $primary_color;
}

.form-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100000000000;
    display: flex;
    justify-content: center;
    align-items: center;

    .forgot-password {
        padding: 2.4rem 3rem 0px;

        h4 {
            font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial,
                sans-serif;
            font-size: 100%;
            font-weight: 400;
            line-height: 1.5;
            color: #0a0a0a;
            visibility: visible;
            box-sizing: inherit;
            padding: 0.9em 0;
            padding-top: 0;
        }
    }

    .forgot-modal {
        top: 88px;
    }

    .form {
        position: absolute;
        // top: 45%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        max-width: 32.5em;
        // padding: 2.4rem 3rem 0em;
        border-radius: 8px;
        background: $white;
        width: 95%;
        border: none;
        -webkit-box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 50px 10px rgba(0, 0, 0, 0.4);
        z-index: 4;
        -webkit-transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
            -webkit-transform 0.2s 0.3s ease-in-out;
        transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
            -webkit-transform 0.2s 0.3s ease-in-out;
        -o-transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
            transform 0.2s 0.3s ease-in-out;
        transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
            transform 0.2s 0.3s ease-in-out;
        transition: opacity 0.15s 0.3s ease, visibility 0.15s 0.3s ease,
            transform 0.2s 0.3s ease-in-out,
            -webkit-transform 0.2s 0.3s ease-in-out;
        // overflow: scroll;
        max-height: 95%;

        .close-form {
            position: absolute;
            position: absolute;
            right: 15px;
            top: 15px;
            font-size: 20px;
            color: #ff4242;
            font-size: 2.5rem;
            font-weight: bold;
            line-height: 1;
            cursor: pointer;
        }

        .in-form-container {
            padding: 0;
        }

        .form-title {
            font-weight: 400;
            margin: 0;
            font-size: 2em;
            text-align: left;
            color: #505050;
            font-family: "Open Sans";
            margin-bottom: 1em;
            -webkit-font-smoothing: antialiased;
        }

        .buttons-wrapper {
            margin-bottom: 2em;
            padding: 0px 15px;
        }

        .forgot-button {
            text-align: right;
            margin-bottom: 1em;
            margin-top: -0.7em;
            text-align: right;
            font-size: 0.9em;

            button {
                border: none;
                font-weight: 500;
                color: #ff4242;
                background: none;
                outline: none;
                cursor: pointer;
                -webkit-font-smoothing: antialiased;
                font-family: "Open Sans";
                transition: color 0.25s;

                &:hover {
                    color: #bc2d2d;
                }
            }
        }

        .form-sub-title {
            font-weight: 500;
            font-size: 1em;
            padding: 0.9em 0;
            color: #505050;
            font-family: "Open Sans";
            -webkit-font-smoothing: antialiased;
        }

        .label-input {
            display: block;
            margin-bottom: 0.9em;

            input {
                line-height: 1.15;
                width: 100%;
                font-weight: 600;
                padding: 0.5em 0.8em;
                font-size: 0.9em;
                color: #555;
                background-color: $white;
                background-image: none;
                border: 1px solid #ccc;
                border-radius: 4px;
                -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
                -webkit-transition: border-color ease-in-out;
                -o-transition: border-color ease-in-out;
                transition: border-color ease-in-out;
                font-family: "Open Sans";

                &::placeholder {
                    font-family: "Open Sans";
                    color: #555;
                    -webkit-appearance: textfield;
                    -webkit-font-smoothing: antialiased;
                    opacity: 0.5;
                }
            }
        }

        .terms {
            line-height: 1.3;
            text-align: center;
            padding: 0;
            margin: 0 0 2em;
            font-size: 0.8em;
            -webkit-font-smoothing: antialiased;
            font-family: "Open Sans";

            a {
                color: #ff4242;
                text-decoration: none;
                cursor: pointer;
                transition: color 0.25s;

                &:hover {
                    color: #bc2d2d;
                }
            }
        }

        .input-block {
            text-align: right;

            .primary-form-button {
                background-color: #ff4242;
                color: white;
                margin-bottom: 1.8em;
                border-radius: 4px;
                font-weight: 700;
                border: none;
                text-transform: uppercase;
                letter-spacing: 0.8px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                padding: 0.75em 1.4em 0.7em 1.4em;
                font-size: 0.9rem;
                -webkit-font-smoothing: antialiased;
                font-family: "Open Sans";
                transition: background-color 0.25s;

                &:hover {
                    background-color: #bc2d2d;
                }
            }
        }

        .trigger-form {
            padding: 1.5rem 0;
            font-size: 0.9em;
            background-color: #dfdfdf;
            color: #505050;
            text-align: center;
            -webkit-font-smoothing: antialiased;
            font-family: "Open Sans";
            cursor: pointer;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;

            a {
                color: #ff4242;
                text-decoration: none;
                cursor: pointer;
                transition: color 0.25s;

                &:hover {
                    color: #bc2d2d;
                }
            }
        }
    }
}
</style>
