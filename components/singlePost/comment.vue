<template>
  <div style="position: relative;">
    <div class="comment" :class="data.isVerdict ? 'verdict-active' : ''">
      <div class="position__verdict__comment" v-if="data.isVerdict">
        <block-verdict :verdict="data.verdictThreshold" :comment="true" />
      </div>
      <author-block
        :author="data.user"
        :publishedAt="data.createdAt"
        :type="'comment'"
        :postReaction="data.postReaction"
				:postReactionString="data.postReactionString"
      />
      <div class="verdict" v-if="data.status !== 'Pending review'" @click="auth.loggedIn ? voteAdd() : LogIn()">
        <svg v-if="!votes.includes(data.id)" width="40" height="40">
          <use xlink:href="#verdict-icon-custom" />
        </svg>
        <svg v-else width="40" height="40">
          <use xlink:href="#verdict-icon-selected" />
        </svg>
        <div style="margin-left: 10px">
          <span class="value">{{ data.votes ? data.votes : '0' }}</span>
          <span class="label">VOTE(S)</span>
        </div>
      </div>
      <div class="title-comment">
        <p>{{data.body}}</p>
        <div class="notice" v-if="data.status === 'Pending review'">Pending</div>
        <p></p>
        <br />
      </div>
      <div class="buttons" v-if="data.status !== 'Pending review'">
        <button @click="auth.loggedIn ? reply() : LogIn()">
          <svg width="14" height="17">
            <use xlink:href="#reply" />
          </svg>
          Reply
        </button>
        <button @click="auth.loggedIn ? openReport() : LogIn()">
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
            <comment-share :post="data" />
          </div>
        </button>
      </div>
    </div>
    <div class="replies">
      <reply-comment
        v-if="commentsReply === data.id"
        :postId="postId"
        :id="data.id"
        @createComments="createComments"
      />
    </div>
    <div v-if="data.hasReplies && !data.children" class="button-open-replies">
      <hr v-if="replies" />
      <button v-if="replies" @click="getCommentReplies">
        See all replies
        <svg width="15" height="15">
          <use xlink:href="#caret-down" />
        </svg>
      </button>
    </div>
    <div v-if="!data.children" class="comments comment-2-replise">
      <comment-replies
        v-for="comment in dataReplies"
        :key="comment.id"
        :data="comment"
        :postId="postId"
        :parenPostId="data.id"
        :index="1"
        @updateCommentReplies="updateCommentReplies()"
      />
    </div>
    <div v-else class="comments comment-2-replise">
      <comment-replies
        v-for="comment in data.children"
        :key="comment.id"
        :data="comment"
        :postId="postId"
        :parenPostId="data.id"
        :index="1"
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
import CommentReplies from "~/components/singlePost/comment-replies.vue";
import CommentShare from "~/components/singlePost/comment-share.vue";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ReplyComment from "~/components/singlePost/reply-comment.vue";
import modalWindow from "~/components/universal-components/modalWindow.vue";
import BlockVerdict from "~/components/universal-components/block-verdict";

export default {
  name: "comment",
  components: {
    AuthorBlock,
    ReplyComment,
    CommentReplies,
    modalWindow,
    CommentShare,
    BlockVerdict,
  },
  data() {
    return {
      dataReplies: [],
      replies: true,
      report: false,
      reportInput: false,
      openShareBlock: false,
      reportValue: "",
      somethingElse: "",
      voteDisabled: false,
      reportArr: [
        "spam",
        "sexually explicit or suggestive",
        "violent or dangerous",
        "hate speech, harassment, or bullying",
        "something else",
      ],
    };
  },
  props: {
    data: Object,
    postId: String,
    type: Boolean,
  },
  computed: {
    ...mapState(["commentsReply", "votes", "auth"]),
  },
  created() {
    this.reportValue = this.reportArr[0];
    if (this.type && this.data.hasReplies) {
      this.getCommentReplies();
    }
  },
  methods: {
    updateCommentReplies() {
      if (!this.data.children) {
        this.getCommentReplies();
      } else {
        this.$emit("getComments");
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
        .then((res) => {
          this.$toasted.show(res.message);
          this.closeReport();
          this.closeReportInput();
        })
        .catch((error) => {
          console.log(error);
        });
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
        .then((res) => {
          this.dataReplies = res.data;
          this.replies = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    voteAdd() {
      if (!this.voteDisabled) {
        this.voteDisabled = true;
        this.$axios
          .post(`/api/comments/${this.data.id}/vote`)
          .then((res) => {
            this.voteDisabled = false;
            this.$emit("updateComment", res.data.data);
            this.$toasted.show(res.data.message);
            this.$store.commit("ADD_VOTE", this.data.id);
          })
          .catch((error) => {
            this.$toasted.error(error.response.data.message);
          });
      }
    },
    openReport() {
      this.report = true;
    },
    reply() {
      if (this.data.id !== this.commentsReply) {
        this.$store.commit("ADD_COMMENT_REPLY", this.data.id);
      } else {
        this.$store.commit("ADD_COMMENT_REPLY", "");
      }
    },
    LogIn() {
      let data = {
        open: true,
        type: "logIn",
      };
      this.$store.commit("UPDATE_LOGIN_POPUP", data);
    },
  },
};
</script>
