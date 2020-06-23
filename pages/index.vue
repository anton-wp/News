<template>
    <div>
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

<style lang="scss" scoped>
@import "../assets/utils/variables";
@import "../assets/utils/colors";

.background {
    background-color: $secondary-bgcolor;
}

.row-flex {
    display: flex;
    flex-flow: row wrap;
}

.wrapper-block-news {
    width: 100%;

    .container {
        max-width: $global-width;

        .top-verdict {
            padding: 24px 0;

            .wrapper-title-hot {
                position: relative;
                padding: 0 1.2em;

                .title-hot {
                    position: relative;
                    color: $doveGray;
                    font-size: 1.4em;
                    font-weight: 700;
                    line-height: 16px;
                    width: 100%;

                    span {
                        background-color: $white;
                        position: relative;
                        z-index: 5;
                        padding-right: 5px;
                    }

                    &::after {
                        content: "";
                        position: absolute;
                        display: block;
                        top: 8px;
                        height: 1px;
                        width: 100%;
                        background-color: $doveGray;
                        z-index: 2;
                    }
                }
            }
        }
    }
}

.load-more-wrapper {
    margin-bottom: 3em;
    text-align: center;

    span {
        position: relative;
        font-size: 0.95rem;
        padding: 1.15em 2.8em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        user-select: none;
        border: 1px solid transparent;
        border-radius: 0;
        line-height: 1;
        text-align: center;
        cursor: pointer;
        background-color: $primary_color;
        color: $whiteFE;
        transition: background-color 0.25s ease-out, color 0.25s ease-out;

        &:hover {
            background-color: $button-hover-background;
        }

        &:after {
            content: "";
            position: absolute;
            height: 3px;
            width: 30px;
            left: 2.8em;
            bottom: 0.8em;
            background-color: rgba(255, 255, 255, 0.3);
        }
    }
}

.follow {
    margin: 2em 0;
    padding: 0 28px;

    h5 {
        color: $doveGray;
        font-weight: 700;
        line-height: 16px;
        font-size: 1em;
        margin-bottom: 10px;
        letter-spacing: 1px;
        position: relative;

        span {
            background-color: $white;
            position: relative;
            z-index: 5;
            padding-right: 5px;
        }

        &::before {
            content: "";
            position: absolute;
            display: block;
            top: 8px;
            height: 1px;
            width: 100%;
            background-color: $doveGray;
            z-index: 2;
        }
    }

    .instagram {
        background-color: $millbrook;
    }

    .twitter {
        background-color: $pictonBlue;
    }

    .feed {
        background-color: $flamingo;
    }

    .pinterest {
        background-color: $cardinal;
    }

    .news-icon {
        background-color: $lochmara;
    }

    .facebook {
        background-color: $chambray;
    }

    .social-icon-round {
        width: 45px;
        height: 45px;
        border-radius: 25px;
        position: relative;
        margin: 0 0 15px;
        cursor: pointer;

        .social-icon-in-menu {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
    }
}
</style>





