<template>
    <div v-if="$isAMP" class="container">
        <big-header :userAuthor="userInfo" />

        <div class="tabs">
            <nuxt-link :to="`/amp/m/${slug}/comments`" class="tabs__item">
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
            <nuxt-link :to="`/amp/m/${slug}/followers`" class="tabs__item tabs__item--active">
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

        <div class="follow">
            <div class="follow-item col-6" v-for="follow in ampFollowers" :key="follow.id">
                <amp-img
                    class="follow-item__avatar"
                    src="/image/default-avatar-original.png"
                    v-if="!follow.avatar"
                    width="100"
                    height="100"
                />
                <amp-img
                    class="follow-item__avatar"
                    v-if="follow.avatar"
                    v-bind:src="follow.avatar.medium"
                    width="100"
                    height="100"
                />

                <div class="follow-item__info">
                    <nuxt-link
                        class="name"
                        v-bind:to="`/amp/m/${follow.slug}/posts`"
                    >{{follow.firstName}} {{follow.lastName}}</nuxt-link>

                    <p class="rep">
                        <span>{{follow.points}}</span>
                        V-rep
                    </p>

                    <p class="points">
                        {{follow.verdictsCount}} verdicts /
                        {{follow.postsCount}} posts
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <following :type="'author'" :typePage="'subscribers'" />
    </div>
</template>

<script>
import Following from "~/components/profile/following";
import BigHeader from "~/components/profile/bigHeader";

export default {
    amp: "hybrid",
    ampLayout: "author.amp",
    layout: "author",
    components: {
        Following,
        BigHeader
    },

    data() {
        return {
            userInfo: undefined,
            slug: this.$route.params.slug,
            ampFollowers: []
        };
    },

    async asyncData({ $axios, params }) {
        console.log(params);

        const userInfo = await $axios.$get(`/api/author/${params.slug}`);

        const followers = await $axios.$get(
            `/api/author/${params.slug}/subscribers?created=DESC&page=1&limit=12`
        );

        console.log(followers);

        return {
            userInfo: userInfo.data,
            ampFollowers: followers.data
        };
    }
};
</script>
