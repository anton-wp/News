<template>
  <div class="block-follower">
    <div class="col-12 col-lg-auto img">
      <img class="default-avatar" src="/image/default-avatar-original.png" v-if="!post.avatar" />
      <img class="default-avatar" v-if="post.avatar" v-bind:src="post.avatar.medium" />
    </div>
    <!-- добавить данные для запроса модального окна, по примеру из списка постов -->
    <div class="col-12 col-lg-auto aboutAuthor" @mouseleave="hide">
      <div class="user-popup" v-if="showPopup">
        <author-info :authorId="post.id" />
      </div>
      <span class="d-flex justify-content-center justify-content-lg-start" @mouseover="toggle">
        <nuxt-link v-bind:to="`/m/${post.slug}/posts`">{{post.firstName}} {{post.lastName}}</nuxt-link>
      </span>
      <div class="d-flex justify-content-center justify-content-lg-start V-rep">
        <span class="counterV-rep">{{post.points}}</span>
        <span>V-rep</span>
      </div>
      <div class="d-flex justify-content-center justify-content-lg-start">
        <span class="verdicts-posts">
          {{post.verdictsCount}} verdicts /
          {{post.postsCount}} posts
        </span>
      </div>
      <div
        v-if="type === 'following'"
        class="d-flex justify-content-center justify-content-lg-start"
      >
        <follow-buttons :id="post.id" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorInfo from "~/components/universal-components/popup-user-info";
import FollowButtons from "~/components/universal-components/Follow-Buttons";

export default {
  components: {
    AuthorInfo,
    FollowButtons
  },
  props: {
    type: String,
    post: Object
  },
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    toggle() {
      this.showPopup = true;
    },
    hide() {
      this.showPopup = false;
    }
  }
};
</script>
