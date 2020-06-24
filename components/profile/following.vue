<template>
  <div class="component-following">
    <div class="container">
      <div class="row">
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
        <follower-block
          class="col-sm-6 profile"
          v-for="follow in followers"
          :key="follow.id"
          :post="follow"
          :type="'following'"
        />
        <div class="col-12 button-block">
          <button class="loadMore">Load More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FollowerBlock from "~/components/profile/block-follower";

export default {
  components: {
    FollowerBlock
  },
  props: {
    type: String
  },
  data() {
    return {
      followers: [],
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
    this.getFollowing();
  },
  methods: {
    getFollowing() {
      this.$http
        .get(
          `/api/${this.path}/subscriptions?created=${this.sort}&page=${this.page}&limit=12`
        )
        .then(res => {
          this.followers = res.data.data;
          this.pagination = res.data.pagination;
          // this.sortTabs(res)
        })
        .catch(error => console.error(error));
    },
    updateSort(sort) {
      this.sort = sort;
      this.page = 1;
      this.getFollowing();
    }
  }
};
</script>
