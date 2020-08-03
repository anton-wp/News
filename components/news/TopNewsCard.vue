<template>
  <div class="top-news-card" :class="padding ? 'category' : ''">
    <div class="wrapper-hot-card">
      <nuxt-link class="img" :title="post.title" :to="`/${post.slug}`">
        <img v-bind:src="post.featured.wide" alt="top news" />
      </nuxt-link>
      <div class="container info">
        <div class="position__verdict__top" v-if="post.verdictValue">
          <block-verdict :verdict="post.verdictValue" />
        </div>
        <news-card-header v-if="!tag" colorScheme="light" :post="post" :category="post.category" />
        <nuxt-link class="wrapp" :title="post.title" :to="`/${post.slug}`">
          <h2 class="title top-title">{{ post.title }}</h2>
        </nuxt-link>
        <div v-if="!home" class="shortContent">
          <p>{{post.shortContent}}[...]</p>
        </div>
        <div v-else class="shortContent shortContent-home">
          <p>{{post.shortContent}}</p>
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
    BlockVerdict,
  },
  props: {
    post: Object,
    category: Boolean,
    tag: Boolean,
		padding: Boolean,
		home: Boolean,
  },
  provide() {
    return {
      id: this.post.id,
    };
  },
};
</script>
