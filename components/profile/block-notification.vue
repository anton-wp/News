<template>
  <div class="block-notification px-0 pr-md-3" :class=" small ? 'block-notification__small' : ''">
    <div class="container">
      <div class="row px-0">
        <div class="col-12 block" :class="data.checked ? '' : 'unread'">
          <div class="avatar">
            <!-- <div class="img" v-html="avatar"></div> -->
            <component :is="componentAvatar" />
          </div>
          <div :class=" small ? 'small' : ''" class="content-notif">
            <component :is="componentMessage" :data="data" />

            <time>{{ parse(data.createdAt, 'MMM DD,YYYY HH:mm a ZZ') }}</time>
          </div>
          <!-- <div v-if="postImg" >
            <div class="img" v-html="postImg"></div>
          </div>-->
					<component :is="componentImgPost" />
          <div class="options" v-click-outside="backOption">
            <button @click="openOption" style="height: 45px;">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </button>
            <div class="block-options" v-if="optionOpen">
              <span @click="deleteNotif">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import { format } from "fecha";

export default {
  directives: {
    ClickOutside,
  },
  props: {
    data: Object,
    small: Boolean,
  },
  data() {
    return {
      optionOpen: false,
      message: "",
      avatar: "",
      postImg: "",
    };
  },
  computed: {
    componentMessage() {
      let template = this.data.data.template;

      const keys = this.data.data.template.match(/\{\w*\}/gi);

      if (keys) {
        keys.forEach((k) => {
          template = template.replace(
            k,
            `<component is="${this.typeTag(
              k
            )}" :data="data" type="${k}"></component>`
          );
        });
      }

      return {
        template: `<p>${template}</p>`,
        props: {
          data: Object,
        },
      };
		},
		componentAvatar () {
			return {
				template: `<div class="img">${this.avatarAdd()}</div>`,
			}
		},
		componentImgPost () {
			return {
				template: `<div>${this.postImgAdd()}</div>`,
			}
		}

  },
  created() {
    // this.avatarAdd();
  },
  methods: {
    parse(date, f) {
      return format(new Date(date), f);
    },

    deleteNotif() {
      this.$emit("deleteNotif", this.data.id);
    },

    typeTag(type) {
      const links = [
        "{postTitle}",
        "{postLink}",
        "{commentType}",
        "{checkLink}",
      ];

      const strong = ["{authorName}"];
      const span = ["{point}"];

      if (links.includes(type)) {
        return "tag-a";
      } else if (span.includes(type)) {
        return "tag-span";
      }
      return "tag-strong";
    },

    postImgAdd() {
      switch (this.data.type) {
        case "AuthorPost":
          if (this.data.data.replacements.postImage) {
            return `<nuxt-link to="/${this.data.data.replacements.postSlug}"><img style="width: 70px" src="${this.data.data.replacements.postImage.wide}" alt /></nuxt-link>`;
          } else {
            return ''
          }
        default:
          return '';
      }
    },
    avatarAdd() {
      switch (this.data.type) {
        case "AdminAlertNewReport":
        case "RepliesToComment":
        case "RepliesToPost":
        case "PostInCategory":
        case "VerdictThreshold":
          if (this.data.data.replacements.postImage) {
            return `<nuxt-link to="/${this.data.data.replacements.postSlug}" title="${this.data.data.replacements.postTitle}"><img  src="${this.data.data.replacements.postImage.wide}" alt /></nuxt-link>`;
          } else {
            return "<svg width='60' height='60'><use xlink:href='#shield' /></svg>";
          }
        case "AuthorPost":
          if (this.data.data.replacements.postImage) {
            return `<nuxt-link to="/m/${this.data.data.replacements.userSlug}/posts"><img style="border-radius: 50%" src="${this.data.data.replacements.userAvatar.medium}" alt /></nuxt-link>`;
          } else {
            return "<svg width='60' height='60'><use xlink:href='#shield' /></svg>";
          }
        case "FollowUser":
          if (Object.keys(this.data.data.replacements.userAvatar).length !== 0) {
            return `<nuxt-link to="/m/${this.data.data.replacements.userSlug}/posts"><img style="border-radius: 50%" src="${this.data.data.replacements.userAvatar.medium}" alt /></nuxt-link>`;
          } else {
            return `<img style="border-radius: 50%" src="/image/default-avatar-original.png" alt />`;
          }
        case "AdminAlertNewComment":
        case "PointComment":
          return "<svg width='60' style='color: #ff4242;' height='60'><use xlink:href='#shield' /></svg>";
        case "GoldMedal":
          return "<svg width='60' style='color: #ff4242;' height='60'><use xlink:href='#gold-medal' /></svg>";
        case "SilverMedal":
          return "<svg width='60' style='color: #ff4242;' height='60'><use xlink:href='#silver-medal' /></svg>";
        case "BronzeMedal":
          return "<svg width='60' style='color: #ff4242;' height='60'><use xlink:href='#bronze-medal' /></svg>";;
        default:
          return "<svg width='60' style='color: #ff4242;' height='60'><use xlink:href='#shield' /></svg>";
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
