<template>
  <div class="comment">
    <author-block
      :author="data.user"
      :publishedAt="data.createdAt"
      :type="'comment'"
      :postReaction="data.postReaction"
    />
    <div class="verdict">
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
    </div>
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
      <reply-comment v-if="commentsReply === data.id" :postId="postId" :id="data.id" />
    </div>
    <div v-if="data.hasReplies" class="button-open-replies">
			<hr/>
      <button @click="getCommentReplies">
        See all replies
        <svg width="15" height="15">
          <use xlink:href="#caret-down" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ReplyComment from "~/components/singlePost/reply-comment.vue";

export default {
  components: {
    AuthorBlock,
    ReplyComment
  },
  props: {
    data: Object,
    postId: String
  },
  computed: {
    ...mapState(["commentsReply"])
  },
  methods: {
    getCommentReplies() {
      this.$axios
        .$get(`/api/posts/${this.postId}/comments/${this.data.id}`)
        .then(res => {
          console.log(res);
        });
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
