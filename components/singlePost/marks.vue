<template>
  <div v-if="$isAMP" class="col d-flex justify-end post-icons">
    <a href="#" class="post-icons__item">
      <svg width="20" height="20">
        <use xlink:href="#comment" />
      </svg>
      {{author.commentsCount}}
    </a>
    <a href="#" class="post-icons__item">
      <svg width="20" height="20">
        <use xlink:href="#votes" />
      </svg>
      {{author.verdictsCount}}
    </a>
    <a href="#" class="post-icons__item">
      <svg width="20" height="20">
        <use xlink:href="#eye" />
      </svg>
      {{author.followersCount}}
    </a>
  </div>
  <div v-else class="marks">
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
    author: Object,
  }
};
</script>
