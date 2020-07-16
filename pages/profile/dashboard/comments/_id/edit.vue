<template>
  <div class="edit__comment">
    <h2 v-if="data.parent">Reply to {{data.parent.title}}</h2>
    <h2 v-if="!data.parent && data.post">
      Comment for
      <nuxt-link to="`/${data.post.slug}`">{{data.post.title}}</nuxt-link>
    </h2>
    <author-block v-if="data.user" :author="data.user" :publishedAt="data.createdAt" :type="true" />
    <textarea v-model="body" />
    <div class="block-button text-right">
      <button
        class="update"
        @click="blockComment"
        :disabled="disabled"
      >{{block ? 'unblock' : 'block'}}</button>
      <button class="update" @click="updateComment" :disabled="disabled">update</button>
      <button class="delete" @click="deleteComment" :disabled="disabled">delete</button>
    </div>
  </div>
</template>

<script>
import AuthorBlock from "~/components/singlePost/authorBlock.vue";

export default {
  layout: "profileSmall",
  components: {
    AuthorBlock
  },
  data() {
    return {
      data: Object,
      body: "",
      disabled: false,
      block: Boolean
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    blockComment() {
      this.disabled = true;
      let data = {
        commentId: this.body
      };
      this.$axios
        .$post(`/api/admin/comments/${this.$route.params.id}/block`)
        .then(res => {
          this.$toasted.show(res.message);
          this.disabled = false;
          this.block = !this.block;
        })
        .catch(error => {
          this.disabled = false;
          this.$toasted.error(error.response.data.message);
        });
    },
    updateComment() {
      let data = {
        body: this.body
      };
      this.disabled = true;
      this.$axios
        .$post(`/api/comments/${this.$route.params.id}`, data)
        .then(res => {
          this.$toasted.show(res.message);
          this.disabled = false;
        })
        .catch(error => {
          this.disabled = false;
          this.$toasted.error(error.response.data.message);
        });
    },
    deleteComment() {
      this.disabled = true;
      this.$axios
        .$delete(`/api/comments/${this.$route.params.id}/delete`)
        .then(res => {
          this.$router.push({ path: "/profile/dashboard/comments" });
          this.$toasted.show(res.message);
          this.disabled = false;
        })
        .catch(error => {
          this.disabled = false;
          this.$toasted.error(error.response.data.message);
        });
    },
    getComment() {
      this.$axios
        .$get(`/api/admin/comments/${this.$route.params.id}`)
        .then(res => {
          this.data = res.data;
          this.body = res.data.body;
          this.block = res.data.blocked;
        });
    }
  }
};
</script>

<style lang="scss">
.edit__comment {
  display: flex;
  flex-direction: column;

  a {
    color: inherit;
    text-decoration: none;
  }
  textarea {
    width: 100%;
    height: 200px;
    margin-top: 20px;
    border-top: 5px solid #222222;
    font-family: "Open Sans";
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
    overflow: hidden;
    outline: 0px solid transparent;
  }
  .text-right {
    margin-left: auto;
  }
  .block-button {
    margin-top: 1.4em;

    button {
      user-select: none;
      padding: 0.5em 1.4em 0.5em 1.4em;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #fefefe;
      border: none;
      margin-left: 5px;
      transition: background-color 0.25s;
      font-size: 0.9rem;
      background-color: white;
    }

    .update {
      border: 1px solid #8d8d8d;
      color: #8d8d8d;

      &:hover {
        background-color: #606060;
        color: white;
      }
    }

    .delete {
      border: 1px solid #ff4242;
      color: #ff4242;

      &:hover {
        background-color: #bc2d2d;
        border-color: #a10000;
        color: white;
      }
    }
  }
}
</style>
