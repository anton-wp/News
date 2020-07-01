<template>
  <div class="dashboard-search-component">
    <div class="form">
      <div class="form-wrap" v-if="searchProps.search">
        <input class="form-input search-input" placeholder="SEARCH" v-model="search" />
      </div>
      <div class="form-wrap" v-if="searchProps.status">
        <select class="form-input select" v-model="selectedStatus">
          <option v-for="status of statuses" :value="status.key" :key="status.key">
            <span v-if="status.count">{{status.title}} ({{status.count}})</span>
            <span v-if="!status.count">{{status.title}}</span>
          </option>
        </select>
      </div>
      <div class="form-wrap" v-if="searchProps.category">
        <select class="form-input select" v-model="selectedCategory">
          <option
            v-for="category of categories"
            :value="category.id"
            :key="category.id"
          >{{category.name}}</option>
        </select>
      </div>
      <div class="form-wrap" v-if="searchProps.author">
        <multiselect
          v-model="selectedAuthor"
          id="author"
          label="firstName"
          track-by="id"
          placeholder="CHOSE AUTHOR"
          select-label="Enter"
          open-direction="bottom"
          :options="authorsOption"
          :searchable="true"
          :loading="isLoadingAuthor"
          :max-height="600"
          :show-no-results="false"
          :hide-selected="false"
          @search-change="searchAuthors"
        >
          <template slot="option" slot-scope="props">
            <div class="option__desc">
              <span class="option__title">{{ props.option.firstName }}</span>
            </div>
          </template>
        </multiselect>
      </div>
      <div class="form-wrap button-block">
        <button class="search" @click="searchClick">Search</button>
        <button class="reset" @click="resetClick">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect
  },
  data() {
    return {
      categories: Array,
      selectedCategory: String,
      statuses: Array,
      selectedStatus: String,
      search: "",

      selectedAuthor: [],
      authorsOption: [],
      isLoadingAuthor: false
    };
  },
  props: {
    type: "",
    searchProps: Object
  },
  created() {
    switch (this.type) {
      case "posts":
				this.getStatus()
				this.getCategories();
				break;
      case "tags":
				this.getStatusTags()
				break;
      default:
        '';
    }
  },
  methods: {
    getCategories() {
      this.$http
        .get("/api/categories/")
        .then(({ data }) => {
          this.categories = data.data;
          data.data.unshift({ name: "Choose Category", id: "" });
          this.selectedCategory = this.categories[0].id;
        })
        .catch(error => {
          // this.errorMessage = error.response.data.message;
        });
    },
    getStatus() {
      this.$http
        .get("/api/admin/posts/statuses")
        .then(({ data }) => {
          data.data = data.data.filter(status => status.title !== "Draft");
          this.statuses = data.data;
          data.data.unshift({ title: "Choose Status", key: "" });
          this.selectedStatus = this.statuses[0].key;
        })
        .catch(error => {
          // this.errorMessage = error.response.data.message;
        });
    },
    getStatusTags() {
      this.$http
        .get("/api/admin/tags/statuses")
        .then(({ data }) => {
          this.statuses = data.data;
          data.data.unshift({ title: "Choose Status", key: "" });
          this.selectedStatus = this.statuses[0].key;
        })
        .catch(error => {
          // this.errorMessage = error.response.data.message;
        });
    },
    searchAuthors(query) {
      this.isLoadingAuthor = true;

      this.$http
        .get("/api/posts/create-helpers/authors-search?search=" + query)
        .then(({ data }) => {
          this.authorsOption = data.data;

          this.isLoadingAuthor = false;
        });
    },
    resetClick() {
      this.search = "";
      this.selectedCategory = this.categories[0].id;
      this.selectedStatus = this.statuses[0].key;
      this.selectedAuthor = "";
    },
    searchClick() {
			console.log(this.selectedStatus)
      let search = {
        search: this.search,
        status: this.selectedStatus,
        category: this.selectedCategory,
        author: this.selectedAuthor.id
      };
      this.$emit("getSearch", search);
    }
  }
};
</script>
