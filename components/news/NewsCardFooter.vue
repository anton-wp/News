<template>
  <div class="news-card-footer">
    <div class="row wrapp" @mouseleave="hide">
      <span class="bywho">
				 <div v-if="showPopup" id="1" class="user-popup active" :class="bottom ? 'user-popup__bottom' : ''">
          <div>
            <popup-user-info :authorId="author.id" />
          </div>
        </div>
        <span v-if="!pending">By:</span>
        <nuxt-link class="username-link" v-bind:to="`/m/${author.slug}/posts`">
          <span
            v-if="!pending"
            id="username-link"
            @mouseover="toggle"
          >&thinsp;{{ author.firstName }} {{ author.lastName }}&thinsp;</span>
        </nuxt-link>
        <time class="author">{{ new Date(this.publishedAt).toDateString() }}</time>
        <!-- <br /> -->
        <button class="button-edit" v-if="pending">
          <svg width="15" height="15">
            <use xlink:href="#pencil" />
          </svg>
          Edit
        </button>
        <div v-if="tag" class="marks">
          <news-card-header-marks :colorScheme="colorScheme" :post="post" :pending="false" />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import PopupUserInfo from "~/components/universal-components/popup-user-info";
import NewsCardHeaderMarks from "~/components/news/NewsCardHeaderMarks";

export default {
  props: {
    colorScheme: String,
    pending: Boolean,
    showMarks: Boolean,
    author: Object,
    publishedAt: String,
		tag: Boolean,
		post: Object,
		bottom: Boolean
  },
  components: {
    PopupUserInfo,
    NewsCardHeaderMarks
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

