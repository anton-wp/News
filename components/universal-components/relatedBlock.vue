<template>
  <div class="row mx-n2 mx-sm-n3">
    <div class="col-12 col-md-4 px-0 px-md-3" v-for="post of posts.slice(1, 4)" :key="post.id">
      <default-news-card type="first-block" :post="post" :padding="true" />
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
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios
        .$get(`/api/posts/?limit=4`)
        .then((data) => {
          this.posts = data.data;
        })
        .catch(error => {
          this.$router.push("/");
        });
    }
  }
};
</script>
>
