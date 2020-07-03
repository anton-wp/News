<template>
  <div class="component-following">
    <div class="container">
      <div v-if="followers.length > 0" class="row">
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
        <div v-if="pagination.next" class="col-12 button-block">
          <button class="loadMore">Load More</button>
        </div>
      </div>
			<not-found v-if="followers.length === 0"/>
    </div>
  </div>
</template>

<script>
import FollowerBlock from "~/components/profile/block-follower";
import NotFound from "~/components/profile/not-found";

export default {
  components: {
		FollowerBlock,
		NotFound
  },
  props: {
		type: String,
		typePage: String
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
		console.log(123)
    if (this.type === "author") {
      this.path = `author/${this.$route.params.slug}`;
    } else {
      this.path = `profile/`;
    }
    this.getFollowing();
  },
  methods: {
    getFollowing() {
      this.$axios
        .$get(
          `/api/${this.path}/${this.typePage}?created=${this.sort}&page=${this.page}&limit=12`
        )
        .then(res => {
          this.followers = res.data;
          this.pagination = res.pagination;
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
