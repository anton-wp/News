<template>
  <div class="profile__feed">
    <div class="sort">
      Filter by
      <select class="form-input select" v-model="sort" @change="sortUpdate">
        <option v-for="(sort, index) of sortArr" :value="sort" :key="index">{{sort.title}}</option>
      </select>
    </div>
    <block-feed v-for="post in dashboard.posts" :data="post" :key="post.id" />
    <pagination
      class="pagination"
      v-if="dashboard.paginations && dashboard.posts.length > 0"
      :pagination="dashboard.paginations"
      @openPage="openPage"
    />
  </div>
</template>


<script>
import Pagination from "~/components/profile/pagination";
import { mapState } from "vuex";
import BlockFeed from "~/components/profile/block-feed";

export default {
  layout: "profile",
  middleware: "auth",
  components: {
    Pagination,
    BlockFeed,
  },
  data() {
    return {
      page: 1,
      posts: [],
      sort: "",
      sortArr: [],
    };
  },
  created() {
    this.getFeed();
    this.getSort();
  },
  computed: {
    ...mapState(["dashboard"]),
  },
  methods: {
    sortUpdate() {
			this.getFeed()
		},
    getSort() {
      this.$axios
        .$get(`/api/profile/feed-resources`)
        .then((res) => {
          this.sortArr = res.data;
        })
        .catch((error) => console.error(error));
    },
    getFeed() {
      this.$store.commit("CLEAR_DASHBOARD_POSTS");
      this.$axios
        .$get(`/api/profile/feed?page=${this.page}${this.sort ? '&resource=' + this.sort.url : ''}`)
        .then((res) => {
          this.posts = res.data;
          this.$store.commit("SET_DASHBOARD_POSTS", res.data);
          this.$store.commit("SET_DASHBOARD_PAGINATIONS", res.pagination);
        })
        .catch((error) => console.error(error));
    },
    openPage(page) {
      this.page = page;
      this.getFeed();
    },
  },
};
</script>

<style lang="scss">
.profile__feed {
  .sort {
    color: #727272;
    font-weight: 600;
    margin-right: 5px;
    font-size: 16px;
    margin-bottom: 10px;

    select {
      display: inline-block;
      width: auto;
      font-weight: 700;
      border: none;
      background: 0 0;
      font-size: 16px;
      line-height: 1.5;
      padding: 5px 15px 5px 5px;
      text-transform: none;
      letter-spacing: inherit;
      border-radius: 0;
      cursor: pointer;
      margin-left: 5px;
    }
  }
}
</style>
