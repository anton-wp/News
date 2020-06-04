<template>
  <div class="row wrapp">
    <div class="theme-wrapper">
      <span class="theme">
        <nuxt-link class="tag-link" :class="colorScheme" v-bind:to="category.slug">
          {{ category.name }}
        </nuxt-link>
      </span>
    </div>
    <news-card-header-marks :pending="false" />
  </div>
</template>

<script>
import NewsCardHeaderMarks from '~/components/news/NewsCardHeaderMarks'
export default {
  components: {
    NewsCardHeaderMarks
  },
  props: {
    colorScheme: String,
    category: Object
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
.wrapp {
  margin-left: 0;
  margin-right: 0;
  justify-content: space-between;
  color: inherit;

  .light {
    color: $white
  }

  .dark {
    color: $black;
  }

  .tag-link {

    cursor: pointer;
    text-decoration: none;
  }
}

.theme-wrapper {
  .theme {
    position: relative;
    font-weight: 800;
    font-size: .9em;
    text-transform: uppercase;
    padding-right: 10px;
    cursor: pointer;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 20px;
      height: 3px;
      width: 40px;
      background-color: $primary_color;
    }
  }
}
</style>
