<template>
    <div
        id="wrapper-default-avatar"
        class="wrapper-default-avatar"
        @mouseover="getPopUp"
        @mouseleave="hidePopUp"
    >
        <img class="default-avatar" src="/image/default-avatar-original.png" />
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
</template>

<script>
import Cookies from "js-cookie";

export default {
    props: {
        authorization: Boolean
    },
    data() {
        return {
            showPopup: false
        };
    },
    methods: {
        openLoginPopup(type) {
            this.$emit("openLoginPopup", type);
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
            Cookies.remove("token");
            this.$store.dispatch("SAVE_TOKEN", null);
            this.$store.dispatch("SAVE_TOKEN_INFO", null);

            location.reload()
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
.default-avatar {
    border-radius: 25px;
}

.wrapper-default-avatar {
    cursor: pointer;
    height: 48px;
    margin-right: 26px;
    margin-top: 3px;
    position: relative;

    .notification {
        position: absolute;
        right: -15px;
        padding-top: 30px;
        margin-top: 67px;
        top: -30px;
        width: 27em;
        height: 200px;
        .block {
            padding: 0;
        }
    }
    .blockNotification {
        font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto, Arial,
            sans-serif;
        width: 26.4em;
        z-index: 4;
        font-size: 100%;
        font-weight: normal;
        line-height: 1.5;
        color: #0a0a0a;
        box-sizing: inherit;
        background: #fff;
        border: 1px solid #f4f4f4;
        box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
        transition: opacity 0.3s, visibility 0.3s, transform 0.2s ease-out,
            -webkit-transform 0.2s ease-out;
        &::before {
            content: "";
            border-left: 1px solid #f4f4f4;
            border-top: 1px solid #f4f4f4;
            position: absolute;
            top: 23px;
            right: 265px;
            background: #fefefe;
            width: 15px;
            height: 15px;
            z-index: 500000;
            transform: rotate(45deg);
        }
        .viewAll {
            color: #ff4242;
            font-weight: 600;
            padding: 1em 0;
            justify-content: center;
            display: flex;
            width: 100%;
            font-size: 16px;
            a {
                cursor: pointer;
                color: inherit;
            }
        }
    }

    .profile {
        display: inline-block;
        position: relative;
        z-index: 10px;
    }

    .default-avatar {
        width: 30px;
        height: 30px;
        user-select: none;
        // cursor: pointer;
    }

    .icon {
        display: inline-block;
        margin: 9px 0 0 9px;
        user-select: none;
        cursor: pointer;
        svg {
            width: 24px;
            height: 24px;
        }
    }

    .icon-notification {
        display: inline-block;
        margin: 0px 27px 0 10px;
        user-select: none;
        font-size: 20px;
        svg {
            width: 20px;
            height: 20px;
            cursor: pointer;
            margin-top: 3px;
            &:hover {
                color: #bc2d2d;
            }
        }
    }

    .sign-popup {
        position: absolute;
        // top: -1000px;
        right: -27px;
        margin-top: 2px;
        padding: 0.6em 1.5em 0.4em;
        z-index: 1000;
        background-color: $white;
        box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
        user-select: none;
        transition: 0.3;
        animation: animation linear 0.2s;

        @keyframes animation {
            0% {
                opacity: 0;
                transform: translateY(20px);
                // transform: rotateX(100deg);
            }
            100% {
                opacity: 1;
                transform: translateY(0px);
                // transform: rotateY(0deg);
            }
        }
        // font-weight: 700;
        &::before {
            content: "";
            border-left: 1px solid #f4f4f4;
            border-top: 1px solid #f4f4f4;
            position: absolute;
            top: -8px;
            right: 31px;
            background: #fefefe;
            width: 15px;
            height: 15px;
            z-index: 5;
            transform: rotate(45deg);
        }

        .sign-popup-ul {
            margin-bottom: 0px;
            padding-left: 0px;
            user-select: none;
            list-style: none;

            .sign-popup-ul-item {
                user-select: none;
                white-space: nowrap;
                font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto,
                    Arial, sans-serif;
                color: $black;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 0.9rem;
                line-height: 30px;
                padding-bottom: 2px;
                display: list-item;

                &:hover {
                    color: $hover_color;
                    cursor: pointer;
                }
            }
        }
    }

    .user-popup {
        z-index: 7;
        position: absolute;
        // top: -1000px;
        right: -30px;
        padding: 0.6em 1.5em 0.3em;
        z-index: 1000;
        background-color: $white;
        box-shadow: 0 0 10px $black05;
        user-select: none;
        transition: 0.3;

        &::before {
            content: "";
            border-left: 1px solid #f4f4f4;
            border-top: 1px solid #f4f4f4;
            position: absolute;
            top: -8px;
            right: 33px;
            background: #fefefe;
            width: 15px;
            height: 15px;
            z-index: 5;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }

        .sign-popup-ul {
            padding-left: 0px;
            user-select: none;
            list-style: none;
            margin-bottom: 0px;

            .sign-popup-ul-item {
                padding-bottom: 2px;
                user-select: none;
                color: $black;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 0.9rem;
                font-family: "Open Sans", Helvetica Neue, Helvetica, Roboto,
                    Arial, sans-serif;
                line-height: 30px;

                &:hover {
                    color: $hover_color;
                    cursor: pointer;
                }
            }
        }
    }
}

@media (max-width: 640px) {
    .wrapper-default-avatar {
        margin-right: 0;

        .sign-popup {
            margin-left: -30px;
        }

        .user-popup {
            margin-left: -85px;
        }
    }
}
</style>
