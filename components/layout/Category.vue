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
      <h1>{{term.name}}</h1>

      <div class="article" v-for="post in data" :key="post.id">
        <nuxt-link :to="`/amp/${post.slug}`" class="article__img">
          <amp-img :src="post.featured.landscape" layout="responsive" width="990" height="550" />
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
  </div>
  <div v-else class="category-layout">
    <div class="policy-wrapper animation">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <h1 class="category-page-title mt-0 ml-2 ml-md-0">{{term.name}}</h1>
            <div class="row" v-for="(data, index) in posts" :key="index">
              <div class="col-12 mb-3" v-for="post in data.slice(0, 1)" :key="post.id">
                <top-news-card :tag="tag" padding :post="post" />
              </div>
              <div class="col-12 col-md-6 mb-3" v-for="post in data.slice(1, 3)" :key="post.id">
                <default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
              </div>
              <div class="col-12 mb-3" v-for="post in data.slice(3, 6)" :key="post.id">
                <gorizontal-news-card
                  type="full-block"
                  :tag="tag"
                  :post="post"
                  :background="false"
                />
              </div>
              <div class="col-12 mb-3" v-for="post in data.slice(6, 7)" :key="post.id">
                <top-news-card :post="post" :tag="tag" />
              </div>
              <div class="col-12 col-md-6 mb-3" v-for="post in data.slice(7, 9)" :key="post.id">
                <default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
              </div>
              <div class="col-12 mb-3" v-for="post in data.slice(9, 12)" :key="post.id">
                <gorizontal-news-card
                  type="full-block"
                  :tag="tag"
                  :post="post"
                  :background="false"
                />
              </div>
            </div>
            <div class="container" v-if="paginations.next">
              <div class="row">
                <div class="col-12">
                  <div class="load-more-wrapper">
                    <span @click="loadMore">{{ loadMoreText }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 px-0 pl-md-5">
            <follow-block :posts="false" />
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
import FollowBlock from "~/components/universal-components/followBlock";

export default {
  components: {
    TopNewsCard,
    DefaultNewsCard,
    GorizontalNewsCard,
		FollowBlock,

  },
  data() {
    return {
      posts: [],
      limit: 12,
      page: 1,
      paginations: Object,
      api: "",
      loadMoreText: ""
    };
  },
  props: {
    data: Array,
    slug: String,
    pagination: Object,
    tag: Boolean,
    term: Object,
    headerMenu: Array
  },
  created() {
    this.loadMoreText = `more ${
      this.term.name === "news" ? "" : this.term.name
    } news`;
    this.$store.commit("SET_BREADCRUMBS", [{ title: this.term.name }]);
  },
  mounted() {
		console.log(this.tag)
    this.posts.push(this.data);
    this.paginations = this.pagination;
    if (this.tag) {
      this.api = "tags/";
    }
  },
  methods: {
    getPosts() {
      this.loadMoreText = "loading";
      this.$axios
        .$get(
          `/api/${this.api}${this.slug}?limit=${this.limit}&page=${this.page}`
        )
        .then(data => {
          this.posts.push(data.data);
          this.paginations = data.pagination;
          this.loadMoreText = `more ${
            this.term.name === "news" ? "" : this.term.name
          } news`;
        })
        .catch(error => {
          console.log(error);
        });
    },
    loadMore() {
      this.page = this.page + 1;
      this.getPosts();
    }
  }
};
</script>

