<template>
  <div class="category-layout">
    <div class="policy-wrapper animation">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <h1 class="category-page-title">{{term.name}}</h1>
            <div class="row" v-for="(data, index) in posts" :key="index">
              <div class="col-12" v-for="post in data.slice(0, 1)" :key="post.id">
                <top-news-card :tag="tag" padding :post="post" />
              </div>
              <div class="col-12 col-lg-6" v-for="post in data.slice(1, 3)" :key="post.id">
                <default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
              </div>
              <div class="col-12" v-for="post in data.slice(3, 6)" :key="post.id">
                <gorizontal-news-card
                  type="full-block"
                  :tag="tag"
                  :post="post"
                  :background="false"
                />
              </div>
              <div class="col-12" v-for="post in data.slice(6, 7)" :key="post.id">
                <top-news-card :post="post" :tag="tag" />
              </div>
              <div class="col-12 col-lg-6" v-for="post in data.slice(7, 9)" :key="post.id">
                <default-news-card type="first-block" :tag="tag" :post="post" :padding="true" />
              </div>
              <div class="col-12" v-for="post in data.slice(9, 12)" :key="post.id">
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
          <div class="col-lg-4">
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
    FollowBlock
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
    term: Object
  },
  created() {
    this.loadMoreText = `more ${
      this.term.name === "news" ? "" : this.term.name
    } news`;
    this.$store.commit("SET_BREADCRUMBS", [{ title: this.term.name }]);
  },
  mounted() {
    this.posts.push(this.data);
    this.paginations = this.pagination;
    if (this.tag) {
      this.api = "tags/";
    }
  },
  methods: {
    getPosts() {
      this.loadMoreText = "loading";
      this.$http
        .get(
          `/api/${this.api}${this.slug}?limit=${this.limit}&page=${this.page}`
        )
        .then(({ data }) => {
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

