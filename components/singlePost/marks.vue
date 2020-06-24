<template>
  <div class="marks">
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#comment" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">{{author.commentsCount}}</a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#votes" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">{{author.verdictsCount}}</a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#eye" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">{{author.followersCount}}</a>
      </span>
    </span>
    <span class="bookmark-news">
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
    author: Object
  }
};
</script>
