<template>
  <div class="top-news-card">
    <div class="wrapper-hot-card" :class="padding ? 'category' : ''">
      <nuxt-link class="img" :to="`/${post.slug}`">
        <img v-bind:src="post.featured.wide" alt="top news" />
      </nuxt-link>
      <div class="container info">
        <div class="position__verdict__top" v-if="post.verdictValue">
          <block-verdict :verdict="post.verdictValue" />
        </div>
        <news-card-header v-if="!tag" colorScheme="light" :post="post" :category="post.category" />
        <nuxt-link class="wrapp" :to="`/${post.slug}`">
          <h2 class="title top-title">{{ post.title }}</h2>
        </nuxt-link>
        <div class="shortContent">
          <p>{{post.shortContent}}[...]</p>
        </div>
        <news-card-footer
          :author="post.author"
          :tag="tag"
          :post="post"
          :publishedAt="post.publishedAt"
          colorScheme="light"
          :pending="false"
          :showMarks="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardHeader from "~/components/news/NewsCardHeader";
import NewsCardFooter from "~/components/news/NewsCardFooter";
import BlockVerdict from "~/components/universal-components/block-verdict";
export default {
  components: {
    NewsCardHeader,
    NewsCardFooter,
    BlockVerdict
  },
  props: {
    post: Object,
    category: Boolean,
    tag: Boolean,
    padding: Boolean
  },
  provide() {
    return {
      id: this.post.id
    };
  }
};
</script>
