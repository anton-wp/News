<template>
  <div class="container">
    <div class="row">
      <notification-block class="col-12" v-for="(notif, index) in data" :key="index" :data="notif" />
    </div>
    <!-- v-if="dashboard.paginations && dashboard.posts.length > 0" -->
    <pagination
      class="pagination"
      v-if="paginations"
      :pagination="paginations"
      @openPage="openPage"
    />
  </div>
</template>

<script>
// import NotificationBlock from "~/components/profile/block-notification";
import NotificationBlock from "~/components/profile/block-notification";
import Pagination from "~/components/profile/pagination";

export default {
  layout: "profile",
  middleware: "auth",
  components: {
    // NotificationBlock,
    Pagination,
    NotificationBlock,
  },
  data() {
    return {
      data: [],
      paginations: Object,
    };
  },
  created() {
    this.getNotifications();

	},
  methods: {
    openPage() {
      console.log(1243);
		},

    getNotifications() {
      this.$axios
        .$get("/api/profile/notifications")
        .then((res) => {
          console.log(res);
          this.data = res.data;
          this.paginations = res.paginations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
</style>
