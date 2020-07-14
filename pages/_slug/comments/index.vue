<template>
  <div class="post-layout">
    <div class="policy-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <div class="container pad0">
              <head-comment-page v-if="data" :data="data" />

              <div class="col-lg-12">
                <div class="comment-wrapper">
                  <span class="title">your verdict</span>
                  <span class="about" @mouseenter="message = true" @mouseleave="message = false">
                    About Verdict
                    <svg class="icon" width="17" height="17">
                      <use xlink:href="#eclipse-question" />
                    </svg>
                  </span>
                </div>
                <span
                  v-if="message"
                  class="aboutPopup"
                >Verdict is top voted comment by all members. One vote per member. Verdict can change over time.</span>
              </div>
              <div class="col-12">
                <textarea class="form-input with-border" v-model="comment"></textarea>
                <div class="blockCheckbox">
                  <label for="checkbox" @click="subscribe = !subscribe">
                    <div class="categoryCheckbox">
                      <svg width="10" height="10" v-if="subscribe">
                        <use xlink:href="#checkbox" />
                      </svg>
                      <input type="checkbox" class="checkbox" />
                    </div>subscribe to comments
                  </label>
                </div>
                <div class="blockButton">
                  <button @click="createdComment(true)">agree</button>
                  <button @click="createdComment(false)">disagree</button>
                </div>
                <div
                  class="commentscomment-1-replise"
                  v-for="comment of comments"
                  :key="comment.id"
                  :id="comment.id"
                >
                  <comment
                    v-if="data"
                    :postId="data.id"
                    :data="comment"
										:type="true"
                    @getComments="getComments"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <follow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadCommentPage from "~/components/singlePost/head-comment-page.vue";
import Follow from "~/components/universal-components/followBlock.vue";
import Comment from "~/components/singlePost/comment.vue";

export default {
  components: {
    Follow,
    HeadCommentPage,
    Comment
  },
  data() {
    return {
      data: null,
      comment: "",
      message: false,
      subscribe: true,
      comments: [],
      page: 1,
      orderBy: "date",
      order: "ASC"
    };
  },

  created() {
    this.getPost();
  },
  methods: {
    createdComment(postReaction) {
      let data = {
        body: this.comment,
        postReaction: postReaction,
        subscribe: this.subscribe
      };
      this.$axios
        .$post(`/api/posts/${this.data.id}/comments`, data)
        .then(res => {
          this.comments.push(res.data);
          this.comment = "";
        });
    },
    getComments(loadMore) {
      this.$axios
        .$get(
          `/api/posts/${this.data.id}/comments?order=${this.order}&orderBy=${this.orderBy}&page=${this.page}`
        )
        .then(res => {
          if (loadMore) {
            this.comments = [...this.comments, ...res.data];
          } else {
            this.comments = res.data;
          }
          this.paginations = res.pagination;
          this.disabled = false;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getPost() {
      this.$axios
        .$get(`/api/${this.$route.params.slug}`)
        .then(res => {
          this.data = res.data;
          this.getComments();
          this.$store.commit("SET_BREADCRUMBS", [
            {
              title: this.data.category.name,
              path: "/" + this.data.category.slug
            },
            { title: this.data.title }
          ]);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

