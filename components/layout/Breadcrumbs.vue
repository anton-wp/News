<template>
  <div class="breadcrumbs-layout">
    <div class="container px-0 mt-7">
      <div class="col-12 routing px-2 px-sm-3" v-if="breadcrumbs.length">
        <div class="col-lg-8 px-0 d-flex">
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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["breadcrumbs"]),
  },
};
</script>

