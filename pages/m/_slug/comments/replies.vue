<template>
  <div class="container">
    <div class="row">
      <div class="col-12 sort">
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
      <div v-if="comments.length > 0" class="container">
        <div class="row">
          <template>
            <div class="col-12" v-for="comment in comments" :key="comment.id">
              <comment-block :comment="comment" :type="'replies'" />
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

export default {
  layout: "author",
  middleware: "auth",
  components: {
    DefaultNewsCard,
    CommentBlock,
    NotFound
  },
  data() {
    return {
      sort: "DESC",
      type: "date",
      comments: [],
      pagination: null,
      page: 1
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
          `/api/author/${this.$route.params.slug}/comments?orderBy=${this.type}&order=${this.sort}&type=replies&page=${this.page}&limit=12`
        )
        .then(res => {
          if (!more) {
            this.comments = res.data;
            this.pagination = res.pagination;
          } else {
            this.comments = [...this.comments, ...res.data];
            this.pagination = res.pagination;
          }
        })
        .catch(error => console.error(error));
    }
  },
  mounted() {
    this.getComments();
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/config/variables";
@import "../../../../assets/utils/colors";


.img {
  display: inline-block;
  vertical-align: top;
}
.sort {
  margin-bottom: 20px;
  .verdicts-posts {
    vertical-align: bottom;
    font-size: 100%;
    box-sizing: inherit;
    color: #8d8d8d;
    font-weight: 600;
  }
  .active {
    background-color: #bc2d2d !important;
    color: #fff !important;
  }
  .follow {
    color: #ff4242;
    margin-right: 5px;
    &:hover {
      background-color: #bc2d2d;
      color: #fff;
    }
  }
  .verdicts-posts {
    margin-right: 10px;
  }
  .click-for-follow {
    font-size: 0.75rem;
    padding: 0.55em 1.4em;
    text-transform: none;
    letter-spacing: 0.9px;
    border-radius: 5px;
    vertical-align: text-top;
    margin-bottom: 0;
    font-weight: 400;
    pointer-events: all;
    background: 0 0;
    border: 1px solid;
    line-height: 1;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.5em;
  }
}
a {
  line-height: 1.5;
  color: #0a0a0a;
  text-decoration: none;
  margin: 0.3em 0 0;
  font-size: 1.4em;
  font-weight: 700;
}
.V-rep {
  align-items: baseline;
  .counterV-rep {
    line-height: 1.5;
    color: #0a0a0a;
    white-space: nowrap;
    box-sizing: inherit;
    font-size: 1.4em;
    font-weight: 600;
    margin-right: 10px;
  }
}

.default-avatar {
  width: 100%;
  display: block;
  margin: 0 auto;
  max-width: 130px;
}
.aboutAuthor {
  display: inline-block;
}

.unfollow {
  color: #474747;
  border-color: #474747;
  &:hover {
    background-color: #474747;
    color: #fff;
  }
}

.user-popup {
  top: -295px;
  padding: 1.5em 1.2em 0.8em 1.2em;
  background-color: $white;
  position: absolute;
  z-index: 3;
  max-width: 20em;
  min-height: 300px;
  min-width: 280px;
  width: 100%;
  border: 1px solid $dedede;
  border-radius: 4px;
  opacity: 1;
  -webkit-box-shadow: 2px 4px 16px 0 $shark026;
  box-shadow: 2px 4px 16px 0 $shark026;
  font-family: "Open Sans";

  &:after {
    content: "";
    border-right: 1px solid $secondary-bgcolor;
    border-bottom: 1px solid $secondary-bgcolor;
    position: absolute;
    bottom: -8px;
    right: 80%;
    background: $whiteFE;
    width: 15px;
    height: 15px;
    z-index: 5;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.button-block {
  display: flex;
  justify-content: center;
  .loadMore {
    box-sizing: inherit;
    overflow: visible;
    background: 0 0;
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 1rem;
    font-family: inherit;
    border: 1px solid transparent;
    border-radius: 0;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: #ff4242;
    color: #fefefe;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    user-select: none;
    padding: 0.85em 1.4em 0.8em;
    font-size: 0.75rem;
    position: relative;
    &:hover {
      background-color: #bc2d2d;
    }
  }
}
</style>


