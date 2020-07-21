<template>
  <div class="breadcrumbs-layout mt-2">
    <div class="routing px-2 px-md-2" v-if="breadcrumbs.length">
      <component
        :is="item.path ? 'nuxt-link' : 'span'"
        class="breadcrumbs"
        v-for="(item, index) of breadcrumbs"
        :key="index"
        :to="item.path"
      >
        <span :class="item.path ? 'active-breadcrumbs' : ''">{{ item.title }}</span>
        <span class="arrow" v-if="breadcrumbs[index + 1]">></span>
      </component>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["breadcrumbs"])
  }
};
</script>

