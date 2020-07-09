<template>
  <div class="comment">
    <author-block :author="data.user" :publishedAt="data.createdAt" :type="'comment-replies'" />
    <!-- <div class="verdict">
      <svg v-if="!data.isVerdict" width="40" height="40">
        <use xlink:href="#verdict-icon-custom" />
      </svg>
      <svg v-if="data.isVerdict" width="40" height="40">
        <use xlink:href="#verdict-icon-selected" />
      </svg>
      <div style="margin-left: 10px">
        <span class="value">1</span>
        <span class="label">VOTE(S)</span>
      </div>
    </div>-->
    <div class="title">
      <p>{{data.body}}</p>
      <p></p>
      <br />
    </div>
    <div class="buttons">
      <button @click="reply">
        <svg width="14" height="17">
          <use xlink:href="#reply" />
        </svg>
        Reply
      </button>
      <button>
        <svg width="14" height="17">
          <use xlink:href="#flag" />
        </svg>
        Report
      </button>
      <button>
        <svg width="14" height="17">
          <use xlink:href="#share-alt" />
        </svg>
        Share
      </button>
    </div>
    <div class="replies">
      <reply-comment
        v-if="commentsReply === data.id"
        :postId="postId"
        :id="data.id"
        @createComments="createComments"
      />
    </div>
    <div class="comments" :class="index === 1 ? 'comment-2-replise' : null" v-if="data.hasReplies">
      <comment-replies
        v-for="comment in data.children"
        :key="comment.id"
        :data="comment"
        :postId="postId"
        :index="index + 1"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ReplyComment from "~/components/singlePost/reply-comment.vue";

export default {
  name: "comment-replies",
  components: {
    AuthorBlock,
    ReplyComment
  },
  data() {
    return {
      dataReplies: []
    };
  },
  props: {
    data: Object,
    postId: String,
    index: Number
  },
  computed: {
    ...mapState(["commentsReply"])
  },
  mounted() {
    console.log(this.data);
  },
  methods: {
    createComments(data) {
      this.dataReplies.push(data);
    },
    reply() {
      if (this.data.id !== this.commentsReply) {
        this.$store.commit("ADD_COMMENT_REPLY", this.data.id);
      } else {
        this.$store.commit("ADD_COMMENT_REPLY", "");
      }
    }
  },
  mounted() {
    // console.log(this.data)
  }
};
</script>
