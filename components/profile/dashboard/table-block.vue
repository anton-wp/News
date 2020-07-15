<template>
  <div class="row table-block-component" @mouseenter="toggle" @mouseleave="toggle">
    <div class="col-lg-auto checkbox">
      <div class="categoryCheckbox" @click="checkboxChange">
        <svg width="10" height="10" v-if="dashboard.ids.includes(id)">
          <use xlink:href="#checkbox" />
        </svg>
      </div>
    </div>
    <div class="col-lg active" v-if="title" @mouseleave="showPopup = false">
      <h6 class="header">{{header.title}}</h6>
      <h6 class="title">{{title}}</h6>
      <small class="author" @mouseenter="showPopup = true" v-if="author">
        <div v-if="showPopup" id="1" class="user-popup active">
          <div>
            <popup-user-info :authorId="author.id" />
          </div>
        </div>by
        <nuxt-link class="link" :to="`/m/${author.slug}`">{{author.firstName}} {{author.lastName}}</nuxt-link>
      </small>
    </div>
    <div class="col-lg " v-if="titleComment" @mouseleave="showPopup = false">
      <h6 class="header">{{header.title}}</h6>
      <small v-if="author" class="author" @mouseenter="showPopup = true">
        <div v-if="showPopup" id="1" class="user-popup active">
          <div>
            <popup-user-info :authorId="author.id" />
          </div>
        </div>
        <nuxt-link class="link authorBig" :to="`/m/${author.slug}`">{{author.firstName}} {{author.lastName}}</nuxt-link>
      </small>
      <h6 class="title__small">{{titleComment}}</h6>
    </div>
    <div class="col-lg-4 category" v-if="description">
      <h6 class="header">{{header.description}}</h6>
      <h6>{{description}}</h6>
    </div>
    <div class="col-lg-3 category" v-if="category">
      <h6 class="header">{{header.response}}</h6>
      <h6>{{category.name}}</h6>
    </div>
    <div class="col-lg-3 category commentResponse" v-if="commentResponse">
      <h6 class="header">{{header.response}}</h6>
      <h6>
        <nuxt-link v-if="!commentResponse.parent" :to="`/${commentResponse.post.slug}/comments/${commentResponse.id}`">{{commentResponse.post.slug}}</nuxt-link>
        <nuxt-link v-else :to="`/${commentResponse.post.slug}/comments/${commentResponse.id}`">{{commentResponse.user.firstName}} {{commentResponse.user.lastName}}</nuxt-link>
      </h6>
    </div>
    <div class="col-lg-2 category" v-if="date">
      <h6 class="header">{{header.date}}</h6>
      <h6 v-if="typeof date !== 'object'">{{ new Date(date).toDateString() }}</h6>
      <h6 v-if="typeof date === 'object'">{{date.name}}</h6>
    </div>
    <div class="col-lg-2 status active" v-if="status">
      <h6 class="header">{{header.status}}</h6>
      <h6 v-if="header.status !== 'Featured'">{{status}}</h6>
      <button
        v-if="header.status === 'Featured'"
        @click="updateFeatured(id)"
        :disabled="disabledFeatured"
      >
        <svg v-if="!featured" width="20" height="20">
          <use xlink:href="#star-empty" />
        </svg>
        <svg v-if="featured" width="20" height="20">
          <use xlink:href="#star" />
        </svg>
      </button>
    </div>
    <div v-if="show && links" class="col-12 showSettingBlock">
      <span class="links-block">
        <span v-if="links.view" @click="view" class="link">{{ links.view }}</span>
        <span v-if="links.view" class="line-links">|</span>
        <span v-if="links.edit" @click="edit" class="link">{{ links.edit }}</span>
        <span v-if="links.edit" class="line-links">|</span>
        <span v-if="links.delete" class="delete" @click="deletePosts()">{{ links.delete }}</span>
      </span>
    </div>
  </div>
</template>

<script>
import PopupUserInfo from "~/components/universal-components/popup-user-info";
import { mapState } from "vuex";

export default {
  components: {
    PopupUserInfo
  },
  data() {
    return {
      show: false,
      checkboxActive: false,
      showPopup: false,
      disabledFeatured: false
    };
  },
  computed: {
    ...mapState(["dashboard"])
  },
  props: {
    id: String,
    slug: String,
    title: String,
    description: String,
    category: Object,
    author: Object,
    date: String | Object,
    status: String | Boolean,
    header: Object,
    featured: Object | Boolean,
    links: Object,
    post: Object,
    commentResponse: null,
    titleComment: String,
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    updateFeatured(id) {
      this.disabledFeatured = true;
      this.$axios
        .$put(`/api/admin/tags/${id}/featured`)
        .then(res => {
          console.log(res);
          this.disabledFeatured = false;
          this.$toasted.show(res.message);
          this.$store.commit("UPDATE_FEATURED", id);
        })
        .catch(error => console.error(error));
    },
    view() {
      if (this.post.slug) {
        this.$emit("view", this.post.slug, this.id);
      } else {
        this.$emit("view", this.slug, this.status);
      }
    },
    edit() {
      if (this.slug) {
        this.$emit("edit", this.slug, this.id);
      } else {
        this.$emit("edit", this.id);
      }
    },
    deletePosts() {
      this.$emit("deletePosts", this.id);
    },
    checkboxChange() {
      if (this.dashboard.ids.includes(this.id)) {
        this.$store.commit("DEL_IDS", [this.id]);
      } else {
        this.$store.commit("ADD_IDS", [this.id]);
      }
    }
  }
};
</script>

