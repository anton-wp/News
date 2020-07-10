<template>
    <div v-if="$isAMP" class="shared-link">
        <a
            href="#"
            class="shared-link__item shared-link__item--big facebook"
            title="Facebook"
            target="_blank"
            rel="nofollow"
        >
            <svg width="28" height="28">
                <use xlink:href="#facebook" />
            </svg>
            Share
        </a>

        <a
            href="#"
            class="shared-link__item shared-link__item--big twitter"
            title="Twitter"
            target="_blank"
            rel="nofollow"
        >
            <svg width="28" height="28">
                <use xlink:href="#facebook" />
            </svg>
            Tweet
        </a>
        <a
            href="#"
            class="shared-link__item pinterest"
            title="Share Pinterest"
            target="_blank"
            rel="nofollow"
        >
            <svg width="27" height="22">
                <use xlink:href="#pinterest" />
            </svg>
        </a>

        <a
            href="#"
            class="shared-link__item reddit-alien"
            title="Share Reddit"
            target="_blank"
            rel="nofollow"
        >
            <svg width="25" height="25">
                <use xlink:href="#reddit-alien" />
            </svg>
        </a>

        <a
            href="#"
            class="shared-link__item linkedin"
            target="_blank"
            title="Share Linkedin"
            rel="nofollow"
        >
            <svg width="24" height="27">
                <use xlink:href="#linkedin" />
            </svg>
        </a>

        <a
            href="#"
            class="shared-link__item tumblr"
            title="Share Tumblr"
            target="_blank"
            rel="nofollow"
        >
            <svg width="24" height="24">
                <use xlink:href="#tumblr" />
            </svg>
        </a>

        <a
            href="#"
            class="shared-link__item flipboard"
            title="Share Flipboard"
            target="_blank"
            rel="nofollow"
        >
            <svg width="21" height="21">
                <use xlink:href="#flipboard" />
            </svg>
        </a>

        <a
            href="#"
            class="shared-link__item mail"
            title="Share Email"
            target="_blank"
            rel="nofollow"
        >
            <svg width="23" height="24">
                <use xlink:href="#envelope-o" />
            </svg>
        </a>
    </div>
    <aside v-else class="shared-news-links">
        <div class="big-shared-buttons">
            <ShareNetwork
                class="big-share-link facebook"
                network="facebook"
                :url="baseUrl + $route.fullPath"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :description="post.seoDescription"
                :hashtags="tags"
            >
                <i class="facebook">
                    <svg width="28" height="28">
                        <use xlink:href="#facebook" />
                    </svg>
                </i>
                <span class="button-label">Share</span>
            </ShareNetwork>
            <ShareNetwork
                class="big-share-link twitter"
                network="twitter"
                :url="baseUrl + $route.fullPath"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :hashtags="tags"
            >
                <i class="twitter">
                    <svg width="28" height="28">
                        <use xlink:href="#twitter" />
                    </svg>
                </i>
                <span class="button-label">Tweet</span>
            </ShareNetwork>
        </div>

        <div class="share-comment-tooltip">
            <div class="small-shared-buttons">
                <ShareNetwork
                    class="pinterest"
                    network="pinterest"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                    :media="post.featured.landscape ? post.featured.landscape : ''"
                >
                    <i class="pinterest">
                        <svg width="27" height="22">
                            <use xlink:href="#pinterest" />
                        </svg>
                    </i>
                </ShareNetwork>
                <ShareNetwork
                    class="reddit-alien"
                    network="reddit"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                >
                    <i class="reddit-alien">
                        <svg width="25" height="25">
                            <use xlink:href="#reddit-alien" />
                        </svg>
                    </i>
                </ShareNetwork>
                <ShareNetwork
                    class="linkedin"
                    network="linkedIn"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                >
                    <i class="linkedin">
                        <svg width="24" height="27">
                            <use xlink:href="#linkedin" />
                        </svg>
                    </i>
                </ShareNetwork>
                <ShareNetwork
                    class="tumblr"
                    network="tumblr"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                    :description="post.seoDescription"
                >
                    <i class="tumblr">
                        <svg width="24" height="24">
                            <use xlink:href="#tumblr" />
                        </svg>
                    </i>
                </ShareNetwork>
                <ShareNetwork
                    class="flipboard"
                    network="flipBoard"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                >
                    <i class="flipboard">
                        <svg width="21" height="21">
                            <use xlink:href="#flipboard" />
                        </svg>
                    </i>
                </ShareNetwork>
                <ShareNetwork
                    class="envelope-o"
                    network="email"
                    :title="post.seoTitle ? post.seoTitle : post.title"
                    :url="baseUrl + $route.fullPath"
                    :description="post.seoDescription"
                >
                    <i class="envelope-o">
                        <svg width="23" height="24">
                            <use xlink:href="#envelope-o" />
                        </svg>
                    </i>
                </ShareNetwork>
                <button v-click-outside="hide" class="add" @click="toggle">
                    <i class="plus">
                        <svg width="12" height="15">
                            <use xlink:href="#plus" />
                        </svg>
                    </i>
                </button>
            </div>
        </div>
        <div class="font-size-changing-button">
            <div class="fs-range-wrap">
                <div class="fs-range" />
            </div>
            <button class="clear default js--change-font" @click="changeFontSize">
                A
                <span class="plusMinus">
                    <span class="clear plus">+</span>
                    <span class="clear minus">–</span>
                </span>
            </button>
        </div>
        <div v-show="visibleMobSocial" class="share-comment-tooltip mobWindow">
            <ShareNetwork
                class="pinterest"
                network="pinterest"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :url="baseUrl + $route.fullPath"
                :media="post.featured.landscape ? post.featured.landscape : ''"
            >
                <i class="pinterest">
                    <svg width="20" height="20">
                        <use xlink:href="#pinterest" />
                    </svg>
                </i>
            </ShareNetwork>
            <ShareNetwork
                class="reddit-alien"
                network="reddit"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :url="baseUrl + $route.fullPath"
            >
                <i class="reddit-alien">
                    <svg width="20" height="20">
                        <use xlink:href="#reddit-alien" />
                    </svg>
                </i>
            </ShareNetwork>
            <ShareNetwork
                class="tumblr"
                network="tumblr"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :url="baseUrl + $route.fullPath"
                :description="post.seoDescription"
            >
                <i class="tumblr">
                    <svg width="20" height="20">
                        <use xlink:href="#tumblr" />
                    </svg>
                </i>
            </ShareNetwork>
            <ShareNetwork
                class="flipboard"
                network="flipBoard"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :url="baseUrl + $route.fullPath"
            >
                <i class="flipboard">
                    <svg width="20" height="20">
                        <use xlink:href="#flipboard" />
                    </svg>
                </i>
            </ShareNetwork>
            <ShareNetwork
                class="envelope-o"
                network="email"
                :title="post.seoTitle ? post.seoTitle : post.title"
                :url="baseUrl + $route.fullPath"
                :description="post.seoDescription"
            >
                <i class="envelope-o">
                    <svg width="20" height="20">
                        <use xlink:href="#envelope-o" />
                    </svg>
                </i>
            </ShareNetwork>
        </div>
    </aside>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
    directives: {
        ClickOutside
    },
    data() {
        return {
            visibleMobSocial: false,
            baseUrl: "",
            tags: ""
        };
    },
    props: {
        post: Object
    },
    mounted() {
        this.baseUrl = process.env.baseUrl;
        this.post.tags.map(tag => (this.tags = this.tags + tag.name));
    },
    methods: {
        changeFontSize() {
            this.$emit("changeFontSize");
        },
        toggle() {
            this.visibleMobSocial = true;
        },
        hide() {
            this.visibleMobSocial = false;
        }
    }
};
</script>
