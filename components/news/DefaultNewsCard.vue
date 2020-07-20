<template>
  <article class="default-news-card">
    <div class="picture">
			<div class="position__verdict__default" v-if="post.verdictValue">
				<block-verdict :verdict="post.verdictValue" />
			</div>
      <nuxt-link :to="`/${post.slug}`">
        <img v-bind:src="post.featured.wide">
      </nuxt-link>
      <div class="information" :class="!padding ? 'with-padding' : 'without-padding'">
        <div class="container-fluid">
          <news-card-header v-if="!tag" :category="post.category" :post="post" colorScheme="dark" />
          <div class="row block wrapp">
            <!-- <h2 > -->
              <!-- add go to post page {id} -->
            <nuxt-link class="title" :to="`/${post.slug}`">{{ post.title }}</nuxt-link>
            <!-- </h2> -->
          </div>
          <news-card-footer :author="post.author" :post="post" :tag="tag" :publishedAt="post.publishedAt" colorScheme="light" :pending="false" :showMarks="false" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import NewsCardHeader from '~/components/news/NewsCardHeader'
import NewsCardFooter from '~/components/news/NewsCardFooter'
import BlockVerdict from '~/components/universal-components/block-verdict'
export default {
  props: {
    padding: Boolean,
		post: Object,
		tag: Boolean
  },
  components: {
    NewsCardHeader,
		NewsCardFooter,
		BlockVerdict
	},
	provide() {
		return {
			id: this.post.id
		}
	}
}
</script>

