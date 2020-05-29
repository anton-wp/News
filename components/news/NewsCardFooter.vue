<template>
  <div class="row wrapp">
    <span class=bywho >
      <div v-if="showPopup" @mouseleave="hide" class="user-popup active" id="1">
          <div>
            <popup-user-info />
          </div>
      </div>
      <span v-if="!pending">By: </span>
      <a id="username-link" @mouseover="toggle" class="username-link" v-if="!pending">
        firstName lastName
      </a>
      <time class="author">
        May 25,2020 9:51 am EST
      </time><br>
      <button v-if="pending">
       <svg width="15" height="15">
        <use xlink:href="#pencil" />
       </svg>
        Edit
      </button>
      <div v-if="showMarks" class="marks">
        <news-card-header-marks :colorScheme="colorScheme" :pending="false" />
      </div>
    </span>
    <a v-if="!pending" class="action">
       <svg width="12" height="15">
        <use xlink:href="#trash" />
       </svg>
        delete
    </a>
  </div>
</template>

<script>
import PopupUserInfo from '~/components/universal-components/popup-user-info'
import NewsCardHeaderMarks from '~/components/news/NewsCardHeaderMarks'
export default {
  props: {
    colorScheme: String,
    pending: Boolean,
    showMarks: Boolean
  },
  components: {
    PopupUserInfo,
    NewsCardHeaderMarks
  },
  data () {
    return {
      showPopup: false
    }
  },
  methods: {
    toggle () {
      this.showPopup = true
    },
    hide () {
      this.showPopup = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/colors";
.username-link {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  margin: 0 5px;
  transition: color 0.3s;

  &:hover {
    color: $primary_color;
  }
}
.action {
  cursor: pointer;
  text-decoration: none;
  padding: 4px 9px;
  // margin: 0 0.9375rem;
  border: 1px solid;
  border-color: #ff4242;
  color: #ff4242;
  border-radius: 4px;
  vertical-align: middle;
  align-items: center;
  letter-spacing: .8px;
  font-weight: 700;
  font-size: 10px;
  text-transform: uppercase;
  display: inline-flex;
  transition: .4s;

  svg {
    fill: $primary_color;
    margin-right: 5px;
    transition: .4s;
  }

  &:hover {
    color: white;
    background-color: #bc2d2d;
    border-color: #bc2d2d;

    svg {
        fill: #fff;
    }
  }
}
.wrapp {
  display: inline-block;
  align-items: center;
  width: 100%;
  // height: 96px;
  margin-left: 0;
  margin-right: 0;
  justify-content: space-between;
  // padding-bottom: 10px;
  .bywho {
    display: flex;
    font-size: 12.8px;
    font-weight: 600;
    line-height: 19.2px;
    position: relative;
    padding-top: 10px;
    margin-bottom: 5px;
    // padding-top: 1em;
    font-size: .9em;
    letter-spacing: -.3px;
    user-select: none;

    .user-popup {
      bottom: 30px;
      padding: 1.5em 1.2em 0.8em 1.2em;
      // border-radius: 2px;
      background-color: $white;
      position: absolute;
      // top: -45px;
      // width: 100px;
      z-index: 1;
      max-width: 20em;
      min-height: 300px;
      min-width: 280px;
      width: 100%;
      border: 1px solid $dedede;
      border-radius: 4px;
      // visibility: hidden;
      opacity: 1;
      -webkit-box-shadow: 2px 4px 16px 0 $shark026;
      box-shadow: 2px 4px 16px 0 $shark026;
      font-family: "Open Sans";

      &:after {
        content: '';
        border-right: 1px solid $secondary-bgcolor;
        border-bottom: 1px solid $secondary-bgcolor;
        position: absolute;
        bottom: -8px;
        right: 80%;
        background: $whiteFE;
        width: 15px;
        height: 15px;
        z-index: 5;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
}
.marks {
  display: inline-flex;
  margin-left: auto;

  .bookmark-news {
    padding-left: 10px;

    .bookmark {
      color: $primary_color;
      background: transparent;
      border: none;
      outline: none;
      padding: 0;
    }
  }
}
button{
  margin-left: auto;
  padding: .35em .9em;
  border-radius: 3px;
  box-sizing: inherit;
  display: flex;
  align-items: center;
  font-family: inherit;
  transition: background-color .25s ease-out,color .25s ease-out;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .8px;
  user-select: none;
  text-decoration: none;
  font-size: .6rem;
  background: 0 0;
  padding: .35em .9em;
  border-radius: 3px;
  border: 1px solid #8d8d8d;
  color: #8d8d8d;
  &:hover{
    border-color: #474747;
    background-color: #606060;
    color: #fff;
  }
  svg{
    width: 15px;
    margin-right: 5px;
    color: #ff4242;
  }
}
</style>
