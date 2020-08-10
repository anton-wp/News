<template>
  <div v-if="$isAMP" class="container">
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
      <nuxt-link
        :to="'/amp/' + menuLink.path"
        v-for="(menuLink, index) of headerMenu"
        :key="index"
      >{{ menuLink.title }}</nuxt-link>
    </amp-sidebar>

    <big-header :userAuthor="userInfo" />

    <div class="tabs">
      <nuxt-link :to="`/amp/m/${slug}/comments`" class="tabs__item tabs__item--active">
        <svg width="20" height="20">
          <use xlink:href="#Comments" />
        </svg>
        COMMENTS
      </nuxt-link>
      <nuxt-link :to="`/amp/m/${slug}/posts`" class="tabs__item">
        <svg width="20" height="20">
          <use xlink:href="#Posts" />
        </svg>
        POSTS
      </nuxt-link>
      <nuxt-link :to="`/amp/m/${slug}/followers`" class="tabs__item">
        <svg width="20" height="20">
          <use xlink:href="#Followers" />
        </svg>
        FOLLOWERS
      </nuxt-link>
      <nuxt-link :to="`/amp/m/${slug}/following`" class="tabs__item">
        <svg width="20" height="20">
          <use xlink:href="#Followers" />
        </svg>
        FOLLOWING
      </nuxt-link>
    </div>

    <div class="comments" v-if="comments.length > 0">
      <div
        class="comment-block comment mx-n15 mx-md-0"
        :class="comment.isVerdict ? 'verdict__comment__block'  : ''"
        v-for="comment in comments"
        :key="comment.id"
      >
        <div v-if="comment.isVerdict" class="position__verdict__comment">
          <div class="verdict__block shadow">
            <svg width="33" height="40" :class="comment ? 'comment-adaptive' : ''">
              <use xlink:href="#verdict-icon-selected" />
            </svg>
            <span class="verdict-value">{{comment.verdictThreshold}}%</span>
          </div>
        </div>
        <div class="title__comment" :class="comment.isVerdict ? 'verdict__title'  : ''">
          <nuxt-link
            :to="`/amp/${comment.post.slug}`"
            class="comment__title"
          >{{ comment.post.title }}</nuxt-link>
        </div>
        <time class="date">{{ new Date(comment.createdAt).toDateString() }}</time>
        <div class="content-comment__profile">
          <div class="content__comment">
            <p class>{{ comment.body }}</p>
          </div>
          <div class="content__points" v-if="!comment.parent">
            <span class="content__points__count">{{ comment.votes ? comment.votes : '0' }}</span>
            <span class="content__points__vote">vote(s)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="not-found text-center" v-else>
      <p>Sorry, nothing was found</p>
    </div>
  </div>
  <div v-else class="container px-0 px-md-3 profile-verdict">
    <div class="row">
      <div class="col-12 sort" v-if="comments.length > 0">
        <span class="verdicts-posts">Sort by:</span>
        <button
          class="click-for-follow follow"
          :class="type === 'date' ? 'active' : ''"
          @click="updateSort('date')"
        >latest</button>
        <button
          class="click-for-follow follow"
          :class="type === 'vote' ? 'active' : ''"
          @click="updateSort('vote')"
        >top voted</button>
      </div>
      <div class="container px-0 px-md-3" v-if="comments.length > 0">
        <div class="row">
          <template>
            <div class="col-12" v-for="comment in comments" :key="comment.id">
              <comment-block :comment="comment" :type="'all'" />
            </div>
          </template>
          <div class="col-12 button-block">
            <button
              class="loadMore"
              v-if="pagination && pagination.next"
              @click="moreComments()"
            >Load More</button>
          </div>
        </div>
      </div>
      <div class="not-found" v-else>
        <not-found />
      </div>
    </div>
  </div>
</template>

<script>
import DefaultNewsCard from "~/components/news/DefaultNewsCard";
import CommentBlock from "~/components/profile/comment-block";
import NotFound from "~/components/profile/not-found";
import BigHeader from "~/components/profile/bigHeader";

