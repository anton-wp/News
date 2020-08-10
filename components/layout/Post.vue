<template>
  <div v-if="$isAMP">
    <amp-sidebar id="sidebar1" layout="nodisplay" side="left" class="nav-menu">
      <nuxt-link
        :to="'/amp/' + menuLink.path"
        v-for="(menuLink, index) of headerMenu"
        :key="index"
      >{{ menuLink.title }}</nuxt-link>
    </amp-sidebar>

    <div class="container">
      <nuxt-link
        v-if="data.category"
        class="post-cat"
        :to="`/amp/${data.category.slug}`"
      >{{ data.category.name }}</nuxt-link>
      <div class="col-lg-12">
        <h1 class="post-page-title">{{data.title}}</h1>
        <h2>{{data.subTitle}}</h2>
      </div>

      <div class="d-flex w-100 align-center">
        <author-block :author="data.author" :publishedAt="data.publishedAt" />

        <marks :author="data.author" />
      </div>

      <div class="d-flex">
        <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
      </div>

      <amp-img
        v-if="data.featured.wide"
        :src="data.featured.wide"
        layout="responsive"
        width="990"
        height="550"
        class="w-100"
      ></amp-img>

      <div class="sing-post-source">source: {{data.featured.source}}</div>

      <p class="text" v-html="data.body" :style="{fontSize: bodySize + '%'}">
        <!-- {{data.body}} -->
      </p>

      <div class="d-flex">
        <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
      </div>

      <div class="tag-links">
        <h2 class="tag-links__title">linked</h2>
        <nuxt-link
          v-for="tag in data.tags"
          :key="tag.id"
          :to="`/amp/l/${tag.slug}`"
          class="tag-links__item"
        >{{tag.name}}</nuxt-link>
      </div>
      <!-- <social-block [(fontSize)]="bodySize" class="col-lg-12"></social-block> -->
      <div class="row">
        <div class="col-6" v-if="prev">
          <nuxt-link class="d-flex sibling-post" :to="`/amp/${prev.slug}`">
            <svg class="sibling-post__icon" width="40" height="40">
              <use xlink:href="#angle-left" />
            </svg>
            <div class="h-100">
              <div class="sibling-post__label">Previous Post</div>
              <h3 class="sibling-post__title">{{prev.title}}</h3>
            </div>
          </nuxt-link>
        </div>
        <div class="col-6" v-if="next">
          <nuxt-link class="d-flex sibling-post justify-end" :to="`/amp/${next.slug}`">
            <div class="h-100">
              <div class="sibling-post__label">Next Post</div>
              <h3 class="sibling-post__title">{{next.title}}</h3>
            </div>
            <svg class="sibling-post__icon" width="40" height="40">
              <use xlink:href="#angle-right" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="post-layout">
    <div class="policy-wrapper px-2 px-sm-15 px-md-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8 px-0 px-md-3 pr-lg-5">
            <div class="container pad0 px-0">
              <div class="row mx-0">
                <button-block-head
                  :id="data.id"
                  :slug="data.slug"
                  :category="data.category"
                  :data="data"
                />
                <div class="col-lg-12 px-0">
                  <h1 class="post-page-title mt-2">{{data.title}}</h1>
                  <h2>{{data.subTitle}}</h2>
                </div>
                <div class="col-lg-12 px-0 px-md-3">
                  <div class="container px-0">
                    <div class="row" style="margin-bottom: 3.1em;">
                      <div class="col-lg-6 px-0">
                        <author-block :author="data.author" :publishedAt="data.publishedAt" />
                      </div>
                      <div
                        class="col-lg-6 mt-3 my-md-0"
                        style="align-items: center; display: flex;"
                        v-if="!review"
                      >
                        <marks :data="data" @scrollToComment="scrollToComment" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 px-0" v-if="!review">
                  <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
                </div>
                <div class="col-lg-12 px-0">
                  <div class="image-wrapper mx-n2 mx-sm-n3 mx-md-0">
                    <img v-if="data.featured.wide" class="post-image" :src="data.featured.wide" />
                    <img
                      v-if="!data.featured.wide"
                      class="post-image"
                      src="/image/default_image_landscape.png"
                    />
                    <div class="source mr-3">
                      <span>source: {{data.featured.source ? data.featured.source : data.author.firstName + ' ' + data.author.lastName}}</span>
                    </div>
                  </div>
                  <p class="text px-2" v-html="data.body" :style="{fontSize: bodySize + '%'}">
                    <!-- {{data.body}} -->
                  </p>
                </div>
                <div class="col-12 px-0" v-if="!review">
                  <social-block v-if="data" :post="data" @changeFontSize="changeFontSize" />
                </div>
                <!-- <social-block [(fontSize)]="bodySize" class="col-lg-12"></social-block> -->
                <div class="col-lg-12 px-0" style="margin-top: 25px;" v-if="!review">
                  <div class="linked-title">
                    <span>linked</span>
                  </div>
                  <div class="tags">
                    <div class="tag-wrapper" v-for="tag in data.tags" :key="tag.id">
                      <nuxt-link :to="`/l/${tag.slug}`" class="tag-name">{{tag.name}}</nuxt-link>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 px-0" v-if="!review">
                  <prev-next :slug="data.slug" />
                </div>
                <div v-if="!draft && !review" class="col-lg-12 px-0">
                  <div class="related-title">
                    <span>related</span>
                  </div>
                  <related-block />
                </div>
                <div v-if="!draft && !review" class="col-lg-12 px-0" ref="element">
                  <div class="comment-wrapper">
                    <span class="title">your verdict</span>
                    <span class="about" @mouseenter="message = true" @mouseleave="message = false">
                      <span>About Verdict</span>
                      <svg class="icon" width="20" height="20">
                        <use xlink:href="#eclipse-question" />
                      </svg>
                    </span>
                  </div>
                  <span
                    v-if="message"
                    class="aboutPopup"
                  >Verdict is top voted comment by all members. One vote per member. Verdict can change over time.</span>
                </div>
                <div v-if="!draft && !review" class="col-12 px-0">
                  <div>
                    <textarea class="form-input with-border mb-0" v-model="comment"></textarea>
                  </div>
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
                  <div class="sort-comments mx-2" v-if="comments.length > 0">
                    <button
                      v-for="(sortAc, index) in sortActions"
                      :key="index"
                      class="col-6 col-sm-3"
                      :class="orderBy === sortAc.action ? 'active-sort' : ''"
                      @click="sortUpdate(sortAc.action)"
                      :disabled="disabled"
                    >
                      {{ sortAc.title }}
                      <div v-if="sortAc.action !== 'agree' && sortAc.action !== 'disagree'">
                        <svg
                          v-if="orderBy !== sortAc.action || orderBy === sortAc.action && order === 'ASC'"
                          class="carret-up"
                          width="10"
                          height="10"
                        >
                          <use xlink:href="#caret-down" />
                        </svg>
                        <svg
                          v-if="orderBy !== sortAc.action || orderBy === sortAc.action && order === 'DESC'"
                          :class="orderBy === sortAc.action && order === 'DESC' ? 'active-down' : ''"
                          width="10"
                          height="10"
                        >
                          <use xlink:href="#caret-down" />
                        </svg>
                      </div>
                      <div v-else>
                        <svg
                          v-if="orderBy !== sortAc.action "
                          class="carret-up"
                          width="10"
                          height="10"
                        >
                          <use xlink:href="#caret-down" />
                        </svg>
                        <svg
                          :class="orderBy === sortAc.action ? 'active-down' : ''"
                          width="10"
                          height="10"
                        >
                          <use xlink:href="#caret-down" />
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    class="commentscomment-1-replise"
                    v-for="comment of comments"
                    :key="comment.id"
                    :id="comment.id"
                  >
                    <comment :postId="data.id" :data="comment" @updateComment="updateComment" />
                  </div>
                </div>
                <div v-if="paginations.next" class="col-12 button-block">
                  <button class="loadMore" @click="moreComments">Load More</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 px-0 px-md-3 mt-0 mt-md-n4">
            <follow v-if="!review" />
            <asideReview v-if="data && review" :postData="data" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PrevNext from "~/components/singlePost/prevNext.vue";
