<template>
  <div>
    <div class="col-12 col-lg-auto img">
      <img
        class="default-avatar"
        src="/image/default-avatar-original.png"
		v-if="!post.avatar"
      >
      <img
		class="default-avatar"
	  	v-if="post.avatar"
		v-bind:src="post.avatar.medium"
		>
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
      <div v-if="type === 'following'" class="d-flex justify-content-center justify-content-lg-start">
        <follow-buttons :id="post.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorInfo from '~/components/universal-components/popup-user-info'
import FollowButtons from '~/components/universal-components/Follow-Buttons'

export default {
  components: {
		AuthorInfo,
		FollowButtons
  },
  props: {
	type: String,
	post: Object
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    toggle () {
      this.showPopup = true
    },
    hide () {
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.img {
  display: inline-block;
  vertical-align: top;
  img {
    border-radius: 50%;
    border: 6px solid;
    border-color: #F4F4F4;
  }
}
a {
  line-height: 1.5;
  color: #0a0a0a;
  text-decoration: none;
  margin: .3em 0 0;
  font-size: 1.4em;
  font-weight: 700;
  cursor: pointer;
}
.V-rep {
  align-items: baseline;
  .counterV-rep {
    line-height: 1.5;
    color: #0a0a0a;
    white-space: nowrap;
    box-sizing: inherit;
    font-size: 1.4em;
    font-weight: 600;
    margin-right: 10px;
  }
}
.verdicts-posts {
  vertical-align: bottom;
  font-size: 100%;
  box-sizing: inherit;
  color: #8d8d8d;
  font-weight: 600;
}
.default-avatar {
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: 130px;
}
.aboutAuthor {
  display: inline-block;
}
.follow {
  color: #ff4242;
  margin-right: 5px;
  &:hover {
    background-color: #bc2d2d;
    color: #fff;
  }
}
.unfollow {
  color: #474747;
  border-color:#474747;
  &:hover {
    background-color: #474747;
    color: #fff;
  }
}

.user-popup {
  left: 10px;
  bottom: 127px;
  padding: 1.5em 1.2em 0.8em 1.2em;
  background-color: $white;
  position: absolute;
  z-index: 3;
  max-width: 20em;
  min-height: 300px;
  min-width: 280px;
  width: 100%;
  border: 1px solid $dedede;
  border-radius: 4px;
  opacity: 1;
  -webkit-box-shadow: 2px 4px 16px 0 $shark026;
  box-shadow: 2px 4px 16px 0 $shark026;
  font-family: "Open Sans";
  @media screen and (max-width: 575px) {
    right: 0px;
  }

  &:after {
    content: '';
    border-right: 1px solid $secondary-bgcolor;
    border-bottom: 1px solid $secondary-bgcolor;
    position: absolute;
    bottom: -8px;
    right: 80%;
    background: $whiteFE;
    width: 15px;
    height: 15px;
    z-index: 5;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.click-for-follow {
  font-size: .75rem;
  padding: .55em 1.4em;
  text-transform: none;
  letter-spacing: .9px;
  border-radius: 5px;
  vertical-align: text-top;
  margin-bottom: 0;
  font-weight: 400;
  pointer-events: all;
  background: 0 0;
  border: 1px solid;
  line-height: 1;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
  margin-top: 0.5em;
}
</style>