export default {
  amp: "hybrid",
  ampLayout: "author.amp",
  layout: "author",
  components: {
    DefaultNewsCard,
    CommentBlock,
    NotFound,
    BigHeader,
  },
  data() {
    return {
      sort: "DESC",
      type: "date",
      comments: [],
      pagination: null,
      page: 1,
      slug: undefined,
      userInfo: undefined,
      headerMenu: undefined,
    };
  },

  async asyncData({ $axios, params }) {
    const userInfo = await $axios.$get(`/api/author/${params.slug}`);

    const headerMenu = await $axios.$get(`/api/menu/header`);

    const comments = await $axios.$get(
      `/api/author/${params.slug}/comments?orderBy=date&order=DESC&type=verdicts&page=1&limit=12`
    );

    // const comments = [
    //   {
    //     id: "2",
    //     status: "Published",
    //     title: "admin admin - test comment for verdict. test",
    //     body:
    //       "test comment for verdict. test comment for verdict. test comment for 123123123123123123123123",
    //     postReactionString: "DISAGREE",
    //     postReaction: false,
    //     createdAt: "2020-07-06T11:53:08.852Z",
    //     isVerdict: true,
    //     blocked: false,
    //     hasReplies: true,
    //     user: {
    //       id: "4979d7fc-9271-480a-929e-489dce496eb8",
    //       email: "admin@admin.com",
    //       verified: true,
    //       slug: "admin-admin-4979d7fc-9271-480a-929e-489dce496eb8",
    //       firstName: "admin",
    //       lastName: "admin",
    //       username: "admin",
    //       medal: null,
    //       avatar: {
    //         original:
    //           "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_original.jpg",
    //         big:
    //           "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_big.jpg",
    //         medium:
    //           "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_medium.jpg",
    //         small:
    //           "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_small.jpg",
    //         thumbnail:
    //           "https://dev.api.verdict.org/images/avatar/8a7adc7a0892f8f8b5a2c8cbef162902_thumbnail.jpg",
    //         source: "admin admin",
    //         alt: "admin admin",
    //       },
    //       isFollow: false,
    //     },
    //     post: {
    //       slug:
    //         "twitter-urges-you-to-read-articles-before-posting-is-that-the-end-of-fake-news-625",
    //       id: "625",
    //       title:
    //         "Twitter Urges You to Read Articles Before Posting -- Is That The End of Fake News?",
    //       subtitle: null,
    //       seoTitle: null,
    //       seoDescription: null,
    //       status: "Published",
    //       viewsCount: "8",
    //       featured: {},
    //       inBookmarks: false,
    //       currentUserReaction: 11,
    //       shortContent:
    //         "In an attempt to tackle disinformation and fake news, Twitter will start a test",
    //       publishedAt: "2020-06-11T15:42:00.000Z",
    //       commentsCount: 33,
    //       verdictValue: 22,
    //       verdictUpdated: "2020-07-16T06:41:09.000Z",
    //       votesCount: 0,
    //       reaction: null,
    //     },
    //     parent: null,
    //     votes: 7,
    //     verdictThreshold: "22",
    //   },
    // ];

    return {
      slug: params.slug,
      userInfo: userInfo.data,
      headerMenu: headerMenu.data,
      comments: comments.data,
    };
  },

  methods: {
    updateSort(type) {
      this.type = type;
      this.page = 1;
      this.getComments();
    },
    moreComments() {
      this.getComments("more", this.page + 1);
    },
    getComments(more, page) {
      if (page) {
        this.page = page;
      }
      this.$axios
        .$get(
          `/api/author/${this.$route.slug}/comments?orderBy=${this.type}&order=${this.sort}&type=verdicts&page=${this.page}&limit=12`
        )
        .then((res) => {
          if (!more) {
            this.comments = res.data;
            this.pagination = res.pagination;
          } else {
            this.comments = [...this.comments, ...res.data];
            this.pagination = res.pagination;
          }
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    // this.getComments();
  },
};
</script>




