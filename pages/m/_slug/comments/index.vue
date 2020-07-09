<template>
  <div class="component-following">
    <div class="container">
      <div v-if="posts.length > 0" class="row">
        <div class="col-12 sort">
          <span class="verdicts-posts">Sort by:</span>
          <button
            class="click-for-follow follow"
            :class="sort === 'DESC' ? 'active' : ''"
            @click="updateSort('DESC')"
          >latest</button>
          <button
            class="click-for-follow follow"
            :class="sort === 'ASC' ? 'active' : ''"
            @click="updateSort('ASC')"
          >top voted</button>
        </div>
        <!-- <default-news-card
          class="col-12 col-md-6 col-lg-4"
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :padding="true"
        /> -->
        <div v-if="pagination.next" class="col-12 button-block">
          <button class="loadMore" @click="morePosts">Load More</button>
        </div>
      </div>
			<not-found v-if="posts.length === 0"/>
    </div>
  </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import NotFound from "~/components/profile/not-found";

export default {
  layout: "author",
  components: {
		DefaultNewsCard,
		NotFound
  },
  props: {
    type: String
  },
  data() {
    return {
      posts: [],
      pagination: Object,
      sort: "DESC",
      page: 1,
      path: ""
    };
  },
  created() {
    if (this.type === "author") {
      this.path = `author/${this.$route.params.slug}`;
    } else {
      this.path = `profile/`;
    }

    // this.getPosts();
  },
  methods: {
    // getPosts(more, page) {
    //   if (page) {
    //     this.page = page;
    //   }
    //   this.$http
    //     .get(
    //       `/api/author/${this.$route.params.slug}/posts?sort=${this.sort}&page=${this.page}&limit=12`
    //     )
    //     .then(res => {
    //       console.log(res);
    //       if (!more) {
    //         this.posts = res.data.data;
    //         this.pagination = res.data.pagination;
    //       } else {
    //         this.posts = [...this.posts, ...res.data.data];
    //         this.pagination = res.data.pagination;
    //       }
    //     })
    //     .catch(error => console.error(error));
    // },
    morePosts() {
      this.getPosts("more", this.page + 1);
    },
    updateSort(sort) {
      this.sort = sort;
      this.page = 1;
      this.getPosts();
    }
  }
};
</script>
