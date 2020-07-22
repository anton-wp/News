<template>
  <div class="page__default">
    <custom-svg />
    <app-header />
    <div class="container-fluid error-layout page__content">
      <div class="row">
        <div class="col-12">
          <div class="content-404">
            <svg class="img404">
              <use xlink:href="#error404" />
            </svg>
            <h2>not found!</h2>
            <p>
              We're sorry, the page you have looked for does not exist in our content! Perhaps you would like to go
              to our homepage or try searching below.
            </p>
            <div class="search-form" id="addPostForm">
              <div class="form-body">
                <div class="search-input-wrapper">
                  <input
                    v-model="search"
                    type="search"
                    formControlName="search"
                    autocomplete="off"
                    name="q"
                    placeholder="Search"
                    @keyup.enter="activeSearch"
                  />
                  <button class="clear" type="button">
                    <nuxt-link :to="{ path: '/search', query: { q: search }}">
                      <i class="icons color-primary">
                        <svg width="20" height="20">
                          <use xlink:href="#search-icon" />
                        </svg>
                      </i>
                    </nuxt-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="col-12">
      <h1 class="category-page-title">latest news</h1>
        </div>-->

        <div class="col-12 content">
          <div class="row">
            <div class="col-12">
              <h1 class="category-page-title">latest news</h1>
            </div>
            <div
              class="col-sm-12 col-md-6 col-lg-3"
              v-for="post of posts.slice(0, 4)"
              :key="post.title"
            >
              <default-news-card type="first-block" :post="post" :padding="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import CustomSvg from "~/components/module/CustomSvg";
import AppHeader from "~/components/layout/AppHeader";
import AppFooter from "~/components/layout/AppFooter";

export default {
  name: "errorCustom",
  components: {
    CustomSvg,
    AppHeader,
    AppFooter,
    DefaultNewsCard
  },
  data() {
    return {
      search: "",
      posts: []
    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    activeSearch() {
      if (this.search) {
        this.$router.push({ path: "/search", query: { q: this.search } });
      }
    },
    getPosts() {
      this.$axios
        .$get(`/api/posts/?limit=4`)
        .then(data => {
          this.posts = data.data;
        })
        .catch(error => {
          this.$router.push("/");
        });
    }
  }
};
</script>
