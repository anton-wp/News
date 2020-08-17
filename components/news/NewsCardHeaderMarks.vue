<template>
  <div class="marks-component-news ">
    <nuxt-link class="mark-news px-0" :to="{ path:`/${post.slug}`, hash: `#commentPost`}">
      <svg width="15" height="15">
        <use xlink:href="#comment" />
      </svg>
      <span class="text">
        <span class="reviews-link" :class="colorScheme" >{{ post.commentsCount }}</span>
      </span>
    </nuxt-link>
    <nuxt-link class="mark-news px-0" :to="`/${post.slug}`">
      <svg width="15" height="15">
        <use xlink:href="#votes" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <span class="reviews-link" :class="colorScheme">{{ post.votesCount }}</span>
      </span>
    </nuxt-link>
    <nuxt-link class="mark-news px-0" :to="`/${post.slug}`">
      <svg width="15" height="15">
        <use xlink:href="#eye" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <span class="reviews-link" :class="colorScheme">{{ post.viewsCount }}</span>
      </span>
    </nuxt-link>
    <span class="bookmark-news px-0">
      <!-- add function add this post to save -->
      <bookmark />
    </span>
  </div>
</template>

<script>
import Bookmark from "~/components/universal-components/Bookmark";

export default {
  components: {
    Bookmark
  },
  props: {
    colorScheme: String,
		pending: Boolean,
		post: Object
	},
};
</script>
