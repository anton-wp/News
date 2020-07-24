<template>
  <div v-if="$isAMP" class="text-page container">
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
      <nuxt-link
        :to="'/amp/' + menuLink.path"
        v-for="(menuLink, index) of headerMenu"
        :key="index"
      >{{ menuLink.title }}</nuxt-link>
    </amp-sidebar>

    <h1 class="post-cat">ABOUT</h1>
    <h2>ABOUT VERDICT</h2>
    <p>VERDICT is a public social network platform that connects news publishers, talented writers, subject professionals and other content providers directly with the thoughtful readers for unbiased peer feedback and honest opinions on breaking news, current events, political stands, business and technology developments, health related discussions, and other topics including debates on world changing ideas and dilemmas.</p>
    <p>Verdict brings everyone closer together by letting everyone constructively speak their mind and collectively come to conclusions based on the presented facts and ideas.</p>
    <p>Verdict reflects on the sociology belief that we are all deeply embedded into the structure of life that shapes us even on the most private and personal levels and that we are all supremely connected to one another to the extent that most public and personal problems are collectively owned by all.</p>
    <p>Verdict inspires this understanding and empowers this interconnectivity to look at all the successes and failures in the society and the world as collectively public achievements and challenges.</p>
    <p>Today we are all members of the large community shaping the world of tomorrow!</p>
    <p>Join VERDICT, what is yours today?</p>
    <h2>HOW VERDICT WORKS</h2>
    <p>Verdict Member account is required to be able to leave comments or vote.</p>
    <p>You can immediately sign up for an account with just your email address or supported social media account to become Verdict Member. Account registration is very simple and should normally take less than minute.</p>
    <p>Verdict Members start gaining V reputation (V-rep), +1 V-rep for leaving a comment, one time per post. +1 V-rep for submitting a vote for a comment, one time per post. A comment that reaches 10+ votes can become Verdict comment - the most agreed upon comment for that post. Verdicts award bonus V-rep.</p>
    <p>Verified Verdict Members can submit their own posts and gain extra V-rep.</p>
    <p>Verdict Members can reach different levels based on V-rep. Verdict Members who reach 1000 V-rep become Verdict Peers and gain bonus V-rep.</p>
    <p>Verdict Member levels are constantly under development and are subject to change.</p>
  </div>
  <div v-else class="about-verdict">
    <div class="policy-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="wrapper-terms">
              <h1 class="policy-page-title mx-n1 mx-sm-3 mx-md-0">ABOUT</h1>
              <div class="paragraph">
                <h5>
                  <strong>ABOUT VERDICT</strong>
                </h5>
                <p
                  class="text"
                >VERDICT is a public social network platform that connects news publishers, talented writers, subject professionals and other content providers directly with the thoughtful readers for unbiased peer feedback and honest opinions on breaking news, current events, political stands, business and technology developments, health related discussions, and other topics including debates on world changing ideas and dilemmas.</p>
                <p
                  class="text"
                >Verdict brings everyone closer together by letting everyone constructively speak their mind and collectively come to conclusions based on the presented facts and ideas.</p>
                <p
                  class="text"
                >Verdict reflects on the sociology belief that we are all deeply embedded into the structure of life that shapes us even on the most private and personal levels and that we are all supremely connected to one another to the extent that most public and personal problems are collectively owned by all.</p>
                <p
                  class="text"
                >Verdict inspires this understanding and empowers this interconnectivity to look at all the successes and failures in the society and the world as collectively public achievements and challenges.</p>
                <p
                  class="text"
                >Today we are all members of the large community shaping the world of tomorrow!</p>
                <p class="text">Join VERDICT, what is yours today?</p>
                <br />
              </div>
              <div class="paragraph">
                <h5>
                  <strong>HOW VERDICT WORKS</strong>
                </h5>
                <p
                  class="text"
                >Verdict Member account is required to be able to leave comments or vote.</p>
                <p
                  class="text"
                >You can immediately sign up for an account with just your email address or supported social media account to become Verdict Member. Account registration is very simple and should normally take less than minute.</p>
                <p
                  class="text"
                >Verdict Members start gaining V reputation (V-rep), +1 V-rep for leaving a comment, one time per post. +1 V-rep for submitting a vote for a comment, one time per post. A comment that reaches 10+ votes can become Verdict comment - the most agreed upon comment for that post. Verdicts award bonus V-rep.</p>
                <p
                  class="text"
                >Verified Verdict Members can submit their own posts and gain extra V-rep.</p>
                <p
                  class="text"
                >Verdict Members can reach different levels based on V-rep. Verdict Members who reach 1000 V-rep become Verdict Peers and gain bonus V-rep.</p>
                <p
                  class="text"
                >Verdict Member levels are constantly under development and are subject to change.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 px-0 px-md-3">
            <follow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Follow from "~/components/universal-components/followBlock.vue";

export default {
  amp: "hybrid",
  ampLayout: "default.amp",
  components: {
    Follow,
  },
  data() {
    return {
      headerMenu: null,
    };
  },

  async asyncData({ $axios }) {
    const headerMenu = await $axios.$get(`/api/menu/header`);

    return {
      headerMenu: headerMenu.data,
    };
  },

  created() {
    this.$store.commit("SET_BREADCRUMBS", [{ title: "About" }]);
  },
};
</script>


