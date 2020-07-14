<template>
  <div class="comment-share">
    <ShareNetwork
      class="facebook"
      network="facebook"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :description="post.seoDescription"
    >
      <i class="facebook">
        <svg width="27" height="22">
          <use xlink:href="#facebook" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="twitter"
      network="twitter"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
      :title="post.seoTitle ? post.seoTitle : post.title"
    >
      <i class="twitter">
        <svg width="27" height="22">
          <use xlink:href="#twitter" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="pinterest"
      network="pinterest"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
    >
      <i class="pinterest">
        <svg width="27" height="22">
          <use xlink:href="#pinterest" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="reddit-alien"
      network="reddit"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
    >
      <i class="reddit-alien">
        <svg width="25" height="25">
          <use xlink:href="#reddit-alien" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="linkedin"
      network="linkedIn"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
    >
      <i class="linkedin">
        <svg width="24" height="27">
          <use xlink:href="#linkedin" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="tumblr"
      network="tumblr"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
      :description="post.seoDescription"
    >
      <i class="tumblr">
        <svg width="24" height="24">
          <use xlink:href="#tumblr" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="flipboard"
      network="flipBoard"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
    >
      <i class="flipboard">
        <svg width="21" height="21">
          <use xlink:href="#flipboard" />
        </svg>
      </i>
    </ShareNetwork>
    <ShareNetwork
      class="envelope-o"
      network="email"
      :title="post.seoTitle ? post.seoTitle : post.title"
      :url="baseUrl + $route.fullPath + '#' + parenPostId"
      :description="post.seoDescription"
    >
      <i class="envelope-o">
        <svg width="23" height="24">
          <use xlink:href="#envelope-o" />
        </svg>
      </i>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: ""
    };
  },
  props: {
		post: Object,
		parenPostId: String
  },
  mounted() {
    this.baseUrl = process.env.baseUrl;
  }
};
</script>

<style lang="scss">
.comment-share {
  background-color: white;
  border: 1px solid #f4f4f4;
  box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
}
</style>
