<template>
    <div v-if="$isAMP" class="container">
        <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
            <nuxt-link
                :to="'/amp/' + menuLink.path"
                v-for="(menuLink, index) of headerMenu"
                :key="index"
            >{{ menuLink.title }}</nuxt-link>
        </amp-sidebar>

        <big-header :userAuthor="userInfo" />

        <div class="tabs">
            <nuxt-link :to="`/amp/m/${slug}/comments`" class="tabs__item tabs__item--active">
                <svg width="20" height="20">
                    <use xlink:href="#Comments" />
                </svg>
                COMMENTS
            </nuxt-link>
            <nuxt-link :to="`/amp/m/${slug}/posts`" class="tabs__item">
                <svg width="20" height="20">
                    <use xlink:href="#Posts" />
                </svg>
                POSTS
            </nuxt-link>
            <nuxt-link :to="`/amp/m/${slug}/followers`" class="tabs__item">
                <svg width="20" height="20">
                    <use xlink:href="#Followers" />
                </svg>
                FOLLOWERS
            </nuxt-link>
            <nuxt-link :to="`/amp/m/${slug}/following`" class="tabs__item">
                <svg width="20" height="20">
                    <use xlink:href="#Followers" />
                </svg>
                FOLLOWING
            </nuxt-link>
        </div>

            <div class="verdicts" v-if="verdicts.length">
                <div class="verdicts__item col-12" v-for="comment in verdicts" :key="comment.id">
                    <comment-block :comment="comment" :type="'all'" />
                </div>
            </div>

            <div v-else class="not-found">
                <p>Sorry, nothing was found</p>
            </div>
    </div>
    <div v-else class="component-following">
        <!-- <div class="container px-0 px-md-3">
            <div class="row">
                <div class="col-12 sort">
                    <span class="verdicts-posts">Sort by:</span>
                    <button
                        class="click-for-follow follow"
                        :class="type === 'date' ? 'active' : ''"
                        @click="updateSort('date')"
                    >latest</button>
                    <button
                        class="click-for-follow follow"
                        :class="type === 'vote' ? 'active' : ''"
                        @click="updateSort('vote')"
                    >top voted</button>
                </div>
                <div class="container px-0 px-md-3" v-if="comments.length > 0">
                    <div class="row">
                        <template>
                            <div class="col-12" v-for="comment in comments" :key="comment.id">
                                <comment-block :comment="comment" :type="'all'" />
                            </div>
                        </template>
                        <div class="col-12 button-block">
                            <button
                                class="loadMore"
                                v-if="pagination && pagination.next"
                                @click="moreComments()"
                            >Load More</button>
                        </div>
                    </div>
                </div>
                <div class="not-found" v-else>
                    <not-found />
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import NotFound from "~/components/profile/not-found";
import BigHeader from "~/components/profile/bigHeader";
import CommentBlock from "~/components/profile/comment-block";

export default {
    amp: "hybrid",
    ampLayout: "author.amp",
    layout: "author",
    components: {
        DefaultNewsCard,
        NotFound,
        BigHeader,
        CommentBlock,
    },
    props: {
        type: String,
    },
    data() {
        return {
            posts: [],
            pagination: Object,
            sort: "DESC",
            page: 1,
            path: "",
            userInfo: undefined,
            headerMenu: null,
            slug: undefined,
            verdicts: undefined,
        };
    },

    async asyncData({ $axios, params }) {
        const userInfo = await $axios.$get(`/api/author/${params.slug}`);
        const headerMenu = await $axios.$get(`/api/menu/header`);
        // const verdicts = await $axios.get(
        //     `/api/author/${params.slug}/posts?sort=DESC&page=1&limit=12`
        // );

        const verdicts = [
            {
                id: "2",
                status: "Published",
                title: "admin admin - test comment for verdict. test",
                body:
                    "test comment for verdict. test comment for verdict. test comment for 123123123123123123123123",
                postReactionString: "DISAGREE",
                postReaction: false,
                createdAt: "2020-07-06T11:53:08.852Z",
                isVerdict: true,
                blocked: false,
                hasReplies: true,
                user: {
                    id: "4979d7fc-9271-480a-929e-489dce496eb8",
                    email: "admin@admin.com",
                    verified: true,
                    slug: "admin-admin-4979d7fc-9271-480a-929e-489dce496eb8",
                    firstName: "admin",
                    lastName: "admin",
                    username: "admin",
                    medal: null,
                    avatar: {
                        original:
                            "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_original.jpg",
                        big:
                            "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_big.jpg",
                        medium:
                            "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_medium.jpg",
                        small:
                            "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_small.jpg",
                        thumbnail:
                            "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_thumbnail.jpg",
                        source: "admin admin",
                        alt: "admin admin",
                    },
                    isFollow: false,
                },
                post: {
                    slug:
                        "twitter-urges-you-to-read-articles-before-posting-is-that-the-end-of-fake-news-625",
                    id: "625",
                    title:
                        "Twitter Urges You to Read Articles Before Posting -- Is That The End of Fake News?",
                    subtitle: null,
                    seoTitle: null,
                    seoDescription: null,
                    status: "Published",
                    viewsCount: "8",
                    featured: {},
                    inBookmarks: false,
                    currentUserReaction: 11,
                    shortContent:
                        "In an attempt to tackle disinformation and fake news, Twitter will start a test",
                    publishedAt: "2020-06-11T15:42:00.000Z",
                    commentsCount: 33,
                    verdictValue: 22,
                    verdictUpdated: "2020-07-16T06:41:09.000Z",
                    votesCount: 0,
                    reaction: null,
                },
                parent: null,
                votes: 7,
                verdictThreshold: "22",
            },
        ];

        return {
            userInfo: userInfo.data,
            headerMenu: headerMenu.data,
            slug: params.slug,
            verdicts: verdicts,
        };
    },

    created() {
        if (this.type === "author") {
            this.path = `author/${this.$route.params.slug}`;
        } else {
            this.path = `profile/`;
        }

        // this.getPosts();
    },
    methods: {
        // getPosts(more, page) {
        //   if (page) {
        //     this.page = page;
        //   }
        //   this.$http
        //     .get(
        //       `/api/author/${this.$route.params.slug}/posts?sort=${this.sort}&page=${this.page}&limit=12`
        //     )
        //     .then(res => {
        //       console.log(res);
        //       if (!more) {
        //         this.posts = res.data.data;
        //         this.pagination = res.data.pagination;
        //       } else {
        //         this.posts = [...this.posts, ...res.data.data];
        //         this.pagination = res.data.pagination;
        //       }
        //     })
        //     .catch(error => console.error(error));
        // },
        morePosts() {
            this.getPosts("more", this.page + 1);
        },
        updateSort(sort) {
            this.sort = sort;
            this.page = 1;
            this.getPosts();
        },
    },
};
</script>
