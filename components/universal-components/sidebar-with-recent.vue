<template>
  <div class="sidebar-with-posts pr-2">
    <div class="trigger-type-posts">
      <span class="trigger">recent verdicts</span>
    </div>
    <div class="row wrapper-side-post">
      <div
        class="col-12 col-md-4 col-lg-12 px-0 sidebar__with__recent"
        v-for="post in posts"
        :key="post.id"
      >
        <default-news-card :post="post" :padding="true" />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";

export default {
  components: {
    DefaultNewsCard
  },
  data() {
    return {
      posts: []
    };
  },
  beforeMount() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.$axios
        .$get(`/api/comments/verdicts/resent`)
        .then(res => {
          this.posts = res.data;
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

