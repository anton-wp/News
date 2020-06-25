<template>
  <div class="top-news-card">
    <div class="wrapper-hot-card" :class="padding ? 'category' : ''">
      <nuxt-link class="img" :to="`/${post.slug}`">
        <img v-bind:src="post.featured.wide" alt="top news">
      </nuxt-link>
      <div class="container info">
        <news-card-header v-if="!tag" colorScheme="light" :category="post.category" />
        <nuxt-link class="wrapp" :to="`/${post.slug}`">
          <h2 class="title top-title">
            {{ post.title }}
          </h2>
        </nuxt-link>
        <div class="shortContent">
          <p>{{post.shortContent}}[...]</p>
        </div>
      	<news-card-footer :author="post.author" :tag="tag" :publishedAt="post.publishedAt" colorScheme="light" :pending="false" :showMarks="false" />
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardHeader from '~/components/news/NewsCardHeader'
import NewsCardFooter from '~/components/news/NewsCardFooter'
export default {
  components: {
    NewsCardHeader,
    NewsCardFooter
  },
  props: {
    post: Object,
		category: Boolean,
		tag: Boolean,
		padding: Boolean
	},
	provide() {
		return {
			id: this.post.id,
		}
	}
}
</script>
