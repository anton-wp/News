<template>
  <div class="block-notification px-0 pr-md-3">
    <div class="container">
      <div class="row px-0">
        <div class="col-12 block unread">
          <div class="avatar">
            <div class="img"></div>
          </div>
          <div :class=" small ? 'small' : ''" class="content-notif">
            <!-- <p>Well done! You have just gained 30 V-rep for Verdict on "".</p> -->

            <!-- <p>
              New post "
              <nuxt-link
								class="content-link"
                to="/"
              >Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?</nuxt-link>" has been published in "
              <nuxt-link class="content-link" to="/">Health</nuxt-link>".
            </p>-->

            <!-- <p>
              <strong>Tracy Few</strong>
              published post "
              <nuxt-link
                class="content-link"
                to="/"
              >Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?</nuxt-link>".
            </p> -->

            <time>Mar 28,2020 6:14 pm EST</time>
          </div>
          <!-- <div class="post-trumbail">
            <nuxt-link to="/">
              <img
                src="https://verdict.org/uploads/media/2020/07/724d08dd3b315c4ad4a9a1f30ca0531c_1692_thumbnail.jpg"
                alt="img"
              />
            </nuxt-link>
          </div> -->
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
    ClickOutside,
  },
  props: {
    small: Boolean,
  },
  data() {
    return {
      optionOpen: false,
    };
  },
  methods: {
    openOption() {
      this.optionOpen = true;
    },
    backOption() {
      this.optionOpen = false;
    },
  },
};
</script>
