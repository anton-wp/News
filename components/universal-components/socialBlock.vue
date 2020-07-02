<template>
  <div class="row socialBlock">
    <a
      v-for="icon in social"
      :key="icon.linkName"
      class="social-icon-round"
      v-bind:class="icon.linkName"
			:href="icon.link"
    >
      <svg width="30" height="30">
        <use v-bind:xlink:href="`#${icon.linkName}`" />
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { linkName: "facebook", link: "https://www.facebook.com/VerdictNews/" },
        { linkName: "twitter", link: "https://twitter.com/VerdictWebsite" },
        { linkName: "instagram", link: "https://www.instagram.com/verdictnews/" },
        { linkName: "pinterest", link: "https://www.pinterest.com/VerdictNews/" },
        { linkName: "feedburner", link: "https://feeds.feedburner.com/VerdictNews" },
        { linkName: "feed", link: "/feed/" }
      ]
    };
  }
};
</script>
