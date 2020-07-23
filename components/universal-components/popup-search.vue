<template>
  <div class="wrapper-search-popup">
    <div id="close" class="close-button" @click="closeSearch">
      <button>×</button>
    </div>
    <div class="wrapper-input">
      <label class="label-form">
        <input
          v-model="search"
          type="search"
          name="q"
          class="search-filed"
          placeholder="Search..."
          autocomplete="off"
          @keyup.enter="activeSearch"
          v-click-outside="closeSearch"
        />
      </label>
      <p class="about-input-listeners">
        Type above and press
        <i>Enter</i> to search. Press
        <i>Esc</i> to cancel.
      </p>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";
export default {
  directives: {
    ClickOutside,
  },
  data() {
    return {
      search: "",
      toggle: false,
    };
  },
  methods: {
    activeSearch() {
      if (this.search) {
        this.$router.push({ path: "/search", query: { q: this.search } });
        this.closeSearch();
      }
    },
    closeSearch() {
      if (this.toggle) {
        this.$emit("closeSearch");
      }
      this.toggle = true;
    },
  },
};
</script>
