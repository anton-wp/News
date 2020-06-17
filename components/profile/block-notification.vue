<template>
  <div class="container">
    <div class="row">
      <div class="col-12 block">
        <div class="avatar">
          <div class="img"></div>
        </div>
        <div :class=" small ? 'small' : big">
          <p>New post "Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?" has been published in "Health".</p>
          <time>Mar 28,2020 6:14 pm EST</time>
        </div>
        <div class="options"  v-click-outside="backOption">
          <button @click="openOption" >
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
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
	},
	props: {
		small: Boolean
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
.avatar {
  min-width: 60px;
  @media screen and (max-width: 460px) {
    order: 1;
  }
  .img {
    background: blue;
    width: 100%;
    height: 60px;
  }
}
.content {
  padding: 0 1em;
  cursor: pointer;
  @media screen and (max-width: 460px) {
    order: 3;
    max-width: 100%;
    // flex: 0 0 100%;
  }
  p {
    margin-bottom: 0;
  }
  time {
    font-weight: normal;
    line-height: 1.5;
    color: #0a0a0a;
    // visibility: hidden;
    box-sizing: inherit;
    font-size: 0.9em;
  }
}
.options {
  display: flex;
  align-items: center;
  padding-left: 10px;
  margin-left: auto;
  margin-right: 10px;

  @media screen and (max-width: 460px) {
    order: 2;
  }
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
    top: 65px;
    right: 0px;
    width: 160px;
    // height: 50px;
    z-index: 1;
    background-color: white;
    display: flex;
    box-shadow: 2px 4px 16px 0 rgba(35, 36, 40, 0.26);
    font-size: 0.9em;
    &::before {
      content: "";
      border-left: 1px solid #f4f4f4;
      border-top: 1px solid #f4f4f4;
      position: absolute;
      top: -8px;
      right: 1em;
      background: #fefefe;
      width: 15px;
      height: 15px;
      z-index: 5;
      transform: rotate(45deg);
    }
    a {
      color: #0a0a0a;
      padding: 0.6em 1.3em;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      width: 100%;
      &:hover {
        color: rgb(255, 66, 66);
      }
    }
  }
}
.block {
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.5em;

  @media screen and (max-width: 460px) {
    // order: 2;
    flex-wrap: wrap;
  }

  .small {
    font-size: 0.7em;
  }
}
</style>
