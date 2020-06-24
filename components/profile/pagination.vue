<template>
  <div class="pagination">
    <div class="pagination-container">
      <button
        class="button-arrow"
        @click="openPage(pagination.current - 1)"
        :disabled="pagination.current === 1"
        :class="pagination.current !== 1 ? 'active-arrow' : ''"
      >
        <svg width="30" height="35">
          <use xlink:href="#keyboard-arrow-left" />
        </svg>
      </button>
      <span class="link" v-if="hasFirst()" @click="openPage(1)">1</span>
      <span v-if="hasFirstDot()">...</span>
      <span
        class="link"
        :class="pagination.current === countBlock ? 'active-link' : ''"
        v-for="(countBlock, index) in count"
        :key="index"
        @click="openPage(countBlock)"
      >{{countBlock}}</span>
      <span v-if="hasLastDot()">...</span>
      <span
        class="link"
        v-if="hasLast()"
        @click="openPage(pagination.pagesCount)"
      >{{pagination.pagesCount}}</span>
      <button
        class="button-arrow"
        @click="openPage(pagination.current + 1)"
        :class="pagination.current !== pagination.pagesCount ? 'active-arrow' : ''"
        :disabled="pagination.current === pagination.pagesCount"
      >
        <svg width="30" height="35">
          <use xlink:href="#keyboard-arrow-right" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pagination: null
  },
  data() {
    return {
      paginationStart: Array,
      paginationEnd: Array,
      default: 1
    };
  },
  created() {
    // this.paginations()
  },
  computed: {
    count() {
      let count = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        count.push(i);
      }
      return count;
    },
    rangeStart() {
      let start = this.pagination.current - this.default;
      return start > 0 ? start : 1;
    },
    rangeEnd() {
      let end = this.pagination.current + this.default;
      return end < this.pagination.pagesCount
        ? end
        : this.pagination.pagesCount;
    }
  },

  methods: {
    cons() {
      return this.default;
    },
    hasFirst() {
      return this.rangeStart > 1;
    },
    hasFirstDot() {
      return this.rangeStart > 2;
    },
    hasLastDot() {
      return this.rangeStart + 3 < this.pagination.pagesCount;
    },
    hasLast() {
      return this.rangeEnd < this.pagination.pagesCount;
    },
    openPage(page) {
      this.$emit("openPage", page);
      this.$router.push({
        path: "/profile/posts/draft/",
        query: { page: page }
      });
    }
  }
};
</script>

