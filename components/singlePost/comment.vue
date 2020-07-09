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
      <button @click="openReport">
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
    <div v-if="data.hasReplies" class="button-open-replies">
      <hr v-if="replies" />
      <button v-if="replies" @click="getCommentReplies">
        See all replies
        <svg width="15" height="15">
          <use xlink:href="#caret-down" />
        </svg>
      </button>
    </div>
    <div class="comments comment-2-replise">
      <comment-replies
        v-for="comment in dataReplies"
        :key="comment.id"
        :data="comment"
        :postId="postId"
        :index="1"
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
        <button class="report-button" @click="reportsComents(somethingElse)">Report</button>
      </div>
    </modal-window>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommentReplies from "~/components/singlePost/comment-replies.vue";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ReplyComment from "~/components/singlePost/reply-comment.vue";
import modalWindow from "~/components/universal-components/modalWindow.vue";

export default {
  name: "comment",
  components: {
    AuthorBlock,
    ReplyComment,
    CommentReplies,
    modalWindow
  },
  data() {
    return {
      dataReplies: [],
      replies: true,
			report: false,
			reportInput: false,
			reportValue: "",
			somethingElse: '',
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
    postId: String
  },
  computed: {
    ...mapState(["commentsReply"])
  },
  created() {
    this.reportValue = this.reportArr[0];
  },
  methods: {
    reportClick() {
      if (this.reportValue === "something else") {
				this.report = false
				this.reportInput = true;
      } else {
				this.reportsComents()
      }
    },
    reportsComents(reportMessage) {
      let data = reportMessage
        ? { reportType: this.reportValue, reportMessage: reportMessage }
        : { reportType: this.reportValue };
      this.$axios
        .$post(`/api/comments/${this.data.id}/reports`, data)
        .then(res => {
          console.log(res);
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
    },
    createComments(data) {
      this.dataReplies.push(data);
    },
    getCommentReplies() {
      this.$axios
        .$get(`/api/posts/${this.postId}/comments/${this.data.id}`)
        .then(res => {
          this.dataReplies = res.data;
          this.replies = false;
        })
        .catch(error => {
          console.log(error);
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
