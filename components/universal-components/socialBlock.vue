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

<style lang="scss">
@import "../../assets/utils/variables";
@import "../../assets/utils/colors";

.instagram {
  background-color: $millbrook;
}

.twitter {
  background-color: $pictonBlue;
}

.feed {
  background-color: $flamingo;
}

.pinterest {
  background-color: $cardinal;
}

.news-icon {
  background-color: $lochmara;
}

.facebook {
  background-color: $chambray;
}

.feedburner {
  background-color: $feedburner;
}

.socialBlock {
  justify-content: space-around;

  @media (max-width: 992px) {
    justify-content: space-between;
  }

  @media (max-width: 576px) {
    justify-content: space-around;
  }
}
.social-icon-round {
  width: 45px;
  height: 45px;
  border-radius: 25px;
  position: relative;
  margin: 0 auto 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  fill: $white;
}
</style>
