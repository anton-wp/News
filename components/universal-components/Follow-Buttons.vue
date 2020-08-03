<template>
  <div class="follow-buttons">
    <button
      class="button-followed"
      :class="full ? 'follow-full' : 'follow'"
      v-if="!subscriptions.includes(id) && !loading"
      @click="Subscribe"
      :disabled="disabled()"
    >Follow</button>
    <button
      class="button-followed unfollow"
      :class="full ? 'unfollow-full' : 'unfollow'"
      v-if="subscriptions.includes(id) && !loading"
      @click="Unsubscribe"
    >Unfollow</button>
    <button class="button-followed unfollow" v-if="loading">Loading</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    id: String,
		full: Boolean,
		type: String
  },
  data() {
    return {
      loading: false
    };
  },
  computed: {
    ...mapState(["auth", "subscriptions"])
  },
  methods: {
    disabled() {
			if(this.auth.user) {
				return this.id === this.auth.user.id ? true : false
			}
		},
    Unsubscribe() {
      this.loading = true;
      this.$axios
        .$post(`/api/author/unsubscribe`, { authorId: this.id })
        .then(responce => {
          this.$store.commit("DEL_SUBSCRIPTION", this.id);
          this.$toasted.show(responce.message);
					this.loading = false;
					console.log(this.type)
          if (
            this.$store.getters.IS_TABS.filter(tab => tab.title === "Following")
              .length > 0 && this.type !== 'author'
          ) {
            this.$store.commit("UPDATE_COUNTER_TABS", {
              title: "Following",
              type: false
            });
          }
        })
        .catch(error => console.log(error));
    },
    Subscribe() {
      if (this.$store.state.auth.loggedIn) {
        this.loading = true;
        this.$axios
          .$post(`/api/author/subscribe`, { authorId: this.id })
          .then(responce => {
            this.$store.commit("ADD_SUBSCRIPTION", this.id);
            this.$toasted.show(responce.message);
            this.loading = false;
            if (
              this.$store.getters.IS_TABS.filter(
                tab => tab.title === "Following"
              ).length > 0
            ) {
              this.$store.commit("UPDATE_COUNTER_TABS", {
                title: "Following",
                type: true
              });
            }
          })
          .catch(error => {});
      } else {
        this.LogIn();
      }
    },
    LogIn() {
      let data = {
        open: true,
        type: "logIn"
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    }
  }
};
</script>
