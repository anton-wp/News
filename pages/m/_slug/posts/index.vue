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
            <nuxt-link :to="`/amp/m/${slug}/comments`" class="tabs__item">
                <svg width="20" height="20">
                    <use xlink:href="#Comments" />
                </svg>
                COMMENTS
            </nuxt-link>
            <nuxt-link :to="`/amp/m/${slug}/posts`" class="tabs__item tabs__item--active">
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

        <div v-if="ampPosts.length > 0">
            <article class="article" v-for="post in ampPosts" :key="post.id">
                <nuxt-link :to="`/amp/${post.slug}`" class="article__img">
                    <amp-img
                        v-if="post.featured.landscape"
                        :src="post.featured.landscape"
                        layout="responsive"
                        width="990"
                        height="550"
                    />
                </nuxt-link>
                <div class="article-header">
                    <nuxt-link
                        class="post-cat"
                        :to="`/amp/${post.category.slug}`"
                    >{{ post.category.name }}</nuxt-link>

                    <div class="post-icons">
                        <a href="#" class="post-icons__item">
                            <svg width="15" height="15">
                                <use xlink:href="#comment" />
                            </svg>
                            0
                        </a>
                        <a href="#" class="post-icons__item">
                            <svg width="15" height="15">
                                <use xlink:href="#votes" />
                            </svg>
                            0
                        </a>
                        <a href="#" class="post-icons__item">
                            <svg width="15" height="15">
                                <use xlink:href="#eye" />
                            </svg>
                            0
                        </a>
                    </div>
                </div>
                <nuxt-link class="article-title" :to="`/amp/${post.slug}`">{{ post.title }}</nuxt-link>

                <p class="article-content" v-if="post.shortContent">{{ post.shortContent }}[...]</p>

                <div class="article-author">
                    By:
                    <nuxt-link
                        v-bind:to="`/amp/m/${post.author.slug}/posts`"
                    >{{ post.author.firstName }} {{ post.author.lastName }}</nuxt-link>
                    <time class="published-date">{{ new Date(post.publishedAt).toDateString() }}</time>
                </div>
            </article>
        </div>
        <p v-if="ampPosts.length === 0">No results</p>
    </div>
    <div v-else class="component-following">
        <posts :type="'author'" :typePost="'Published'" />
    </div>
</template>

<script>
import Posts from "~/components/profile/posts";
import BigHeader from "~/components/profile/bigHeader";

export default {
    amp: "hybrid",
    ampLayout: "author.amp",
    layout: "author",
    components: {
        Posts,
        BigHeader
    },

    data() {
        return {
            userInfo: undefined,
            ampPosts: undefined,
            tag: true,
            slug: this.$route.params.slug,
            headerMenu: null
        };
    },

    async asyncData({ $axios, params }) {
        const userInfo = await $axios.$get(`/api/author/${params.slug}`);

        const posts = await $axios.$get(
            `/api/author/${params.slug}/posts?status=Published&sort=DESC&page=1&limit=12`
        );

        const headerMenu = await $axios.$get(`/api/menu/header`);

        return {
            userInfo: userInfo.data,
            ampPosts: posts.data,
            headerMenu: headerMenu.data
        };
    }
};
</script>
