<template>
  <div class="routing" v-if="breadcrumbs.length">
      <component :is="item.path ? 'nuxt-link' : 'span'" class="breadcrumbs" v-for="(item, index) of breadcrumbs" :key="index" :to="item.path">
        <span :class="item.path ? 'active-breadcrumbs' : ''">{{ item.title }}</span>
        <span class="arrow" v-if="breadcrumbs[index + 1]">
          >
        </span>
      </component>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
	computed: {
		...mapState(['breadcrumbs'])
	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";

  .routing {
    max-width: $global-width;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;

    .breadcrumbs {
      font-size: 11px;
      font-weight: 400;
      text-decoration: none;
      transition: 0.3s;
      color: $black;

    }
		.active-breadcrumbs {
			cursor: pointer;

			&:hover {
				color: #ff4242;
			}
		}

    .arrow {
      padding: 0 5px;
    }
  }
</style>
