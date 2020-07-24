<template>
  <div class="comment">
    <author-block :author="data.user" :publishedAt="data.createdAt" :type="'comment-replies'" />
    <div class="title-comment">
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
      <button @click="openReport">
        <svg width="14" height="17">
          <use xlink:href="#flag" />
        </svg>
        Report
      </button>
      <button @click="openShareBlock = !openShareBlock">
        <svg width="14" height="17">
          <use xlink:href="#share-alt" />
        </svg>
        Share
        <div class="block__share" v-if="openShareBlock">
          <comment-share :parenPostId="parenPostId" :post="data" />
        </div>
      </button>
    </div>
    <div class="replies">
      <reply-comment
        v-if="commentsReply === data.id"
        :postId="postId"
        :id="data.id"
        @createComments="createComments"
        @updateCommentReplies="updateCommentReplies()"
      />
    </div>
    <div class="comments" :class="index === 1 ? 'comment-2-replise' : null" v-if="data.hasReplies">
      <comment-replies
        v-for="comment in data.children"
        :key="comment.id"
        :data="comment"
        :postId="postId"
        :parenPostId="parenPostId"
        :index="index + 1"
        @updateCommentReplies="updateCommentReplies()"
      />
    </div>
    <modal-window v-if="report" @closeModal="closeReport">
      <div class="report">
        <label v-for="item in reportArr" :key="item">
          <input type="radio" :value="item" v-model="reportValue" />
          {{ item }}
        </label>
        <button class="report-button" @click="reportClick">Report</button>
      </div>
    </modal-window>
    <modal-window v-if="reportInput" @closeModal="closeReportInput">
      <div class="report">
        <textarea class="something-else" v-model="somethingElse"></textarea>
        <button class="report-button" @click="reportsComments(somethingElse)">Report</button>
      </div>
    </modal-window>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ReplyComment from "~/components/singlePost/reply-comment.vue";
import CommentShare from "~/components/singlePost/comment-share.vue";
import modalWindow from "~/components/universal-components/modalWindow.vue";

export default {
  name: "comment-replies",
  components: {
    AuthorBlock,
    ReplyComment,
    CommentShare,
    modalWindow
  },
  data() {
    return {
      openShareBlock: false,
      report: false,
      reportInput: false,
      reportValue: "",
      somethingElse: "",
      dataReplies: [],
      reportArr: [
        "spam",
        "sexually explicit or suggestive",
        "violent or dangerous",
        "hate speech, harassment, or bullying",
        "something else"
      ]
    };
  },
  props: {
    data: Object,
    postId: String,
    parenPostId: String,
    index: Number
  },
  computed: {
    ...mapState(["commentsReply"])
  },
  methods: {
    updateCommentReplies() {
      this.$emit("updateCommentReplies");
    },
    createComments(data) {
      this.dataReplies.push(data);
    },
    reply() {
      if (this.data.id !== this.commentsReply) {
        this.$store.commit("ADD_COMMENT_REPLY", this.data.id);
      } else {
        this.$store.commit("ADD_COMMENT_REPLY", "");
      }
    },
    reportClick() {
      if (this.reportValue === "something else") {
        this.report = false;
        this.reportInput = true;
      } else {
        this.reportsComments();
      }
    },
    reportsComments(reportMessage) {
      let data = reportMessage
        ? { reportType: this.reportValue, reportMessage: reportMessage }
        : { reportType: this.reportValue };
      this.$axios
        .$post(`/api/comments/${this.data.id}/reports`, data)
        .then(res => {
          this.$toasted.show(res.message);
          this.closeReport();
          this.closeReportInput();
        })
        .catch(error => {
          console.log(error);
        });
    },
    openReport() {
      this.report = true;
    },
    closeReport() {
      this.report = false;
    },
    closeReportInput() {
      this.reportInput = false;
    }
  },
  created() {
    this.reportValue = this.reportArr[0];
  }
};
</script>
