<template>
  <div class="container">
    <div class="row">
      <div v-for="notif in data" :key="notif.id" style="width: 100%;">
        <notification-block
          class="col-12"
          v-if="notif.data"
          :data="notif"
          @deleteNotif="deleteNotif"
        />
      </div>
    </div>
    <!-- v-if="dashboard.paginations && dashboard.posts.length > 0" -->
    <pagination
      class="pagination"
      v-if="paginations  && paginations.pagesCount > 1"
      :pagination="paginations"
      @openPage="openPage"
    />
    <not-found v-if="data.length === 0" />
  </div>
</template>

<script>
import NotificationBlock from "~/components/profile/block-notification";
import Pagination from "~/components/profile/pagination";
import NotFound from "~/components/profile/not-found";

export default {
  layout: "profile",
  middleware: "auth",
  components: {
    Pagination,
    NotificationBlock,
    NotFound,
  },
  data() {
    return {
      data: [],
      paginations: Object,
      page: 1,
    };
  },
  created() {
    this.getNotifications();
  },
  methods: {
    openPage(page) {
      this.page = page;

      this.getNotifications();
    },

    readNotif() {
      let ids = [];
      this.data.map((notif) => {
        if (!notif.checked) {
          ids.push(notif.id);
        }
      });
      if (ids.length > 0) {
        this.$axios
          .$post(`/api/profile/notifications/read`, { ids: ids })
          .then((res) => {
            this.data.map((notif) => {
              if (ids.includes(notif.id)) {
                notif.checked = true;
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    deleteNotif(id) {
      this.data = this.data.filter((notif) => notif.id !== id);
    },

    getNotifications() {
      this.$axios
        .$get(`/api/profile/notifications?page=${this.page}`)
        .then((res) => {
          this.data = res.data;
          this.paginations = res.pagination;
          this.readNotif();
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
