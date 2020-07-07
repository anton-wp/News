<template>
    <div v-if="$isAMP">
        <div class="container">
            <nuxt-link
                v-if="data.category"
                class="post-cat"
                :to="`/amp/${data.category.slug}`"
            >{{ data.category.name }}</nuxt-link>
            <div class="col-lg-12">
                <h1 class="post-page-title">{{data.title}}</h1>
                <h2>{{data.subTitle}}</h2>
            </div>

            <div class="d-flex w-100 align-center">
                <author-block :author="data.author" :publishedAt="data.publishedAt" />

                <marks :author="data.author" />
            </div>

            <div class="d-flex">
                <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
            </div>

            <amp-img
                v-if="data.featured.wide"
                :src="data.featured.wide"
                layout="responsive"
                width="990"
                height="550"
                class="w-100"
            ></amp-img>

            <div class="sing-post-source">source: {{data.featured.source}}</div>

            <p class="text" v-html="data.body" :style="{fontSize: bodySize + '%'}">
                <!-- {{data.body}} -->
            </p>

            <div class="d-flex">
                <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
            </div>

            <div class="tag-links">
                <h2 class="tag-links__title">linked</h2>
                <nuxt-link
                    v-for="tag in data.tags"
                    :key="tag.id"
                    :to="`/amp/l/${tag.slug}`"
                    class="tag-links__item"
                >{{tag.name}}</nuxt-link>
            </div>
            <!-- <social-block [(fontSize)]="bodySize" class="col-lg-12"></social-block> -->
            <div class="row">
                <div class="col-6" v-if="prev">
                    <nuxt-link class="d-flex sibling-post" :to="`/amp/${prev.slug}`">
                        <svg class="sibling-post__icon" width="40" height="40">
                            <use xlink:href="#angle-left" />
                        </svg>
                        <div class="h-100">
                            <div class="sibling-post__label">Previous Post</div>
                            <h3 class="sibling-post__title">{{prev.title}}</h3>
                        </div>
                    </nuxt-link>
                </div>
                <div class="col-6" v-if="next">
                    <nuxt-link class="d-flex sibling-post justify-end" :to="`/amp/${next.slug}`">
                        <div class="h-100">
                            <div class="sibling-post__label">Next Post</div>
                            <h3 class="sibling-post__title">{{next.title}}</h3>
                        </div>
                        <svg class="sibling-post__icon" width="40" height="40">
                            <use xlink:href="#angle-right" />
                        </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="post-layout">
        <div class="policy-wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-8">
                        <div class="container pad0">
                            <div class="row">
                                <button-block-head
                                    :id="data.id"
                                    :slug="data.slug"
                                    :category="data.category"
                                />
                                <div class="col-lg-12">
                                    <h1 class="post-page-title">{{data.title}}</h1>
                                    <h2>{{data.subTitle}}</h2>
                                </div>
                                <div class="col-lg-12">
                                    <div class="container">
                                        <div class="row" style="margin-bottom: 3.1em;">
                                            <div class="col-lg-6">
                                                <author-block
                                                    :author="data.author"
                                                    :publishedAt="data.publishedAt"
                                                />
                                            </div>
                                            <div
                                                class="col-lg-6"
                                                style="align-items: center; display: flex;"
												v-if="!review"
                                            >
                                                <marks :author="data.author" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12" v-if="!review">
                                    <social-block
                                        v-if="data"
                                        :post="data"
                                        @changeFontSize="changeFontSize"
                                    />
                                </div>
                                <div class="col-lg-12">
                                    <div class="image-wrapper">
                                        <img
                                            v-if="data.featured.wide"
                                            class="post-image"
                                            :src="data.featured.wide"
                                        />
                                        <img
                                            v-if="!data.featured.wide"
                                            class="post-image"
                                            src="/image/default_image_landscape.png"
                                        />
                                        <div class="source">
                                            <span>source: {{data.featured.source ? data.featured.source : data.author.firstName + ' ' + data.author.lastName}}</span>
                                        </div>
                                    </div>
                                    <p
                                        class="text"
                                        v-html="data.body"
                                        :style="{fontSize: bodySize + '%'}"
                                    >
                                        <!-- {{data.body}} -->
                                    </p>
                                </div>
                                <div class="col-12" v-if="!review">
                                    <social-block
                                        v-if="data"
                                        :post="data"
                                        @changeFontSize="changeFontSize"
                                    />
                                </div>
                                <!-- <social-block [(fontSize)]="bodySize" class="col-lg-12"></social-block> -->
                                <div class="col-lg-12" style="margin-top: 25px;" v-if="!review">
                                    <div class="linked-title">
                                        <span>linked</span>
                                    </div>
                                    <div class="tags">
                                        <div
                                            class="tag-wrapper"
                                            v-for="tag in data.tags"
                                            :key="tag.id"
                                        >
                                            <nuxt-link
                                                :to="`/l/${tag.slug}`"
                                                class="tag-name"
                                            >{{tag.name}}</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12" v-if="!review">
                                    <prev-next :slug="data.slug" />
                                </div>
                                <div v-if="!draft && !review" class="col-lg-12">
                                    <div class="related-title">
                                        <span>related</span>
                                    </div>
                                    <related-block />
                                </div>
                                <div v-if="!draft && !review" class="col-lg-12">
                                    <div class="comment-wrapper">
                                        <span class="title">your verdict</span>
                                        <span class="about">
                                            About Verdict
                                            img
                                        </span>
                                    </div>
                                    <span
                                        class="aboutPopup"
                                    >Verdict is top voted comment by all members. One vote per member. Verdict can change over time.</span>
                                </div>
                                <div v-if="!draft && !review" class="col-12">
                                    <!-- <textarea  formControlName="body"
													class="form-input with-border"
													[froalaEditor]="froalaOptions"
													maxlength="10000" >
                                    </textarea>-->
                                    <div class="blockCheckbox">
                                        <input type="checkbox" class="checkbox" />
                                        <label for="checkbox">subscribe to comments</label>
                                    </div>
                                    <div class="blockButton">
                                        <button>agree</button>
                                        <button>disagree</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <follow v-if="!review" />
                        <asideReview v-if="data && review" :postData="data" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PrevNext from "~/components/singlePost/prevNext.vue";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import Marks from "~/components/singlePost/marks.vue";
