<template>
  <div class="popup-wrapper-user-info">
    <div class="contentModal" v-if="!loading">
      <div class="header-user-popup container">
        <div class="row">
          <div class="col-8 col-padding-0">
            <!-- TODO go to user -->
            <nuxt-link
              class="user-name-span"
              v-bind:to="`/m/${modal.slug}/posts`"
            >{{modal.displayName}}</nuxt-link>
            <span class="user-role-span">{{modal.rank}}</span>
            <span class="v-rap-span">
              <span class="count-vraps">{{modal.points}}</span>
              V-Rap
            </span>
            <span class="stat">
              <!-- postsCount  -->
              {{modal.newsCount}} posts /
              <!-- verdictsCount  -->
              {{modal.verdictsCount}} verdicts
            </span>
          </div>
          <div class="col-4 col-padding-0 img-wrapper">
            <img
              src="/image/default-avatar-original.png"
              class="user-avatar"
              v-if="!modal.avatar.small"
            />
            <img :src="modal.avatar.small" class="user-avatar" v-if="modal.avatar.small" />
          </div>
        </div>
      </div>
      <div class="latest-posts">
        <div>
          <p class="latest-posts-title">latest posts:</p>
          <ol class="latest-posts-list">
            <li class="latest-posts-titles" v-for="(post, index) in modal.latestNews" :key="index">
              <nuxt-link v-bind:to="`/${post.slug}`">{{++index}}. {{post.title}}...</nuxt-link>
            </li>
          </ol>
        </div>
      </div>
      <div class="followed-people-count-wrapper">
        <span>Followed by {{modal.followers}} people</span>
        <follow-buttons :id="modal.id" />
      </div>
    </div>
    <div class="cssload-container" v-if="loading">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FollowButtons from "~/components/universal-components/Follow-Buttons";

export default {
  components: {
    FollowButtons
  },
  computed: {
    ...mapState(["modal"])
  },
  props: {
    authorId: String
  },
  data() {
    return {
      loading: false,
      authorHttp: {
        authorId: String
      }
    };
  },
  created() {
    if (this.modal && this.modal.id !== this.authorId) {
      this.getModal();
    }
  },
  methods: {
    getModal() {
      this.loading = true;
      this.authorHttp.authorId = this.authorId;
      this.$axios
        .$get(`/api/author/${this.authorId}/modal`)
        .then(responce => {
          this.loading = false;
          this.$store.dispatch("GET_MODAL", responce.data);
        })
        .catch(error => {
          // this.loading = false;
          // this.errorMessage = error.response.data.message;
        });
    }
  }
};
</script>
