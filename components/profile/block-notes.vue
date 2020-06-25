<template>
  <div class="block-note">
    <div class="block">
      <div class="content">
        <p class="text">Test test Test test Test test</p>
        <p class="date">Apr 23,2020 12:57 am EST</p>
      </div>
      <div class="options" v-click-outside="backOption">
        <button @click="openOption">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </button>
        <!-- (click)="openOption()" (clickOutside)="backOption()" -->
        <!-- <fa-icon [icon]="faEllipsisV"></fa-icon> -->
        <div class="block-options" v-if="optionOpen">
          <span>Edit</span>
          <span>Delete</span>
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
