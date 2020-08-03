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

        <div class="comments" v-if="comments.length > 0">
            <div
                class="comment-block comment mx-n15 mx-md-0"
                :class="comment.isVerdict ? 'verdict__comment__block'  : ''"
                v-for="comment in comments"
                :key="comment.id"
            >
                <div v-if="comment.isVerdict" class="position__verdict__comment">
                    <div class="verdict__block shadow">
                        <svg width="33" height="40" :class="comment ? 'comment-adaptive' : ''">
                            <use xlink:href="#verdict-icon-selected" />
                        </svg>
                        <span class="verdict-value">{{comment.verdictThreshold}}%</span>
                    </div>
                </div>
                <div class="title__comment" :class="comment.isVerdict ? 'verdict__title'  : ''">
                    <nuxt-link
                        :to="`/amp/${comment.post.slug}`"
                        class="comment__title"
                    >{{ comment.post.title }}</nuxt-link>
                </div>
                <time class="date">
                    {{ new Date(comment.createdAt).toDateString() }}
                </time>
                <div class="content-comment__profile">
                    <div class="content__comment">
                        <p class>{{ comment.body }}</p>
                    </div>
                    <div class="content__points" v-if="!comment.parent">
                        <span
                            class="content__points__count"
                        >{{ comment.votes ? comment.votes : '0' }}</span>
                        <span class="content__points__vote">vote(s)</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="not-found text-center" v-else>
            <p>Sorry, nothing was found</p>
        </div>
    </div>
    <div v-else class="container px-0 px-md-3">
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
    </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import CommentBlock from "~/components/profile/comment-block";
import NotFound from "~/components/profile/not-found";
import BigHeader from "~/components/profile/bigHeader";

export default {
    amp: "hybrid",
    ampLayout: "author.amp",
    layout: "author",
    components: {
        DefaultNewsCard,
        CommentBlock,
        NotFound,
        BigHeader,
    },
    data() {
        return {
            sort: "DESC",
            type: "date",
            comments: [],
            pagination: null,
            page: 1,
            slug: undefined,
            userInfo: undefined,
            headerMenu: undefined,
        };
    },

    async asyncData({ $axios, params }) {
        const userInfo = await $axios.$get(`/api/author/${params.slug}`);

        const headerMenu = await $axios.$get(`/api/menu/header`);

        // const comments = await $axios.$get(`/api/author/${params.slug}/comments?orderBy=date&order=DESC&type=verdicts&page=1&limit=12`);

        const comments = [
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
            slug: params.slug,
            userInfo: userInfo.data,
            headerMenu: headerMenu.data,
            comments: comments,
        };
    },

    methods: {
        updateSort(type) {
            this.type = type;
            this.page = 1;
            this.getComments();
        },
        moreComments() {
            this.getComments("more", this.page + 1);
        },
        getComments(more, page) {
            if (page) {
                this.page = page;
            }
            this.$axios
                .$get(
                    `/api/author/${this.$route.slug}/comments?orderBy=${this.type}&order=${this.sort}&type=verdicts&page=${this.page}&limit=12`
                )
                .then((res) => {
                    if (!more) {
                        this.comments = res.data;
                        this.pagination = res.pagination;
                    } else {
                        this.comments = [...this.comments, ...res.data];
                        this.pagination = res.pagination;
                    }
                })
                .catch((error) => console.error(error));
        },
    },
    mounted() {
        // this.getComments();
    },
};
</script>

<style lang="scss">
// @import "../../../../assets/config/variables";
// @import "../../../../assets/utils/colors";

// .img {
//     display: inline-block;
//     vertical-align: top;
// }
// .sort {
//     margin-bottom: 20px;
//     .verdicts-posts {
//         vertical-align: bottom;
//         font-size: 100%;
//         box-sizing: inherit;
//         color: #8d8d8d;
//         font-weight: 600;
//     }
//     .active {
//         background-color: #bc2d2d !important;
//         color: #fff !important;
//     }
//     .follow {
//         color: #ff4242;
//         margin-right: 5px;
//         &:hover {
//             background-color: #bc2d2d;
//             color: #fff;
//         }
//     }
//     .verdicts-posts {
//         margin-right: 10px;
//     }
//     .click-for-follow {
//         font-size: 0.75rem;
//         padding: 0.55em 1.4em;
//         text-transform: none;
//         letter-spacing: 0.9px;
//         border-radius: 5px;
//         vertical-align: text-top;
//         margin-bottom: 0;
//         font-weight: 400;
//         pointer-events: all;
//         background: 0 0;
//         border: 1px solid;
//         line-height: 1;
//         text-align: center;
//         transition: 0.3s;
//         cursor: pointer;
//         margin-top: 0.5em;
//     }
// }
// a {
//     line-height: 1.5;
//     color: #0a0a0a;
//     text-decoration: none;
//     margin: 0.3em 0 0;
//     font-size: 1.4em;
//     font-weight: 700;
// }
// .V-rep {
//     align-items: baseline;
//     .counterV-rep {
//         line-height: 1.5;
//         color: #0a0a0a;
//         white-space: nowrap;
//         box-sizing: inherit;
//         font-size: 1.4em;
//         font-weight: 600;
//         margin-right: 10px;
//     }
// }

// .default-avatar {
//     width: 100%;
//     display: block;
//     margin: 0 auto;
//     // height: 100%;
//     max-width: 130px;
//     // max-height: 100px;
// }
// .aboutAuthor {
//     display: inline-block;
// }

// .unfollow {
//     color: #474747;
//     border-color: #474747;
//     &:hover {
//         background-color: #474747;
//         color: #fff;
//     }
// }

// .user-popup {
//     top: -295px;
//     padding: 1.5em 1.2em 0.8em 1.2em;
//     // border-radius: 2px;
//     background-color: $white;
//     position: absolute;
//     // top: -45px;
//     // width: 100px;
//     z-index: 3;
//     max-width: 20em;
//     min-height: 300px;
//     min-width: 280px;
//     width: 100%;
//     border: 1px solid $dedede;
//     border-radius: 4px;
//     // visibility: hidden;
//     opacity: 1;
//     -webkit-box-shadow: 2px 4px 16px 0 $shark026;
//     box-shadow: 2px 4px 16px 0 $shark026;
//     font-family: "Open Sans";

//     &:after {
//         content: "";
//         border-right: 1px solid $secondary-bgcolor;
//         border-bottom: 1px solid $secondary-bgcolor;
//         position: absolute;
//         bottom: -8px;
//         right: 80%;
//         background: $whiteFE;
//         width: 15px;
//         height: 15px;
//         z-index: 5;
//         -webkit-transform: rotate(45deg);
//         -ms-transform: rotate(45deg);
//         transform: rotate(45deg);
//     }
// }

// .button-block {
//     display: flex;
//     justify-content: center;
//     .loadMore {
//         box-sizing: inherit;
//         overflow: visible;
//         background: 0 0;
//         display: inline-block;
//         vertical-align: middle;
//         margin: 0 0 1rem;
//         font-family: inherit;
//         border: 1px solid transparent;
//         border-radius: 0;
//         transition: background-color 0.25s ease-out, color 0.25s ease-out;
//         line-height: 1;
//         text-align: center;
//         cursor: pointer;
//         background-color: #ff4242;
//         color: #fefefe;
//         font-weight: 700;
//         text-transform: uppercase;
//         letter-spacing: 0.8px;
//         user-select: none;
//         padding: 0.85em 1.4em 0.8em;
//         font-size: 0.75rem;
//         position: relative;
//         &:hover {
//             background-color: #bc2d2d;
//         }
//     }
// }
</style>


