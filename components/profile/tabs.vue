<template>
  <ul class="tabs">
    <li class="menu" v-for="item in $store.state.tabs" :key="item.title">
      <nuxt-link class="link" v-bind:to="item.children ? '' : `${path}${item.path}`">
        <span
          class="menu-block"
          :class="item.status ? 'active-tab' : ''"
          @click="item.children ? openCloseTabs(item.title) : activTabsUpdate(item.path)"
        >
          <svg width="20" height="20">
            <use v-bind:xlink:href="`#${item.title}`" />
          </svg>

          <span class="title">
            {{ item.title }}
            <span class="counter" v-if="item.counter > 0">({{ item.counter }})</span>
          </span>

          <svg
            class="icon"
            :class="item.status ? 'open' : ''"
            v-if="item.children"
            width="17"
            height="17"
          >
            <use xlink:href="#caret-down" />
          </svg>
        </span>
      </nuxt-link>
      <ul class="blockSubMenu" v-if="item.children && item.status">
        <li class="subMenu" v-for="subTabs in item.children" :key="subTabs.title">
          <nuxt-link class="link" v-bind:to="subTabs.path === '/add' ? `${subTabs.path}` : `${path}${subTabs.path}`">
            <span
              class="subtitle"
              :class="subTabs.status ? 'active-tab' : ''"
              @click="activTabsUpdate(subTabs.path)"
            >
              {{ subTabs.title }}
              <span
                class="counter"
                v-if="subTabs.counter"
              >({{ subTabs.counter }})</span>
            </span>
          </nuxt-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { log } from "util";

export default {
  data() {
    return {
      slug: String,
      path: "/profile",
      type: Boolean
    };
  },
  watch: {
    "$route.path"() {
      this.activTabsStart(this.$store.state.tabs);
    }
  },
  methods: {
    openCloseTabs(id) {
      this.$store.dispatch("OPEN_CLOSE_TABS", id);
    },
    activTabsStart(res, rout2, rout3) {
      let rout = [];
      if (!rout2) {
        if (this.typeTabs()) {
          let str = "";
          rout = this.$route.path.split("/");
          rout = rout.map(rout => (rout = str.concat("/", rout)));
          rout = rout.map(rout => (rout === "/" ? (rout = undefined) : rout));
        } else {
          let str = "";
          rout = this.$route.path.split("/");
          rout = rout.map(rout => (rout = str.concat("/", rout)));
          rout = rout.slice(1, 5);
        }
      } else {
        rout[2] = rout2;
        rout[3] = rout3;
      }
      res.map(data => {
        if (data.path === rout[2]) {
          data.status = true;
          if (data.children && rout[3]) {
            data.children.map(tab =>
              tab.path === rout[2] + rout[3]
                ? (tab.status = true)
                : (tab.status = false)
            );
          }
          if (data.children && !rout[3]) {
            data.children.map(tab =>
              tab.path === rout[3] || tab.path === rout[2]
                ? (tab.status = true)
                : (tab.status = false)
            );
          }
        } else {
          data.status = false;
          if (data.children) {
            data.children.map(tab => (tab.status = false));
          }
        }
      });
      this.$store.dispatch("GET_TABS", res);
    },
    activTabsUpdate(id) {
      let str = "";
      let rout = id.split("/");
      rout = rout.map(rout => (rout = str.concat("/", rout)));
      this.activTabsStart(this.$store.state.tabs, rout[1], rout[2]);
    },
    sortTabs(res) {
      let example = {
        Dashboard: 0,
        Comments: 1,
        Posts: 2,
        Bookmarks: 3,
        Followers: 4,
        Following: 5,
        Notifications: 6,
        Settings: 7
      };
      let dasboard = {
        Notes: 0,
        Posts: 1,
        Draftposts: 2,
        Comments: 3,
        Verdicts: 4,
        Blocked: 5,
        Tags: 6,
        AdminDashboard: 7
      };
      let comments = {
        Verdicts: 0,
        AllComments: 1,
        Replies: 2,
        Subscribed: 3
      };
      let posts = {
        Published: 0,
        Pending: 1,
        Declined: 2,
        Scheduled: 3,
        Draft: 4,
        AddPost: 5
      };
      let childrenDashboard;
      let childrenComments;
      let childrenPosts;

      res.data.map(tab =>
        tab.title === "Dashboard" ? (childrenDashboard = tab.children) : null
      );
      res.data.map(tab =>
        tab.title === "Comments" ? (childrenComments = tab.children) : null
      );
      res.data.map(tab =>
        tab.title === "Posts" ? (childrenPosts = tab.children) : null
      );

      if (childrenDashboard) {
        childrenDashboard.map(
          res => (res["sort"] = res.title.replace(/\s+/g, ""))
        );
        childrenDashboard.sort((l, r) => dasboard[l.sort] - dasboard[r.sort]);
      }

      if (childrenComments) {
        childrenComments.map(
          res => (res["sort"] = res.title.replace(/\s+/g, ""))
        );
        childrenComments.sort((l, r) => comments[l.sort] - comments[r.sort]);
      }

      if (childrenPosts) {
        childrenPosts.map(res => (res["sort"] = res.title.replace(/\s+/g, "")));
        childrenPosts.sort((l, r) => posts[l.sort] - posts[r.sort]);
      }

      res.data.sort((l, r) => example[l.title] - example[r.title]);
      this.activTabsStart(res.data);
    },
    getTabsFull() {
      this.$axios
        .$get(`/api/profile/tabs`)
        .then(res => {
          this.sortTabs(res);
        })
        .catch(error => console.error(error));
    },
    getTabs() {
      this.$axios
        .$get(`/api/author/${this.slug}/tabs`)
        .then(res => {
          this.sortTabs(res);
        })
        .catch(error => console.error(error));
    },
    typeTabs() {
      switch (this.$route.matched[0].components.default.extendOptions.layout) {
        case "author":
          return false;
        default:
          return true;
      }
    }
  },
  created() {
    this.type = this.typeTabs();
    if (this.typeTabs() && !this.$store.state.profile.id) {
      this.getTabsFull();
      this.path = "/profile";
    } else if (this.typeTabs() && this.$store.state.profile.id) {
      this.activTabsStart(this.$store.state.tabs);
      this.path = "/profile";
    } else if (!this.typeTabs()) {
      this.slug = this.$route.params.slug;
      this.path = `/m/${this.slug}`;
      this.getTabs();
    }
  },
  destroyed() {
    if (!this.type) {
      this.$store.dispatch("CLEAR_PROFILE");
    }
  }
};
</script>
