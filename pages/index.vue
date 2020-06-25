<template>
    <div v-if="$isAMP">
        <div class="container">
            <div v-for="(posts, index) of arrayPosts" :key="index">
                <div class="article" v-for="post in posts" :key="post.id">
                    <nuxt-link :to="`/${post.slug}`" class="article__img">
                        <amp-img
                            :src="post.featured.landscape"
                            layout="responsive"
                            width="990"
                            height="550"
                        />
                    </nuxt-link>
                    <div class="article-header">
                        <nuxt-link
                            class="post-cat"
                            :to="`/${post.category.slug}`"
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
                    <nuxt-link class="article-title" :to="`/${post.slug}`">{{ post.title }}</nuxt-link>

                    <p class="article-content" v-if="post.shortContent">{{ post.shortContent }}[...]</p>

                    <div class="article-author">
                        By:
                        <nuxt-link
                            v-bind:to="`/m/${post.author.slug}/posts`"
                        >{{ post.author.firstName }} {{ post.author.lastName }}</nuxt-link>
                        <time class="published-date">{{ new Date(post.publishedAt).toDateString() }}</time>
                    </div>
                </div>
            </div>
            <!-- <gorizontal-news-card
                v-for="post in posts"
                :key="post.id"
                type="full-block"
                :post="post"
                :background="true"
            />-->
        </div>
    </div>
    <div v-else class="home-page">
        <div v-for="(posts, index) of arrayPosts" :key="index">
            <div class="wrapper-block-news">
                <div class="container">
                    <div class="row top-verdict">
                        <div
                            class="col-lg-4 col-md-6"
                            v-for="post in posts.slice(0, 2)"
                            :key="post.id"
                        >
                            <top-news-card :post="post" />
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="wrapper-title-hot">
                                <h5 class="title-hot">
                                    <span>top verdicts</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-block-news background">
                <div class="container">
                    <div class="row row-flex top-verdict">
                        <div
                            class="col-12 col-sm-6 col-md-4 col-lg-4"
                            v-for="post in posts.slice(2, 5)"
                            :key="post.id"
                        >
                            <default-news-card type="first-block" :post="post" :padding="false" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-block-news">
                <div class="container">
                    <div class="row top-verdict">
                        <div class="col-12 col-md-12 col-lg-8 px-0">
                            <gorizontal-news-card
                                v-for="post in posts.slice(5, 11)"
                                :key="post.id"
                                type="full-block"
                                :post="post"
                                :background="true"
                            />
                        </div>
                        <div class="col-12 col-md-12 col-lg-4 padding-0">
                            <div class="row">
                                <div class="col-12">
                                    <follow-block :posts="true" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-block-news background">
                <div class="container">
                    <div class="row row-flex top-verdict">
                        <div
                            class="col-12 col-sm-12 col-md-12 col-lg-6"
                            v-for="post in posts.slice(11, 15)"
                            :key="post.id"
                        >
                            <gorizontal-news-card
                                type="minimal-block"
                                :post="post"
                                :background="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrapper-block-news">
                <div class="container">
                    <div class="row top-verdict">
                        <div
                            class="col-12 col-sm-12 col-md-6 col-lg-3"
                            v-for="post in posts.slice(15, 19)"
                            :key="post.id"
                        >
                            <default-news-card type="second-block" :post="post" :padding="true" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrapper-block-news" v-if="pagination && pagination.next">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="load-more-wrapper">
                            <span @click="loadMore">{{ loadMoreText }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopNewsCard from "~/components/news/TopNewsCard";
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import GorizontalNewsCard from "~/components/news/GorizontalNewsCard";
import followBlock from "~/components/universal-components/followBlock";

export default {
    components: {
        TopNewsCard,
        DefaultNewsCard,
        GorizontalNewsCard,
        followBlock
    },

    amp: "hybrid",
    ampLayout: "index.amp",

    data() {
        return {
            pagination: null,
            page: 1,
            limit: 19,
            loadMoreText: "load more",
            arrayPosts: []
        };
    },

    created() {
        this.$store.commit("SET_BREADCRUMBS");
        // this.getPosts()
    },
    asyncData({ $axios }) {
        return $axios
            .$get(`/api/posts/?limit=19&page=1`)
            .then(response => {
                let arrayPosts = [response.data];
                let pagination = response.pagination;

                return { arrayPosts, pagination };
            })
            .catch(error => console.error(error));
    },

    jsonld() {
        const webSite = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://celebrityinsider.org",
            name: "Celebrity Insider Inc.",
            description:
                "Top independent celebrity news network with access to breaking celebrity news, celebrity entertainment news, rumors, latest celebrity gossip, hollywood news.",
            potentialAction: {
                "@type": "SearchAction",
                target: "https://celebrityinsider.org/?s={search_term}",
                "query-input": "required name=search_term"
            }
        };

        const organization = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Celebrity Insider Inc.",
            url: "https://celebrityinsider.org",
            sameAs: [
                "https://www.facebook.com/CelebInsider/",
                "https://twitter.com/CelebInsiderorg",
                "https://pinterest.com/celebinsider/",
                "https://plus.google.com/111123435852741909455",
                "https://www.instagram.com/celebrityinsidernews/"
            ],
            email: "support@celebrityinsider.org",
            logo: {
                "@type": "ImageObject",
                url:
                    "https://celebrityinsider.org/wp-content/uploads/2017/05/Celebrity_Insider.jpg",
                height: 60,
                width: 600
            },
            contactPoint: [
                {
                    "@type": "ContactPoint",
                    contactType: "customer service",
                    email: "support@celebrityinsider.org"
                },
                {
                    "@type": "ContactPoint",
                    contactType: "content questions",
                    email: "matthewparker@celebrityinsider.org"
                },
                {
                    "@type": "ContactPoint",
                    contactType: "write on celebrity insider",
                    email: "content@celebrityinsider.org"
                },
                {
                    "@type": "ContactPoint",
                    contactType: "subscription questions",
                    email: "unsubscribe@celebrityinsider.org"
                }
            ]
        };
        return {
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://dev.verdict.org",
            name: "Celebrity Insider Inc.",
            description:
                "Top independent celebrity news network with access to breaking celebrity news, celebrity entertainment news, rumors, latest celebrity gossip, hollywood news.",
            potentialAction: {
                "@type": "SearchAction",
                target: "https://celebrityinsider.org/?s={search_term}",
                "query-input": "required name=search_term"
            }
        };
    },
    // jsonld() {

    //     const organization = {
    //         "@context": "https://schema.org",
    //         "@type": "Organization",
    //         name: "Celebrity Insider Inc.",
    //         url: "https://celebrityinsider.org",
    //         sameAs: [
    //             "https://www.facebook.com/CelebInsider/",
    //             "https://twitter.com/CelebInsiderorg",
    //             "https://pinterest.com/celebinsider/",
    //             "https://plus.google.com/111123435852741909455",
    //             "https://www.instagram.com/celebrityinsidernews/"
    //         ],
    //         email: "support@celebrityinsider.org",
    //         logo: {
    //             "@type": "ImageObject",
    //             url:
    //                 "https://celebrityinsider.org/wp-content/uploads/2017/05/Celebrity_Insider.jpg",
    //             height: 60,
    //             width: 600
    //         },
    //         contactPoint: [
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "customer service",
    //                 email: "support@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "content questions",
    //                 email: "matthewparker@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "write on celebrity insider",
    //                 email: "content@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "subscription questions",
    //                 email: "unsubscribe@celebrityinsider.org"
    //             }
    //         ]
    //     };
    //     return {
    //         "@context": "https://schema.org",
    //         "@type": "Organization",
    //         name: "Celebrity Insider Inc.",
    //         url: "https://celebrityinsider.org",
    //         sameAs: [
    //             "https://www.facebook.com/CelebInsider/",
    //             "https://twitter.com/CelebInsiderorg",
    //             "https://pinterest.com/celebinsider/",
    //             "https://plus.google.com/111123435852741909455",
    //             "https://www.instagram.com/celebrityinsidernews/"
    //         ],
    //         email: "support@celebrityinsider.org",
    //         logo: {
    //             "@type": "ImageObject",
    //             url:
    //                 "https://celebrityinsider.org/wp-content/uploads/2017/05/Celebrity_Insider.jpg",
    //             height: 60,
    //             width: 600
    //         },
    //         contactPoint: [
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "customer service",
    //                 email: "support@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "content questions",
    //                 email: "matthewparker@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "write on celebrity insider",
    //                 email: "content@celebrityinsider.org"
    //             },
    //             {
    //                 "@type": "ContactPoint",
    //                 contactType: "subscription questions",
    //                 email: "unsubscribe@celebrityinsider.org"
    //             }
    //         ]
    //     };
    // },

    methods: {
        loadMore() {
            this.page = this.page + 1;
            this.getPosts();
        },
        getPosts() {
            this.loadMoreText = "loading";
            this.$http
                .get(`/api/posts/?limit=${this.limit}&page=${this.page}`)
                .then(res => {
                    this.arrayPosts.push(res.data.data);
                    this.pagination = res.data.pagination;
                    this.loadMoreText = "load more";
                })
                .catch(error => console.error(error));
        }
    }
};
</script>


