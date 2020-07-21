<template>
  <div class="marks-component-news ">
    <span class="mark-news px-0">
      <svg width="15" height="15">
        <use xlink:href="#comment" />
      </svg>
      <span class="text">
        <!-- TODO go to single post page -->
        <a class="reviews-link" :class="colorScheme" href="#">{{ post.commentsCount }}</a>
      </span>
    </span>
    <span class="mark-news px-0">
      <svg width="15" height="15">
        <use xlink:href="#votes" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <a class="reviews-link" :class="colorScheme" href="#">{{ post.votesCount }}</a>
      </span>
    </span>
    <span class="mark-news px-0">
      <svg width="15" height="15">
        <use xlink:href="#eye" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <a class="reviews-link" :class="colorScheme" href="#">{{ post.viewsCount }}</a>
      </span>
    </span>
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
