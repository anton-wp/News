<template>
  <div class="search-page">
    <div class="policy-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 padding-0 pl-0">
            <h5 class="search-name">SEARCH RESULTS FOR {{ stringSearch }}</h5>
            <div id="searchForm" class="primary-form">
              <input
								type="search"
                class="search-filed"
                autocomplete="off"
                autocorrect="off"
                min="0"
                v-model="search"
                @keyup.enter="activeSearch"
              />
              <svg width="20" height="20" @click="activeSearch">
                <use xlink:href="#search-icon" />
              </svg>
            </div>
            <div v-for="post in posts" :key="post.id" style="padding: 0 30px 0 15px; margin-bottom: 32px;">
              <gorizontal-news-card type="full-block" :background="true" :post="post" />
            </div>
						<h4 v-if="posts.length === 0">Sorry, nothing was found</h4>
          </div>
          <div class="col-lg-4">
            <follow />
          </div>
        </div>
      </div>
      <div v-if="pagination.next" class="container">
        <div class="row">
          <div class="col-12">
            <div class="load-more-wrapper">
              <span @click="loadMore">load more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Follow from "~/components/universal-components/followBlock.vue";
import GorizontalNewsCard from "~/components/news/GorizontalNewsCard.vue";

export default {
  components: {
    Follow,
    GorizontalNewsCard
  },
  data() {
    return {
      stringSearch: "",
      page: 1,
      limit: 8,
      posts: [],
      search: "",
      pagination: Object
    };
  },
  created() {
    this.$store.commit("SET_BREADCRUMBS", [{ title: "Search" }]);
		this.stringSearch = this.$route.query.q;
		this.search = this.$route.query.q;
    this.getSearch();
  },
  beforeRouteUpdate(to, from, next) {
		this.stringSearch = to.query.q;
		this.search = to.query.q;
    next();
  },
  watch: {
    "$route.query"() {
      this.getSearch();
    }
  },
  methods: {
    getSearch(load) {
      this.$axios
        .$get(
          `/api/posts/?search=${this.stringSearch}&limit=${this.limit}&page=${this.page}`
        )
        .then(res => {
          this.pagination = res.pagination;
          if (load) {
            this.posts = [...this.posts, ...res.data];
          } else {
            this.posts = res.data;
          }
        })
        .catch(error => console.error(error));
    },
    loadMore() {
      this.page = this.page + 1;
      this.getSearch(true);
    },
    activeSearch() {
      if (this.search) {
        this.$router.push({ path: "/search", query: { q: this.search } });
      }
    }
  }
};
</script>
