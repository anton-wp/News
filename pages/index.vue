<template>
  <div class="home-page">
    <div v-for="(posts, index) of arrayPosts" :key="index">
      <div class="wrapper-block-news">
        <div class="container">
          <div class="row top-verdict">
            <div class="col-lg-4 col-md-6" v-for="post in posts.slice(0, 2)" :key="post.id">
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
              <gorizontal-news-card type="minimal-block" :post="post" :background="true" />
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
  	return $axios.$get(`/api/posts/?limit=19&page=1`)
  		.then((response) => {
  			let arrayPosts = [response.data];
  			let pagination = response.pagination;

  			return { arrayPosts, pagination }
  		})
  		.catch(error => console.error(error))
  },
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


