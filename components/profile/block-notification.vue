<template>
  <div class="block-notification">
    <div class="container">
      <div class="row">
        <div class="col-12 block">
          <div class="avatar">
            <div class="img"></div>
          </div>
          <div :class=" small ? 'small' : ''">
            <p>New post "Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?" has been published in "Health".</p>
            <time>Mar 28,2020 6:14 pm EST</time>
          </div>
          <div class="options" v-click-outside="backOption">
            <button @click="openOption">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </button>
            <div class="block-options" v-if="optionOpen">
              <a href>Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  directives: {
    ClickOutside
  },
  props: {
    small: Boolean
  },
  data() {
    return {
      optionOpen: false
    };
  },
  methods: {
    openOption() {
      this.optionOpen = true;
    },
    backOption() {
      this.optionOpen = false;
    }
  }
};
</script>
