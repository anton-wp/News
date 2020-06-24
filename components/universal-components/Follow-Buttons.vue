<template>
  <div class="follow-buttons">
    <button
      class="button-followed" :class="full ? 'follow-full' : 'follow'"
      v-if="!$store.state.subscriptions.includes(this.id) && !loading"
      @click="Subscribe"
    >Follow</button>
    <button
      class="button-followed unfollow" :class="full ? 'unfollow-full' : 'unfollow'"
      v-if="$store.state.subscriptions.includes(this.id) && !loading"
      @click="Unsubscribe"
    >Unfollow</button>
    <button class="button-followed unfollow" v-if="loading">Loading</button>
  </div>
</template>

<script>
export default {
  props: {
		id: String,
		full: Boolean,
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    Unsubscribe() {
      this.loading = true;
      this.$http
        .post(`/api/author/unsubscribe`, { authorId: this.id })
        .then(responce => {
          this.$store.commit("DEL_SUBSCRIPTION", this.id);
          this.$toasted.show(responce.data.message);
					this.loading = false;
					if(this.$store.getters.IS_TABS.filter(tab => tab.title === 'Following').length > 0) {
						this.$store.commit('UPDATE_COUNTER_TABS', { title: 'Following', type: false});
					}
        })
        .catch(error => console.log(error));
    },
    Subscribe() {
      this.loading = true;
      this.$http
        .post(`/api/author/subscribe`, { authorId: this.id })
        .then(responce => {
          this.$store.commit("ADD_SUBSCRIPTION", this.id);
          this.$toasted.show(responce.data.message);
					this.loading = false;
					if(this.$store.getters.IS_TABS.filter(tab => tab.title === 'Following').length > 0) {
						this.$store.commit('UPDATE_COUNTER_TABS', { title: 'Following', type: true});
					}
        })
        .catch(error => {});
    }
  }
};
</script>
