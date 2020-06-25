<template>
  <div class="dashboard-search-component">
    <div class="form">
      <div class="form-wrap">
        <input class="form-input search-input" placeholder="SEARCH" v-model="search" />
      </div>
      <div class="form-wrap">
        <select class="form-input select" v-model="selectedStatus">
          <option v-for="status of statuses" :value="status.key" :key="status.key">
            <span v-if="status.count">{{status.title}} ({{status.count}})</span>
            <span v-if="!status.count">{{status.title}}</span>
          </option>
        </select>
      </div>
      <div class="form-wrap">
        <select class="form-input select" v-model="selectedCategory">
          <option
            v-for="category of categories"
            :value="category.id"
            :key="category.id"
          >{{category.name}}</option>
        </select>
      </div>
      <div class="form-wrap">
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
        <!-- [routerLink]="'/profile' + rout"
        [queryParams]="{
              q: searchForm.get('search').value,
              status: profileStore.initialDashboardStatuses?.title,
              category: profileStore.initialDashboardCategories?.id,
              author: searchForm.get('authors').value?.id }"
        (click)="searchClick()"-->
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
  created() {
    this.getCategories();
    this.getStatus();
  },
  methods: {
    getCategories() {
      this.$http
        .get("https://dev.api.verdict.org/categories/")
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
        .get("https://dev.api.verdict.org/admin/posts/statuses")
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
        .get(
          "https://dev.api.verdict.org/posts/create-helpers/authors-search?search=" +
            query
        )
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
      console.log(this.search);
      console.log(this.selectedStatus);
      console.log(this.selectedCategory);
      console.log(this.selectedAuthor);
    }
  }
};
</script>
