<template>
  <aside class="shared-news-links">
    <div class="big-shared-buttons">
      <a class="big-share-link facebook" title="Facebook" target="_blank" rel="nofollow">
        <i class="facebook">
          <svg width="28" height="28">
            <use xlink:href="#facebook" />
          </svg>
        </i>
        <span class="button-label">Share</span>
      </a>
      <a class="big-share-link twitter" title="Twitter" target="_blank" rel="nofollow">
        <i class="twitter">
          <svg width="28" height="28">
            <use xlink:href="#twitter" />
          </svg>
        </i>
        <span class="button-label">Tweet</span>
      </a>
    </div>
    <div class="share-comment-tooltip">
      <div class="small-shared-buttons">
        <a class="pinterest" title="Share Pinterest" target="_blank" rel="nofollow">
          <i class="pinterest">
            <svg width="27" height="22">
              <use xlink:href="#pinterest" />
            </svg>
          </i>
        </a>
        <a class="reddit-alien" title="Share Reddit" target="_blank" rel="nofollow">
          <i class="reddit-alien">
            <svg width="25" height="25">
              <use xlink:href="#reddit-alien" />
            </svg>
          </i>
        </a>
        <a class="linkedin" target="_blank" title="Share Linkedin" rel="nofollow">
          <i class="linkedin">
            <svg width="24" height="27">
              <use xlink:href="#linkedin" />
            </svg>
          </i>
        </a>
        <a class="tumblr" title="Share Tumblr" target="_blank" rel="nofollow">
          <i class="tumblr">
            <svg width="24" height="24">
              <use xlink:href="#tumblr" />
            </svg>
          </i>
        </a>
        <a class="flipboard" title="Share Flipboard" target="_blank" rel="nofollow">
          <i class="flipboard">
            <svg width="21" height="21">
              <use xlink:href="#flipboard" />
            </svg>
          </i>
        </a>
        <a class="envelope-o" title="Share Email" rel="nofollow">
          <i class="envelope-o">
            <svg width="23" height="24">
              <use xlink:href="#envelope-o" />
            </svg>
          </i>
        </a>
        <button v-click-outside="hide" class="add" @click="toggle">
          <i class="plus">
            <svg width="12" height="15">
              <use xlink:href="#plus" />
            </svg>
          </i>
        </button>
      </div>
    </div>
    <div class="font-size-changing-button">
      <div class="fs-range-wrap">
        <div class="fs-range" />
      </div>
      <button class="clear default js--change-font" @click="changeFontSize">
        A
        <span class="plusMinus">
          <span class="clear plus">+</span>
          <span class="clear minus">–</span>
        </span>
      </button>
    </div>
    <div v-show="visibleMobSocial" class="share-comment-tooltip mobWindow">
      <a class="pinterest" title="Share Pinterest" target="_blank" rel="nofollow">
        <i class="pinterest">
          <svg width="20" height="20">
            <use xlink:href="#pinterest" />
          </svg>
        </i>
      </a>
      <a class="reddit-alien" title="Share Reddit" target="_blank" rel="nofollow">
        <i class="reddit-alien">
          <svg width="20" height="20">
            <use xlink:href="#reddit-alien" />
          </svg>
        </i>
      </a>
      <a class="tumblr" title="Share Tumblr" target="_blank" rel="nofollow">
        <i class="tumblr">
          <svg width="20" height="20">
            <use xlink:href="#tumblr" />
          </svg>
        </i>
      </a>
      <a class="flipboard" title="Share Flipboard" target="_blank" rel="nofollow">
        <i class="flipboard">
          <svg width="20" height="20">
            <use xlink:href="#flipboard" />
          </svg>
        </i>
      </a>
      <a class="envelope-o" title="Share Email" rel="nofollow">
        <i class="envelope-o">
          <svg width="20" height="20">
            <use xlink:href="#envelope-o" />
          </svg>
        </i>
      </a>
    </div>
  </aside>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside
  },
  data () {
    return {
      visibleMobSocial: false
    }
  },
  methods: {
		changeFontSize () {
			this.$emit('changeFontSize')
		},
    toggle () {
      this.visibleMobSocial = true
		},
    hide () {
      this.visibleMobSocial = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  aside {
    position: relative;

    i {
      cursor: pointer;
    }
  }
  .shared-news-links{
    height: 100%;
    width: 100%;
    display: inline-flex;
    margin-bottom: 30px;

    .mobWindow{
      position: absolute;
      top: 80px;
      left: 10px;
      z-index: 3;
      height: 105px;
      width: 180px;
      background-color: $white;
      text-align: center;
      i{
        width: 35px;
        height: 35px;
        border-radius: 21px;
        fill: $white;
        padding-top: 5px;
        // padding-left: 8px;
        margin-top: 5px;
        margin-left: 0px;
        margin-right: 0px;
      }
      a{
        margin-left: 7px;
        margin-right: 7px;
        border-radius: 21px;
        color: $white;

        .pinterest{
          background-color: $pinterest-color;
        }
        .reddit-alien{
          background-color: $black;
        }
        .tumblr{
          background-color: $tumblr-color;
        }
        .flipboard{
          background-color: $flipboard-color;
        }
        .envelope-o{
          background-color: $envelope-color;
        }
      }
    }

    a{
      margin-bottom: .8em;;
      margin-right: 10px;
      display: inline-flex;

    }
    .big-shared-buttons{
      display: inline-flex;
      height: 40px;
      cursor: pointer;

      .facebook{
        background-color: $facebook-color;
      }
      .twitter{
        background-color: $pictonBlue;
      }
    }
    .small-shared-buttons{
      display: flex;

      svg{
        vertical-align: -webkit-baseline-middle;
      }
      i{
        width: 40px;
        height: 40px;
        border-radius: 21px;
        fill: $white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .add{
        margin-bottom: .8em;;
        margin-right: 10px;
        display: inline-flex;
        width: 40px;
        height: 40px;
        border-radius: 21px;
        color: $white;
      }
      a{
        width: 40px;
        height: 40px;
        border-radius: 21px;
        color: $white;
      }
      .pinterest{
        background-color: $pinterest-color;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      .reddit-alien{
        background-color: $reddit-color;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      .linkedin{
        background-color: $linkedin-color;
      }
      .tumblr{
        background-color: $tumblr-color;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      .flipboard{
        background-color: $flipboard-color;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      .envelope-o{
        background-color: $envelope-color;
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
      .add{
        background-color: #a6a6a6;
        border: none;
        &:focus{
          outline: 1px dotted !important;
        }
        @media screen and (min-width: 491px) {
          display: none;
        }
        i{
          margin: 0 auto;
        }
        svg{
          height: 16px;
        }
      }

    }
    .big-share-link{
      width: 111px;
      align-items: center;
      -webkit-box-align: center;
      -webkit-box-pack: center;
      justify-content: center;
      height: 40px;
      border-radius: 21px;
      text-decoration: none;
      fill: $white;
      color: $white !important;
      padding-right: .7em;

      span{
        margin-left: 7px;
      }
      @media screen and (max-width: 490px) {
        width: 40px;
        padding-right: 0;
      }
      .button-label{
        @media screen and (max-width: 490px) {
          display: none;
        }
      }
    }
    .font-size-changing-button{
      display: inline-flex;
      height: 40px;
      margin-left: auto;
    }
    // .icons{
    //   width: 28px;
    //   height: 28px;
    //   margin-left: 7px;
    //   margin-right: 8px;
    //   position: relative;
    //   display: inline-block;
    // }
    .default{
      -webkit-font-smoothing: antialiased;
      -webkit-box-direction: normal;
      box-sizing: inherit;
      margin: 0;
      overflow: visible;
      text-transform: none;
      padding: 0;
      -webkit-appearance: none;
      border: 0;
      border-radius: 0;
      background: 0 0;
      line-height: 1;
      font-family: inherit;
      display: flex;
      font-weight: 700;
      color: #a6a6a6;
      font-size: 2em;
      cursor: pointer;
      padding-right: .1em;

      &:hover{
        color: $primary_color;
      }
      .plusMinus{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        position: relative;
        margin-top: 3px;
        span{
          position: relative;
          margin-top: -2px;
          overflow: hidden;
        }
        .plus{
          line-height: 19px;
          height: 25px;
        }
        .minus{
          line-height: 10px;
          top: -5px;
        }
      }
    }
  }
</style>
