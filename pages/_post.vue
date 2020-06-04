<template>
  <div>
    <div class="policy-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="container pad0">
              <div class="row">
                <button-block-head />
                <div class="col-lg-12">
                  <h1 class="post-page-title">
                    California Not Above Enacting Martial Law—Will This Only Serve to Create A Slippery Slope?
                  </h1>
                </div>
                <div class="col-lg-12">
                  <div class="container">
                    <div class="row" style="margin-bottom: 3.1em;">
                      <div class="col-lg-6">
                        <author-block />
                      </div>
                      <div class="col-lg-6" style="align-items: center; display: flex;">
                        <marks />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <social-block />
                </div>
                <div class="col-lg-12">
                  <div class="image-wrapper">
                    <img class="post-image" src="https://verdict.org/uploads/media/2020/05/a346d47e581577c7a67419c9f4cc3922_1592_featured.jpg">
                    <div class="source">
                      <span>
                        source: source
                      </span>
                    </div>
                  </div>
                  <p class="text">
                    In an effort to prepare for the worst-case scenario in regards to the ongoing coronavirus pandemic, the state of California has reportedly said they will use any means to keep its residents safe—even if it means enacting marshall law.
                    In a press conference earlier this month, California Governor Gavin Newsom, stated that he was not above considering the implementation of martial law if he found it was necessary to aid in the curbing of the current novel virus.  Newsom said:  “We have the ability to do martial law…if we feel the necessity.”
                    The implementation of martial law is and very rare and unprecedented move when it comes to its use by government officials down through history.  If Newsom does decide to take that route, the civil rule will be temporarily replaced by the military authority.
                    The extent of martial law, as it pertains to the US states, is:  “certain civil liberties may be suspended, such as the right to be free from unreasonable searches and seizures, freedom of association, and freedom of movement.”
                    Since the outbreak of the COVID-19 pandemic, officials in each state of the union have taken to enacting some extraordinary steps in the hopes of preventing the spread of the coronavirus. Measures that only just a few months ago would have been seen as unthinkable and impossible.  These include the canceling of any large gatherings, closing schools for the remainder of the school year, mandating that businesses shut their doors, and finally declaring a shelter or stay in place order.
                    The law that makes these moves possible is that of the "police power."  It is the general, but limited, power of the states to be able to legally regulate the health, safety, and yes morals of their residents.  As such, when there is the outbreak of a disease, the states have the power to declare quarantines, and even require vaccinations of individuals against their will,
                    However, when it comes to martial law, the power of the states is taken a step further.  Although there is no precise definition when it comes to martial law, it is generally the enactment of the suspension of the civil government rule that is taken control of by the military authorities.
                    Down through history, martial law in the US has only been put into place when there was a true breakdown in the rule of law to the point that the very life, liberty, and prosperity were seen to be in imminent danger.
                    Are we sure that martial law is the best answer for California?
                  </p>
                </div>
                <div class="col-12">
                  <social-block />
                </div>
                <!-- <social-block [(fontSize)]="bodySize" class="col-lg-12"></social-block> -->
                <div class="col-lg-12" style="margin-top: 25px;">
                  <div class="linked-title">
                    <span>
                      linked
                    </span>
                  </div>
                  <div class="tags">
                    <div class="tag-wrapper">
                      <!-- <span class="tag-name">{{ tag.name }}</span> -->
                      <a class="tag-name">tags</a>
                      <!-- <a [routerLink]="['/l'] + tag.slug"><span class="tag-name">{{ tag.name }}</span></a> -->
                    </div>
                    <div class="tag-wrapper">
                      <!-- <span class="tag-name">{{ tag.name }}</span> -->
                      <a class="tag-name">tags</a>
                      <!-- <a [routerLink]="['/l'] + tag.slug"><span class="tag-name">{{ tag.name }}</span></a> -->
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <prev-next />
                </div>
                <div class="col-lg-12">
                  <div class="related-title">
                    <span>
                      related
                    </span>
                  </div>
                  <div class="posts-bottom">
                    <!-- TODO get related posts -->
                    <div class="row">
                      <!-- <ng-container >
                        <div class="col-lg-4">
                          <vrd-vdc [defaultPost]="post" [padding]="true"></vrd-vdc>
                        </div>
                      </ng-container> -->
                    </div>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="comment-wrapper">
                    <span class="title">
                      your verdict
                    </span>
                    <span class="about">
                      About Verdict
                      img
                    <!-- <fa-icon class="icon" [icon]="faQuestionCircle"></fa-icon> -->
                    </span>
                  </div>
                  <span class="aboutPopup">
                    Verdict is top voted comment by all members. One vote per member. Verdict can change over time.
                  </span>
                </div>
                <div class="col-12">
                  <!-- <textarea  formControlName="body"
                            class="form-input with-border"
                            [froalaEditor]="froalaOptions"
                            maxlength="10000" >
                  </textarea> -->
                  <div class="blockCheckbox">
                    <input type="checkbox" class="checkbox">
                    <label for="checkbox">
                      subscribe to comments
                    </label>
                  </div>
                  <div class="blockButton">
                    <button>
                      agree
                    </button>
                    <button>
                      disagree
                    </button>
                  </div>
                </div>
                <!-- <div *ngIf="!store.preview" class="col-12">

                  <vrd-ppcb></vrd-ppcb>
                </div> -->
                <!-- <div *ngIf="!store.preview" class="col-12 filter">
                  <div>

                  </div>

                </div> -->
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <follow />
            <!-- <vrd-fbc [post]="true"></vrd-fbc> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrevNext from '~/components/singlePost/prevNext.vue'
