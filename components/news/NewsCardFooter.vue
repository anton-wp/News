<template>
  <div class="news-card-footer">
    <div class="row wrapp" @mouseleave="hide">
      <span class="bywho">
        <div v-if="showPopup" id="1" class="user-popup active">
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
          >{{ author.firstName }} {{ author.lastName }}</span>
        </nuxt-link>
        <time class="author">{{ new Date(this.publishedAt).toDateString() }}</time>
        <br />
        <button class="button-edit" v-if="pending">
          <svg width="15" height="15">
            <use xlink:href="#pencil" />
          </svg>
          Edit
        </button>
        <div v-if="tag" class="marks">
          <news-card-header-marks :colorScheme="colorScheme" :pending="false" />
        </div>
      </span>

      <!-- // after do make role in profile -->

      <!-- <a v-if="$store.getters.USER_TYPE === 'super-admin'" class="action">
            <svg width="12" height="15">
                <use xlink:href="#trash" />
            </svg>
            delete
      </a>-->
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
    tag: Boolean
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

