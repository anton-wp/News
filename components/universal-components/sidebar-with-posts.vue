<template>
  <div class="sidebar-with-posts">
    <div class="trigger-type-posts">
      <span class="trigger" :class="type === 'top' ? 'activeTab' : ''" @click="getPost('top')">top</span>
      <span
        class="trigger"
        :class="type === 'latest' ? 'activeTab' : ''"
        @click="getPost('latest')"
      >latest</span>
    </div>
    <div class="row wrapper-side-post">
      <div class="col-12 col-md-4 col-lg-12 px-0" v-for="post in posts" :key="post.id">
        <default-news-card :post="post" :padding="true" :image="true" />
        <!-- <default-news-card :padding="true" />
        <default-news-card :padding="true" />-->
        <!-- <vrd-vdc type="second-block" [defaultPost]="post" [padding]="true"></vrd-vdc> -->
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
      posts: [],
      type: ""
    };
  },
  beforeMount() {
    this.getPost("top");
  },
  methods: {
    getPost(type) {
      if (this.type !== type) {
        this.type = type;
        this.$axios
          .$get(`/api/posts/query/sidebar?termSlug=&type=${type}&limit=3`)
          .then(res => {
            this.posts = res.data;
          })
          .catch(error => console.error(error));
      }
    }
  }
};
</script>

