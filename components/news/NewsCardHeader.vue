<template>
  <div class="news-card-header">
    <div class="row wrapp" :class="paddingTop ? 'small__height' : '123'">
      <div class="theme-wrapper">
        <span class="theme">
          <nuxt-link
            class="tag-link"
            :class="colorScheme"
            v-bind:to="`/${category.slug}`"
          >{{ category.name }}</nuxt-link>
        </span>
      </div>
      <news-card-header-marks :post="post" :pending="false" />
    </div>
  </div>
</template>

<script>
import NewsCardHeaderMarks from "~/components/news/NewsCardHeaderMarks";
export default {
  components: {
    NewsCardHeaderMarks,
  },
  props: {
    colorScheme: String,
    category: Object,
    paddingTop: Boolean,
    post: Object,
  },
};
</script>
