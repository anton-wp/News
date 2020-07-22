<template>
  <div v-if="$isAMP">
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
      <nuxt-link
        :to="'/amp/' + menuLink.path"
        v-for="(menuLink, index) of headerMenu"
        :key="index"
      >{{ menuLink.title }}</nuxt-link>
    </amp-sidebar>

    <div class="container">
      <div v-for="(posts, index) of arrayPosts" :key="index">
        <div class="article" v-for="post in posts" :key="post.id">
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
            <nuxt-link class="post-cat" :to="`/amp/${post.category.slug}`">{{ post.category.name }}</nuxt-link>

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
          <div class="row top-verdict pt-3 pt-md-5 pb-md-4">
            <div class="col-12 col-lg-4 col-md-6" v-for="post in posts.slice(0, 2)" :key="post.id">
              <top-news-card :post="post" />
            </div>
            <div class="col-12 col-lg-4 col-md-6 col-12 pt-3 pt-md-0">
              <div v-if="index === 0" class="wrapper-title-hot">
                <h5 class="title-hot">
                  <span>top verdicts</span>
                </h5>
									<block-verdict-home v-for="verdict in verdictTop" :key="verdict.id" :data="verdict" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-block-news background">
        <div class="container">
          <div class="row row-flex top-verdict pt-0 pb-0 pt-md-5 pb-md-5">
            <div class="col-12 col-md-4 col-lg-4" v-for="post in posts.slice(2, 5)" :key="post.id">
              <default-news-card type="first-block" :post="post" :padding="false" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-block-news">
        <div class="container">
          <div class="row pb-0 pb-md-3 pt-0 pt-md-5">
            <div class="col-12 col-md-12 col-lg-8 px-0 px-md-3">
              <gorizontal-news-card
                v-for="post in posts.slice(5, 11)"
                :key="post.id"
                type="full-block"
                :post="post"
                :background="true"
              />
            </div>
            <div class="col-12 col-md-12 col-lg-4 px-0 pl-md-5 pr-md-2 pr-xl-0">
              <div class="row">
                <div class="col-12">
                  <follow-block v-if="index === 0" :posts="true" />
                  <SidebarWithRecent v-if="index === 0" />
                  <default-news-card
                    v-else
                    v-for="post in posts.slice(19, 23)"
                    :key="post.id"
                    type="first-block"
                    :post="post"
                    :padding="true"
										:image="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-block-news background">
        <div class="container">
          <div class="row row-flex py-0 pt-md-5 pb-md-4">
            <div
              class="col-12 col-sm-12 col-md-12 col-lg-6"
              v-for="post in posts.slice(11, 15)"
              :key="post.id"
            >
              <gorizontal-news-card type="minimal-block" :post="post" :background="true" />
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-block-news">
        <div class="container">
          <div class="row pt-0 md-0 pt-md-5 pb-md-4">
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
import SidebarWithRecent from "~/components/universal-components/sidebar-with-recent";
import BlockVerdictHome from "~/components/universal-components/block-verdict-home";

export default {
  components: {
    TopNewsCard,
    DefaultNewsCard,
    GorizontalNewsCard,
    followBlock,
    SidebarWithRecent,
		BlockVerdictHome
  },

  amp: "hybrid",
  ampLayout: "default.amp",

  data() {
    return {
      pagination: null,
      page: 1,
      limit: 19,
      loadMoreText: "load more",
      arrayPosts: [],
			headerMenu: null,
			verdictTop: []
    };
  },

  created() {
    this.$store.commit("SET_BREADCRUMBS");
    this.getVerdictTop();
    // this.$store.commit("SET_HEADER_MENU", this.menu);
    // this.$store.commit("SET_HEADER_HOT_NEWS", this.tags);

    // this.getPosts()
  },

  async asyncData({ $axios, params }) {
    const homePageInfo = await $axios.$get(`/api/home`);

    let arrayPosts = [homePageInfo.data.posts.items];
    let pagination = homePageInfo.data.posts.pagination;
    let menu = homePageInfo.data.menu;
    let tags = homePageInfo.data.tags;

    const headerMenu = await $axios.$get(`/api/menu/header`);

    return {
      arrayPosts: arrayPosts,
      pagination: pagination,
      menu: menu,
      tags: tags,
      headerMenu: headerMenu.data
    };
  },
  methods: {
    getVerdictTop() {
      this.$axios
        .$get("/api/comments/verdicts/top")
        .then(res => {
					this.verdictTop = res.data
          // console.log(res);
        })
        .catch(error => console.error(error));
    },
    loadMore() {
      this.page = this.page + 1;
      this.limit = 23;
      this.getPosts();
    },
    getPosts() {
      this.loadMoreText = "loading";
      this.$axios
        .$get(`/api/posts/?limit=${this.limit}&page=${this.page}`)
        .then(res => {
          this.arrayPosts.push(res.data);
          this.pagination = res.pagination;
          this.loadMoreText = "load more";
        })
        .catch(error => console.error(error));
    }
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
  }
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
};
</script>


