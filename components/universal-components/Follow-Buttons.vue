<template>
  <div style="display: contents;">
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

<style lang="scss">
.follow {
  color: #ff4242;
  border-color: #ff4242;
	background-color: #fff;
  &:hover {
    background-color: #bc2d2d;
    color: #fff;
  }
}
.follow-full {
  color: #fff;
  // border-color: #ff4242;
	background-color: #ff4242;
  &:hover {
    background-color: #bc2d2d;
    color: #fff;
  }
}
.unfollow {
	color: #474747;
  border-color: #474747;
	background-color: #fff;

  &:hover {
    background-color: #474747;
    color: #fff;
  }
}
.unfollow-full {
  color: #fff;
  // border-color: #474747;
	background-color: #8d8d8d;
  &:hover {
    background-color: #474747;
    color: #fff;
  }
}
.button-followed {
  font-size: 12px;
  width: 88px;
  height: 28px;
  float: right;
  border: 1px solid;
  border-radius: 5px;
}
</style>
