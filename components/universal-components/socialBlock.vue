<template>
  <div class="row socialBlock">
    <div
      v-for="icon in social"
      :key="icon.linkName"
      class="social-icon-round"
      v-bind:class="icon.linkName"
    >
      <svg width="30" height="30">
        <use v-bind:xlink:href="`#${icon.linkName}`" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      social: [
        { linkName: "facebook", link: "/" },
        { linkName: "twitter", link: "/" },
        { linkName: "instagram", link: "/" },
        { linkName: "pinterest", link: "/" },
        { linkName: "feedburner", link: "/" },
        { linkName: "feed", link: "/" }
      ]
    };
  }
};
</script>
