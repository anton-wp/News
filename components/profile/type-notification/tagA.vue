<template>
  <nuxt-link :to="`${link}`" class="content-link">{{ title }}</nuxt-link>
</template>

<script>
export default {
  name: "tag-a",
  data() {
    return {
      title: "",
      link: "",
    };
  },
  props: {
    data: Object,
    type: String,
  },
  created() {
    this.createMessage();
  },
  methods: {
    createMessage() {
      switch (this.type) {
        case "{postLink}":
        case "{postTitle}":
          this.title = this.data.data.replacements.postTitle;
          this.link = `/${this.data.data.replacements.postSlug}`;
          break;

        case "{checkLink}":
          this.title = "check it";
          this.link = `/profile/dashboard/comment/${this.data.data.replacements.reportId}/edit`;
          break;
        case "{commentType}":
          this.title = "CommentBody";
          this.link = `/${this.data.data.replacements.postSlug}/comments/commentId`;
          break;
        default:
          break;
      }
    },
  },
};
</script>