import AuthorBlock from '~/components/singlePost/authorBlock.vue'
import Marks from '~/components/singlePost/marks.vue'
import SocialBlock from '~/components/singlePost/socialBlock.vue'
import ButtonBlockHead from '~/components/singlePost/buttonBlockHead.vue'
import Follow from '~/components/universal-components/followBlock.vue'

export default {
  components: {
    PrevNext,
    Follow,
    ButtonBlockHead,
    AuthorBlock,
    Marks,
    SocialBlock
  },
  async fetch ({ $axios, params, next }) {
    // if (process.server) {
    //   const data = this.$http.get('/api/news')
    //   console.log(data)
    // }
    if (process.server) {
      let res = await $axios.get(`/api/politics`).catch(error => console.error(error))
      console.log(res.data)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/utils/variables";
  @import "../assets/utils/colors";

  .background {
    background-color: $secondary-bgcolor;
  }

.blockCheckbox{
  text-align: center;
  margin-top: 0.6em;

  label{
    line-height: 1.5;
    text-align: center;
    box-sizing: inherit;
    display: inline-block;
    font-size: 0.8em;
    font-weight: 700;
    text-transform: uppercase;
    color: $heading-color;
    position: relative;
    padding-left: 0.6em;
    user-select: none;
    cursor: pointer;
  }
}

.blockButton{
  text-align: center;
  margin-bottom: 32px;

  button{
    box-sizing: inherit;
    overflow: visible;
    background: 0 0;
    display: inline-block;
    vertical-align: middle;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 0;
    transition: background-color .25s ease-out,color .25s ease-out;
    font-size: .9rem;
    line-height: 1;
    text-align: center;
    background-color: $primary_color;
    color: $whiteFE;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .8px;
    user-select: none;
    padding: .85em 1.4em .8em;
    margin: 0 0 0 0.5em;
    &:hover {
      background-color: $button-hover-background;
    }
  }
}

.aboutPopup {
  line-height: 14px;
  position: absolute;
  right: 0;
  width: 290px;
  background-color: rgba(0, 0, 0, 0.8);
  color: $white;
  padding: 3px 5px;
  font-size: 14px;
  font-weight: 300;
  transform: translateY(45px);
  z-index: 5;
  top: 0px;
  text-align: center;

  &::after {
    content: '';
    display: block;
    position: absolute;
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.8) transparent;
    top: 0;
    right: 8%;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
  }
}

.ng-fa-icon {
  font-size: 20px
}

.form-input {
  margin-bottom: 30px;
  border-top: 5px solid #222222;
  font-family: "Open Sans";
  width: 100%;
  display: block;
  text-indent: 0;
  padding: 0.55em 0.65em 2em;
  border: 1px solid #c6c6c6;
  font-size: 0.9em;
  overflow-wrap: normal;
  word-wrap: normal;
  word-break: normal;
  line-break: auto;
  font-size: 16px;
  line-height: 24px;
  text-align: start;
  text-indent: 0;
  color: $black;
  overflow: hidden;
  outline: 0px solid transparent;

}

.animation {
  animation: img 0.3s ease-in-out;

  @keyframes img {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}

.policy-wrapper {
  width: 100%;

  .container {
    max-width: $global-width;

    .tags {
      margin-top: 1em;
      margin-bottom: 3em;
      text-align: center;
    }

    .tag-wrapper {
      padding-right: 0.9375rem;
      padding-left: 0.9375rem;
      display: inline-block;
      vertical-align: middle;
      margin: 0 10px 1rem 10px;
      font-family: inherit;
      padding: 0.85em 1.4em;
      -webkit-appearance: none;
      border: 1px solid transparent;
      border-radius: 0;
      -webkit-transition: background-color 0.3s ease-out, color 0.3s ease-out;
      -o-transition: background-color 0.3s ease-out, color 0.3s ease-out;
      transition: background-color 0.3s ease-out, color 0.3s ease-out;
      font-size: 0.9rem;
      line-height: 1;
      text-align: center;
      cursor: pointer;
      background-color: $primary_color;
      color: $whiteFE;

      &:hover {
        background-color: $button-hover-background;

        .tag-name {
          color: $whiteFE;
        }
      }

      .tag-name {
        color: $whiteFE;
        text-decoration: none;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: 0.85em 1.4em 0.8em 1.4em;
      }
    }

    .preview-and-next {
      margin: 0 0 55px 0;
    }

    .linked-title,
    .related-title {
      display: block;
      position: relative;
      margin-bottom: 1em;

      span {
        padding-right: 0.34em;
        padding-left: 0.34em;
        z-index: 2;
        position: relative;
        margin-top: 0;
        color: $heading-color;
        font-size: 1.4em;
        font-weight: 700;
        line-height: 16px;
        background-color: $white;
      }

      &::after {
        content: '';
        position: absolute;
        top: calc(50% + 0.05em);
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $heading-color;
        z-index: 1;
      }
    }

    .text {
      margin-bottom: 3rem;
    }

    .image-wrapper {
      position: relative;
      margin: 0 0 2em;

      .post-image {
        width: 100%;
      }

      .source {
        text-align: right;
        font-size: 12px;
        font-weight: 400;
        font-family: "Open Sans";
      }
    }

    .post-page-title {
      font-size: 2.2em;
      font-weight: 700;
      line-height: 1.2em;
      margin-bottom: .5em;
      overflow-wrap: normal;
      word-wrap: normal;
      word-break: break-word;
      line-break: auto;
      position: relative;
      font-family: "Open Sans";
      font-weight: bold;
      text-size-adjust: 100%;
      -webkit-box-direction: normal;
      -webkit-font-smoothing: antialiased;
      margin: 15px 15px 15px 0;
    }

    .comment-wrapper {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-bottom: 1.3em;
      overflow: hidden;
      height: 35px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 18px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $heading-color;
        z-index: 1;
      }

      .title {
        font-size: 1.4em;
        font-weight: 700;
        padding-right: 20px;
        color: $heading-color;
        font-family: "Open Sans";
        background-color: $white;
        position: relative;
        z-index: 2;
      }

      .about {
        z-index: 2;
        position: relative;
        background-color: $white;
        font-family: "Open Sans";
        // margin-top: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 10px;
        font-size: 14px;
        font-weight: 700;
        color: $heading-color;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        position: relative;
        cursor: help;
        .icon {
          margin-left: 15px;
          color: $primary_color;
        }
      }
    }

    .sticky-wrapper {
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        height: auto;
        overflow: hidden;
        will-change: scroll-position;
        -webkit-overflow-scrolling: touch;
        bottom: 0;

        .trigger-type-posts {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          margin-bottom: 1.3em;
          overflow: hidden;
          height: 25px;
          position: relative;

          .trigger {
            cursor: pointer;
            line-height: 1.2;
            background-color: $white;
            z-index: 2;
            padding-right: .34em;
            padding-left: .34em;
            position: relative;
            margin-top: 0;
            color: $heading-color;
            font-size: 1.4em;
            font-weight: 700;
            line-height: 16px;
          }

          &::after {
            content: '';
            position: absolute;
            top: 10px;
            left: 0;
            height: 1px;
            width: 100%;
            background-color: $heading-color;
            z-index: 1;
          }
        }

      }
    }
  }
}

.active {
  visibility: visible !important;
}

@media (min-width: 769px) {
  .pad0 {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .policy-wrapper {
    padding: 0 15px;
  }
}
</style>
