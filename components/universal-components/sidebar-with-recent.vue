<template>
  <div class="sidebar-with-posts pr-0">
    <div class="trigger-type-posts">
      <span class="trigger px-7">recent verdicts</span>
    </div>
    <div class="row wrapper-side-post mx-0">
      <div
        class="col-12 col-md-4 col-lg-12 px-0 sidebar__with__recent"
        v-for="post in posts"
        :key="post.id"
      >
        <default-news-card :post="post" :padding="true" :image="true"  :paddingTop="paddingTop"/>
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
	props: {
		paddingTop: Boolean,
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

