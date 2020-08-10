<template>
  <div>
    <slot-notification-block :data="data" :small="small">
      <template #img>
        <div v-if="data.data.object.featured" class="img">
          <img :src="data.data.object.featured.wide" alt />
        </div>
        <div v-else class="img">
          <svg v-if="data.type === 'AdminAlert' || data.type === 'RepliesToComment'" width="60" height="60" style="color: #ff4242;">
            <use xlink:href="#shield" />
          </svg>
        </div>
      </template>
      <template #content>
        <div v-if="data.type === 'PostInCategory'">
          New post "
          <nuxt-link
            class="content-link"
            :to="`/${data.data.object.slug}`"
          >{{ data.data.object.title }}</nuxt-link>" has been published in "
          <nuxt-link
            class="content-link"
            :to="`/${ data.data.object.category.slug }`"
          >{{ data.data.object.category.name }}</nuxt-link>".
        </div>
        <div v-if="data.type === 'AuthorPost'">
          <strong>{{ data.data.user.firstName }} {{ data.data.user.lastName }}</strong>
          "
          <nuxt-link
            class="content-link"
            :to="`/${data.data.object.slug}`"
          >{{ data.data.object.title }}</nuxt-link>
        </div>
        <div v-if="data.type === 'PointComment'">
          "Well done! You have just gained {{ data.data.object.transaction.amount }}
          V-rep for Comment on "
          <nuxt-link
            class="content-link"
            :to="`/${data.data.object.comment.post.slug}`"
          >{{ data.data.object.comment.post.title }}</nuxt-link>".
        </div>
        <div v-if="data.type === 'RepliesToComment'">
          <strong>{{ data.data.user.firstName }} {{ data.data.user.lastName }}</strong>
         	replied to your "
          <nuxt-link class="content-link" :to="`/profile/dashboard/comment/${ data.data.object.id }`">{{ data.data.object.body }}</nuxt-link>
					" on post titled "
					<nuxt-link
            class="content-link"
            :to="`/${data.data.object.post.slug}`"
          >{{ data.data.object.post.title }}</nuxt-link>
					".
        </div>
        <div v-if="data.type === 'AdminAlert'">
          <strong>{{ data.data.user.firstName }} {{ data.data.user.lastName }}</strong>
         	reported comment for "
          <nuxt-link
            class="content-link"
            :to="`/${data.data.object.slug}`"
          >{{ data.data.object.title }}</nuxt-link>
          ", please <nuxt-link class="content-link" :to="`/profile/dashboard/comment/${ data.data.object.id }/edit`"> check it </nuxt-link>
        </div>
      </template>
    </slot-notification-block>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
import SlotNotificationBlock from "~/components/profile/slot-block-notification";
import { format } from "fecha";

export default {
  directives: {
    ClickOutside,
  },
  components: {
    SlotNotificationBlock,
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
            `<a
								class="content-link"
               	href='/'
              >${this.data.data.object.title}</a>`
          );

          break;

        default:
          break;
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
