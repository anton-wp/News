<template>
  <div>
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" v-for="post in posts" :key="post.id">
            <draft-post :post="post" />
          </div>
        </div>
      </div>
    </div>
    <pagination v-if="pagination" :pagination="pagination" @openPage="openPage" />
  </div>
</template>

<script>
import DraftPost from "~/components/profile/posts-draft";
import Pagination from "~/components/profile/pagination";

export default {
  components: {
    DraftPost,
    Pagination
  },
  layout: "profile",
  data() {
    return {
      page: 1,
      posts: [],
      pagination: null,
      default: null
    };
  },
  mounted () {
    if (this.$route.query.page) {
      this.page = this.$route.query.page;
    }
    this.getPosts();
  },
  methods: {
    openPage(page) {
      this.page = page;
      this.getPosts();
    },
    query() {
      this.$router.push({
        path: "/profile/posts/draft/",
        query: { page: this.page }
      });
    },
    getPosts() {
			this.$axios
        .$get(`/api/profile/posts?status=Draft&page=${this.page}&limit=12`)
        .then(res => {
					this.posts = res.data;
          this.pagination = res.pagination;
					this.query();
        });
    }
  }
};
</script>

<style lang="scss">
.sort {
  margin-bottom: 20px;
  .verdicts-posts {
    vertical-align: bottom;
    font-size: 100%;
    box-sizing: inherit;
    color: #8d8d8d;
    font-weight: 600;
  }
  .follow {
    color: #ff4242;
    margin-right: 5px;
    &:hover {
      background-color: #bc2d2d;
      color: #fff;
    }
  }
  .verdicts-posts {
    margin-right: 10px;
  }
  .click-for-follow {
    font-size: 0.75rem;
    padding: 0.55em 1.4em;
    text-transform: none;
    letter-spacing: 0.9px;
    border-radius: 5px;
    vertical-align: text-top;
    margin-bottom: 0;
    font-weight: 400;
    pointer-events: all;
    background: 0 0;
    border: 1px solid;
    line-height: 1;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.5em;
  }
}
.block-counter {
  width: 100%;
}
</style>
