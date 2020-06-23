<template>
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
		resetClick () {
			this.search = ''
			this.selectedCategory = this.categories[0].id
			this.selectedStatus = this.statuses[0].key
			this.selectedAuthor = ''
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

<style lang="scss">
.multiselect__input {
	border: none  !important;
}
.multiselect__tags {
	font-weight: 700;
	font-size: 0.8em !important;
	line-height: 1.25;
	letter-spacing: 0.7px;
	min-height: 37px !important;
}
.form {
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
  .form-wrap {
    width: 25%;
    flex: 1 1 25%;
    padding-right: 10px;
    @media (max-width: 991px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .search-input {
    box-sizing: inherit;
    margin: 0;
    overflow: visible;
    font-family: inherit;
    font-size: 80%;
    width: 100%;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: 0.65em;
    line-height: 1.25;
    // text-transform: uppercase;
  }
  select {
    width: 100%;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    font-family: inherit;
    border: 1px solid #c6c6c6;
    border-radius: 2px;
    padding: 0.65em;
    line-height: 1.25;
    background: 0 0;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    -webkit-appearance: none;
    font-size: 0.8em;
  }
  .button-block {
    margin: auto;
    button {
      box-sizing: inherit;
      overflow: visible;
      display: inline-block;
      margin: 0 5px 0 0;
      font-family: inherit;
      transition: background-color 0.25s ease-out, color 0.25s ease-out;
      line-height: 1;
      text-align: center;
      cursor: pointer;
      user-select: none;
      text-transform: none;
      letter-spacing: 0.9px;
      border-radius: 5px;
      vertical-align: text-top;
      margin-bottom: 0;
      font-weight: 400;
      pointer-events: all;
      background: 0 0;
      font-size: 0.75rem;
      padding: 0.55em 1.4em;
      border: 1px solid;
    }
    .search {
      border-color: #ff4242;
      color: #ff4242;
      &:hover {
        background-color: #bc2d2d;
        border-color: #a10000;
        color: #fff;
      }
    }
    .reset {
      border-color: #8d8d8d;
      color: #8d8d8d;
      &:hover {
        background-color: #606060;
        border-color: #474747;
        color: #fff;
      }
    }
  }
}
</style>
