<template>
  <div class="block">
    <div class="content">
      <p class="text">Test test Test test Test test</p>
      <p class="date">Apr 23,2020 12:57 am EST</p>
    </div>
    <div class="options" v-click-outside="backOption">
      <button @click="openOption" >
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
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  data () {
    return {
      optionOpen: false
    }
  },
  methods: {
    openOption () {
      this.optionOpen = true
    },
    backOption () {
      this.optionOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 1em;
  p {
    margin-bottom: 0.2em;
  }
  .text, .date {
    font-size: 100%;
    color: #0a0a0a;
  }
}
.options {
  display: flex;
  position: relative;
  align-items: center;
  padding-left: 10px;
  margin-left: auto;
  margin-right: 10px;
  cursor: pointer;
  button {
    transition: color 0.25s;
    display: flex;
    border: none;
    background-color: white;
    flex-direction: column;
    line-height: .3;
    font-size: 1.8em;
    height: 100%;
    color: #8d8d8d;
    &:hover {
      color: #ff4242;
    }
  }
  .block-options {
    position: absolute;
    left: -112px;
    top: 50px;
    z-index: 2;
    width: 160px;
    background-color: #fff;
    box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
    span {
      display: block;
      position: relative;
      padding: 0.7em 1.5em;
      z-index: 2;
      cursor: pointer;
      width: 100%;
      text-align: left;
      border-bottom: 1px solid #f4f4f4;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.9em;
      line-height: 1;
      &:hover {
        background-color: #f4f4f4;
      }
    }
    &::before {
      content: "";
      border-left: 1px solid #f4f4f4;
      // border-top: 1px solid #f4f4f4;
      position: absolute;
      top: -8px;
      right: 1.35em;
      background: #fefefe;
      width: 15px;
      height: 15px;
      z-index: 1;
      transform: rotate(45deg);
    }
  }
}
.block {
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  padding: 1em 0;
}
</style>
