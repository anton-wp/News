<template>
  <div
    class="comment-block mx-n15 mx-md-0"
    :class="comment.isVerdict ? 'verdict__comment__block'  : ''"
  >
    <div v-if="comment.isVerdict" class="position__verdict__comment">
      <block-verdict :verdict="comment.verdictThreshold" />
    </div>
    <div class="title__comment" :class="comment.isVerdict ? 'verdict__title'  : ''">
      <nuxt-link :to="`/${comment.post.slug}`" class="comment__title">{{ comment.post.title }}</nuxt-link>
    </div>
    <nuxt-link
      v-if="type === 'all' || type === 'replies'"
      class="view"
      :to="`/${comment.post.slug}/comments/${comment.id}`"
    >view</nuxt-link>
    <span v-if="type === 'subscription'" @click="unsubscribe" class="view">unsubscribe</span>
    <time class="date">
      {{ new Date(comment.createdAt).toDateString() }}
      <span v-if="comment.parent">
        | reply to
        <nuxt-link
          class="date__link"
          :to="`/${comment.post.slug}/comments/${comment.id}`"
        >{{comment.user.firstName}} {{comment.user.lastName}}</nuxt-link>
      </span>
    </time>
    <div class="content-comment__profile">
      <div class="content__comment">
        <p class>{{ comment.body }}</p>
				<div class="notice" v-if="comment.status === 'Pending review'">Pending</div>
      </div>
      <div class="content__points" v-if="!comment.parent">
        <span class="content__points__count">{{ comment.votes ? comment.votes : '0' }}</span>
        <span class="content__points__vote">vote(s)</span>
      </div>
    </div>
  </div>
</template>

<script>
import BlockVerdict from "~/components/universal-components/block-verdict";

export default {
  components: {
    BlockVerdict,
  },
  props: {
    comment: Object,
    type: String,
  },
  methods: {
    unsubscribe() {
      this.$emit("unsubscribe", this.comment.id);
    },
  },
};
</script>

<style lang="scss">
.verdict__comment__block {
  padding-top: 2em !important;
  background-color: #f4f4f4;

  @media (max-width: 460px) {
    padding-top: 4em !important;
  }

  .verdict__title {
    @media (max-width: 460px) {
      padding-right: 0px;
    }
  }
}
.verdict__title {
  padding-right: 8em;
}
.comment-block {
  display: flex;
  flex-direction: column;
  padding: 0.2em 1.7em 1.7em 2.1em;
  margin-bottom: 1em;
  border-bottom: 1px solid black;

  @media (max-width: 768px) {
    padding: 0.2em 0 1.7em 2.1em;
  }
  @media (max-width: 460px) {
    padding: 0.2em 0 1.7em 0.8em;
  }

  .title__comment {
    text-overflow: ellipsis;
    max-height: 1.8em;
    overflow: hidden;

    .comment__title {
      letter-spacing: 0.35px;
      transition: color 0.25s;
      font-size: 1.22em;
      white-space: nowrap;
      font-weight: 700;
      color: black;
      text-decoration: none;

      &:hover {
        color: #ff4242;
      }
    }
  }
  .position__verdict__comment {
    position: absolute;
    top: 0;
    right: 2.9em;
  }
  .content-comment__profile {
    display: flex;
    margin-top: 0px !important;

    .content__comment {
      margin: 0.5em 0;

      word-wrap: normal;
      word-break: normal;
      line-break: auto;
      text-align: justify;
      text-indent: 1em;
      p {
        font-size: 1.2em;
        line-height: 1.6;
        @media (max-width: 768px) {
          font-size: 1.1em;
        }
        @media (max-width: 460px) {
          font-size: 1em;
        }
      }
    }

    .content__points {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: auto;

      @media (max-width: 460px) {
        padding-left: 16px;
      }

      .content__points__count {
        font-size: 1.8em;
        line-height: 1;
        font-weight: 400;
        @media (max-width: 460px) {
          font-size: 1.5em;
        }
      }

      .content__points__vote {
        color: #ff4242;
        font-size: 16px;
        line-height: 1.5;
        font-weight: 400;
        @media (max-width: 460px) {
          font-size: 0.8em;
        }
      }
    }
  }

  .date {
    line-height: 1;
    color: #8d8d8d;
    font-weight: 400;
    font-size: 16px;

    .date__link {
      color: inherit;
      text-decoration: none;
    }
  }

  .view {
    color: #ff4242;
    font-size: 1.1em;
    margin-bottom: 0.5em;
    display: inline-block;
    vertical-align: bottom;
    line-height: 1.2;
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
      text-decoration: none;
      color: #ff4242;
    }
  }
}
</style>
