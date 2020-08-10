<template>
  <div class="block-notification px-0 pr-md-3">
    <div class="container">
      <div class="row px-0">
        <div class="col-12 block unread">
          <div class="avatar">
            <!-- <div v-if="data.data.object" class="img">
              <img v-if="data.data.object.featured" :src="data.data.object.featured.wide" alt />
            </div>-->
            <!-- <div class="img"> -->
            <!-- <slot name="img"></slot> -->
            <!-- <img v-if="data.data.object.featured" :src="data.data.object.featured.wide" alt=""> -->
            <!-- </div> -->
            <!-- <div class="img"></div> -->
          </div>
          <div :class=" small ? 'small' : ''" class="content-notif">
            <!-- <slot name="content">{{ message }}</slot> -->
            <!-- <p>Well done! You have just gained 30 V-rep for Verdict on "".</p> -->

            <!-- <p v-if="data.type === 'PostInCategory'">

              New post "
              <nuxt-link
                class="content-link"
                to="/"
              >Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?</nuxt-link>" has been published in "
              <nuxt-link class="content-link" to="/">Health</nuxt-link>".
            </p>-->

            <p>
              <span v-html="message" ref="content"></span>
              <!-- <strong>Tracy Few</strong>
              published post "
              <nuxt-link
                class="content-link"
                to="/"
              >Daily Mail Accused Of Publishing Misinformation—Was It Really Chinese Supplied Information?</nuxt-link>".-->
            </p>

            <time>{{ parse(data.createdAt, 'MMM DD,YYYY HH:mm a ZZ') }}</time>
          </div>
          <!-- <div class="post-trumbail">
            <nuxt-link to="/">
              <img
                src="https://verdict.org/uploads/media/2020/07/724d08dd3b315c4ad4a9a1f30ca0531c_1692_thumbnail.jpg"
                alt="img"
              />
            </nuxt-link>
          </div>-->
          <div class="options" v-click-outside="backOption">
            <button @click="openOption" style="height: 45px;">
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
import test from "~/components/profile/test";
import { format } from "fecha";

export default {
  directives: {
    ClickOutside,
  },
  components: {
    test,
  },
  props: {
    data: Object,
    small: Boolean,
  },
  data() {
    return {
      optionOpen: false,
      message: "",
    };
  },
  created() {
    console.log(this.data);
    // this.message = this.data.message.replace(
    //   "{authorName}",
    //   `<strong>${this.data.data.user.firstName}${this.data.data.user.lastName}</strong>`
    // );
    this.createdNotif();
    this.addNuxtLink();
  },
  mounted() {
    const links = this.$refs.content.querySelectorAll("a");

    Array.from(links).map((link) => {
      link.addEventListener("click", (e) => {});
    });
  },
  methods: {
    parse(date, f) {
      return format(new Date(date), f);
    },
    createdNotif() {
      switch (this.data.type) {
        case "AuthorPost":
          this.message = this.data.data.template.replace(
            "{authorName}",
            `<strong>${this.data.data.user.firstName} ${this.data.data.user.lastName}</strong>`
          );
          this.message = this.message.replace(
            "{postLink}",
            `<a href="/${this.data.data.object.slug}" class="content-link">${this.data.data.object.title}</a>`
          );
          break;
        case "RepliesToComment":
          this.message = this.data.data.template.replace(
            "{authorName}",
            `<strong>${this.data.data.user.firstName} ${this.data.data.user.lastName}</strong>`
          );
          this.message = this.message.replace(
            "{postLink}",
            `<a href="/${this.data.data.object.post.slug}" class="content-link">${this.data.data.object.post.title}</a>`
          );
          this.message = this.message.replace(
            "{commentType}",
            `<a href="/${this.data.data.object.post.slug}/comments/${this.data.data.object.id}" class="content-link">${this.data.data.object.body}</a>`
          );
          break;
        // case "AdminAlert":
        //   this.message = this.data.data.template.replace(
        //     "{authorName}",
        //     `<strong>${this.data.data.user.firstName} ${this.data.data.user.lastName}</strong>`
        //   );
        //   this.message = this.message.replace(
        //     "{postLink}",
        //     `<a href="/${this.data.data.object.post.slug}" class="content-link">${this.data.data.object.post.title}</a>`
        //   );
        //   this.message = this.message.replace(
        //     "{check it}",
        //     `<a href="/${this.data.data.object.post.slug}/comments/${this.data.data.object.id}" class="content-link">${this.data.data.object.body}</a>`
        //   );
        //   break;
        // case "PointComment":
        //   this.message = this.data.data.template.replace(
        //     "{authorName}",
        //     `<strong>${this.data.data.user.firstName} ${this.data.data.user.lastName}</strong>`
        //   );
        //   this.message = this.message.replace(
        //     "{postLink}",
        //     `<a href="/${this.data.data.object.post.slug}" class="content-link">${this.data.data.object.post.title}</a>`
        //   );
        //   this.message = this.message.replace(
        //     "{check it}",
        //     `<a href="/${this.data.data.object.post.slug}/comments/${this.data.data.object.id}" class="content-link">${this.data.data.object.body}</a>`
        //   );
        //   break;

        default:
          break;
      }
    },
    addNuxtLink() {
      if (process.client) {
        let link = this.$el;
        console.log(link);
        // Vue.prototype.trans = (key, replace = {}) => {
        //   let translation = key
        //     .split(".")
        //     .reduce((t, i) => t[i] || null, window.i18n[lang]);

        //   for (let placeholder in replace) {
        //     translation = translation.replace(
        //       `:${placeholder}`,
        //       replace[placeholder]
        //     );
        //   }

        //   return translation;
        // };
        // link.forEach((el) => {
        //   el.addEventListener("click", function (event) {
        //     event.preventDefault();
        //     console.log(this.href);
        //     // this.$router.push('')
        //   });
        // });
      }
    },

    openOption() {
      this.optionOpen = true;
    },
    backOption() {
      this.optionOpen = false;
    },
  },
};
</script>
