<template>
  <button class="bookmark" :disabled="disabled" @click="click">
    <svg width="20" height="20" v-if="!$store.state.bookmarks.includes(this.id)">
      <use xlink:href="#bookmark-empty" />
    </svg>
    <svg width="20" height="20" v-if="$store.state.bookmarks.includes(this.id)">
      <use xlink:href="#bookmark" />
    </svg>
  </button>
</template>

<script>
import { mapState } from "vuex";
import LoginPopup from "~/components/layout/LoginPopup";

export default {
  inject: ["id"],
  components: {
    LoginPopup
  },
  data() {
    return {
      disabled: false,
      loginPopupActive: false,
      typeLoginPopup: ""
    };
  },
  methods: {
    LogIn() {
      let data = {
        open: true,
        type: 'logIn'
      };
      this.$store.commit("UPDATE_LIGIN_POPUP", data);
    },
    closeLoginPopup() {
      let data = {
        open: false,
        type: ""
      };
      this.$store.commit("UPDATE_LIGIN_POPUP", data);
    },
    changeLoginPopup(type) {
      this.typeLoginPopup = type;
    },
    click() {
      if (this.$store.state.auth.loggedIn) {
        if (!this.$store.state.bookmarks.includes(this.id)) {
          this.bookmarkAdd();
        } else {
          this.bookmarkDelete();
        }
      } else {
        this.LogIn();
      }
    },
    bookmarkAdd() {
      this.disabled = true;
      this.$http
        .post(`/api/${this.id}/add-bookmark`)
        .then(res => {
          this.$store.commit("ADD_BOOKMARK", this.id);
          this.$toasted.show(res.data.message);
          this.disabled = false;
          if (
            this.$store.getters.IS_TABS.filter(tab => tab.title === "Bookmarks")
              .length > 0
          ) {
            this.$store.commit("UPDATE_COUNTER_TABS", {
              title: "Bookmarks",
              type: true
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    bookmarkDelete() {
      this.disabled = true;
      this.$http
        .delete(`/api/${this.id}/remove-bookmark`)
        .then(res => {
          this.$store.commit("DEL_BOOKMARK", this.id);
          this.$toasted.show(res.data.message);
          this.disabled = false;
          if (
            this.$store.getters.IS_TABS.filter(tab => tab.title === "Bookmarks")
              .length > 0
          ) {
            this.$store.commit("UPDATE_COUNTER_TABS", {
              title: "Bookmarks",
              type: false
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