import AuthorBlock from "~/components/singlePost/authorBlock.vue";
import ButtonBlockHead from "~/components/singlePost/buttonBlockHead.vue";
import Follow from "~/components/universal-components/followBlock.vue";
import Comment from "~/components/singlePost/comment.vue";
import Marks from "~/components/singlePost/marks.vue";
import SocialBlock from "~/components/singlePost/socialBlock.vue";
import RelatedBlock from "~/components/universal-components/relatedBlock.vue";
import AsideReview from "~/components/universal-components/AsideReview.vue";
import { mapState } from "vuex";

export default {
  components: {
    PrevNext,
    Follow,
    ButtonBlockHead,
    AuthorBlock,
    Marks,
    SocialBlock,
    RelatedBlock,
    AsideReview,
    Comment,
  },
  props: {
    data: Object,
    slug: String,
    prev: {
      type: Object,
      default: null,
    },
    draft: Boolean,
    next: {
      type: Object,
      default: null,
    },
    review: Boolean,
    headerMenu: Array,
    type: String,
  },

  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.seoDescription,
        },
        {
          hid: "og:title",
          name: "og:title",
          content: this.data.title,
        },
        {
          hid: "og:description",
          name: "og:description",
          content: this.data.seoDescription,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: this.$route.fullPath,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: this.data.featured.thumbnail,
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "article",
        },
      ],
    };
  },
  data() {
    return {
      bodySize: 110,
      comment: "",
      message: false,
      subscribe: true,
      disabled: false,
      comments: [],
      page: 1,
      orderBy: "date",
      order: "ASC",
      paginations: Object,
      sortActions: [
        {
          title: "Latest",
          action: "date",
        },
        {
          title: "Top Voted",
          action: "voted",
        },
        {
          title: "Agree",
          action: "agree",
        },
        {
          title: "Disagree",
          action: "disagree",
        },
      ],
    };
  },
  computed: {
    ...mapState(["auth"]),
  },

  methods: {
    scrollToComment() {
      this.$refs.element.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
      });
    },
    updateComment(data) {
      this.comments = this.comments.map((comment) =>
        comment.id === data.id ? (comment = data) : comment
      );
    },
    sortUpdate(type) {
      if (type === "agree") {
        this.orderBy = type;
        this.order = "DESC";
      } else if (type === "disagree") {
        this.orderBy = type;
        this.order = "ASC";
      } else if (type === this.orderBy) {
        if (this.order === "ASC") {
          this.order = "DESC";
        } else {
          this.order = "ASC";
        }
      } else {
        this.orderBy = type;
        this.order = "ASC";
      }
      this.getComments();
    },
    changeFontSize() {
      if (this.bodySize === 130) {
        this.bodySize = 90;
      } else {
        this.bodySize = this.bodySize + 10;
      }
    },
    createdComment(postReaction) {
      let data = {
        body: this.comment,
        postReaction: postReaction,
        subscribe: this.subscribe,
      };
      this.$axios
        .$post(`/api/posts/${this.data.id}/comments`, data)
        .then((res) => {
          this.comments.push(res.data);
          this.comment = "";
				})
				.catch((error) => {
          console.log(error);
        });
    },

    moreComments() {
      this.page = this.page + 1;
      this.getComments("loadMore");
    },
    getComments(loadMore) {
      this.$axios
        .$get(
          `/api/posts/${this.data.id}/comments?order=${this.order}&orderBy=${
            this.orderBy !== "agree" && this.orderBy !== "disagree"
              ? this.orderBy
              : "reaction"
          }&page=${this.page}`
        )
        .then((res) => {
          if (loadMore) {
            this.comments = [...this.comments, ...res.data];
          } else {
            this.comments = res.data;
          }
          this.paginations = res.pagination;
          this.disabled = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  provide() {
    return {
      id: this.data.id,
    };
  },
  created() {
    this.getComments();
    if (this.data.category) {
      this.$store.commit("SET_BREADCRUMBS", [
        {
          title: this.data.category.name,
          path: "/" + this.data.category.slug,
        },
        { title: this.data.title },
      ]);
    } else {
      this.$store.commit("SET_BREADCRUMBS", [{ title: this.data.title }]);
    }
  },
  mounted() {
    if (this.type === "post") {
      this.$axios.post(`/api/posts/${this.data.id}/add-view`);
    }
  },
};
</script>
