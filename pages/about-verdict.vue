<template>
  <div class="policy-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-8">
          <div class="wrapper-terms">
            <h1 class="policy-page-title">
              ABOUT
            </h1>
            <div class="paragraph">
              <h5>
                <strong>
                  ABOUT VERDICT
                </strong>
              </h5>
              <p class="text">
                VERDICT is a public social network platform that connects news publishers, talented writers, subject professionals and other content providers directly with the thoughtful readers for unbiased peer feedback and honest opinions on breaking news, current events, political stands, business and technology developments, health related discussions, and other topics including debates on world changing ideas and dilemmas.
              </p>
              <p class="text">
                Verdict brings everyone closer together by letting everyone constructively speak their mind and collectively come to conclusions based on the presented facts and ideas.
              </p>
              <p class="text">
                Verdict reflects on the sociology belief that we are all deeply embedded into the structure of life that shapes us even on the most private and personal levels and that we are all supremely connected to one another to the extent that most public and personal problems are collectively owned by all.
              </p>
              <p class="text">
                Verdict inspires this understanding and empowers this interconnectivity to look at all the successes and failures in the society and the world as collectively public achievements and challenges.
              </p>
              <p class="text">
                Today we are all members of the large community shaping the world of tomorrow!
              </p>
              <p class="text">
                Join VERDICT, what is yours today?
              </p>
            </div>
            <div class="paragraph">
              <h5>
                <strong>
                  HOW VERDICT WORKS
                </strong>
              </h5>
              <p class="text">
                Verdict Member account is required to be able to leave comments or vote.
              </p>
              <p class="text">
                You can immediately sign up for an account with just your email address or supported social media account to become Verdict Member. Account registration is very simple and should normally take less than minute.
              </p>
              <p class="text">
                Verdict Members start gaining V reputation (V-rep), +1 V-rep for leaving a comment, one time per post. +1 V-rep for submitting a vote for a comment, one time per post. A comment that reaches 10+ votes can become Verdict comment - the most agreed upon comment for that post. Verdicts award bonus V-rep.
              </p>
              <p class="text">
                Verified Verdict Members can submit their own posts and gain extra V-rep.
              </p>
              <p class="text">
                Verdict Members can reach different levels based on V-rep. Verdict Members who reach 1000 V-rep become Verdict Peers and gain bonus V-rep.
              </p>
              <p class="text">
                Verdict Member levels are constantly under development and are subject to change.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <follow />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Follow from '~/components/universal-components/followBlock.vue'

export default {
  components: {
    Follow
  }
}
</script>

<style lang="scss">
  @import "../assets/utils/variables";
  @import "../assets/utils/colors";

  .background {
    background-color: $secondary-bgcolor;
  }

  .policy-wrapper {
    width: 100%;

    .container {
      max-width: $global-width;

      .wrapper-terms {
        padding-left: 15px;
      }

      .policy-page-title {
        left: -15px;
        text-transform: uppercase;
        font-size: 1.9em;
        // margin: 0;
        line-height: 1.5;
        position: relative;
        color: $dark-gray;
        font-family: "Open Sans";
        font-weight: bold;
        text-size-adjust: 100%;
        -webkit-box-direction: normal;
        -webkit-font-smoothing: antialiased;
        margin: 0 15px 15px 0;
        &:after {
          content: '';
          background-color: $primary_color;
          height: 3px;
          width: 1.9em;
          position: absolute;
          left: 0.04em;
          bottom: 1px;
        }

        @media (max-width: 576px) {
          left: 0;
        }
      }

      .paragraph {

        li {
          margin: 50px 0;
          .text{
            margin-bottom: 0;
          }
        }

        h5 {
          padding-bottom: 20px;
        }

        .in-text-ul {
          padding-left: 50px;
        }
      }

      .text {
        box-sizing: border-box;
        color: rgb(10, 10, 10);
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        text-size-adjust: 100%;
        -webkit-box-direction: normal;
        -webkit-font-smoothing: antialiased;

        .terms-text-link {
          color: $primary_color;
          text-decoration: underline;
        }
      }

      .tab {
        padding-left: 30px;
      }

      .title-hot {
        position: relative;
        color: $doveGray;
        font-size: 1.4em;
        font-weight: 700;
        line-height: 16px;
        width: 100%;
        margin: 45px 0 30px;
        display: flex;
        justify-content: space-between;

        span {
          background-color: $white;
          position: relative;
          z-index: 5;
          padding: 0 10px;
          cursor: pointer;
        }

        &::before {
          content: '';
          position: absolute;
          display: block;
          top: 8px;
          height: 1px;
          width: 100%;
          background-color: $doveGray;
          z-index: 2;
        }
      }
    }
  }

</style>