import SocialBlock from "~/components/singlePost/socialBlock.vue";
import ButtonBlockHead from "~/components/singlePost/buttonBlockHead.vue";
import Follow from "~/components/universal-components/followBlock.vue";
import RelatedBlock from "~/components/universal-components/relatedBlock.vue";
import AsideReview from "~/components/universal-components/asideReview.vue";

export default {
    components: {
        PrevNext,
        Follow,
        ButtonBlockHead,
        AuthorBlock,
        Marks,
        SocialBlock,
        RelatedBlock,
        AsideReview
    },
    props: {
        data: Object,
        slug: String,
        prev: {
            type: Object,
            default: null
        },
        draft: Boolean,
        next: {
            type: Object,
            default: null
        },
        review: Boolean
    },

    head() {
        return {
            title: this.data.title,
            meta: [
                {
                    hid: "description",
                    name: "description",
                    content: this.data.seoDescription
                },
                {
                    hid: "og:title",
                    name: "og:title",
                    content: this.data.title
                },
                {
                    hid: "og:description",
                    name: "og:description",
                    content: this.data.seoDescription
                },
                {
                    hid: "og:url",
                    name: "og:url",
                    content: this.$route.fullPath
                },
                {
                    hid: "og:image",
                    name: "og:image",
                    content: this.data.featured.thumbnail
                },
                {
                    hid: "og:type",
                    name: "og:type",
                    content: "article"
                }
            ]
        };
    },
    data() {
        return {
            bodySize: 110
        };
    },
    methods: {
        changeFontSize() {
            if (this.bodySize === 130) {
                this.bodySize = 90;
            } else {
                this.bodySize = this.bodySize + 10;
            }
        }
    },
    provide() {
        return {
            id: this.data.id
        };
    },
    created() {
        if (this.data.category) {
            this.$store.commit("SET_BREADCRUMBS", [
                {
                    title: this.data.category.name,
                    path: "/" + this.data.category.slug
                },
                { title: this.data.title }
            ]);
        } else {
            this.$store.commit("SET_BREADCRUMBS", [{ title: this.data.title }]);
        }
    }
};
</script>
