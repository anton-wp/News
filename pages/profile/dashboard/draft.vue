<template>
  <div class="posts">
    <search class="search" @getSearch="getSearch" :type="'drafts'" :searchProps="searchProps" />
    <table-header class="header" :header="header" @getSort="getSort" />
    <table-block
      class="table-block"
      v-for="(post, index) in dashboard.posts"
      @view="view"
      @edit="edit"
      @deletePosts="deletePosts"
      :key="index"
      :title="post.title"
      :date="post.publishedAt"
      :id="post.id"
      :slug="post.slug"
      :author="post.author"
      :header="header"
      :links="links"
    />
		<table-footer class="action" :actionsBlock="actionsBlock" @aplly="aplly"/>
    <pagination
      class="pagination"
      v-if="dashboard.paginations"
      :pagination="dashboard.paginations"
      @openPage="openPage"
    />
  </div>
</template>

<script>
import Search from "~/components/profile/dashboard/search";
import TableHeader from "~/components/profile/dashboard/table-header";
import TableFooter from "~/components/profile/dashboard/table-footer";
import TableBlock from "~/components/profile/dashboard/table-block";
import { mapState } from "vuex";
import Pagination from "~/components/profile/pagination";

export default {
  layout: "profileSmall",
  // middleware: "auth",
  components: {
    Search,
    TableHeader,
		TableBlock,
		TableFooter,
    Pagination
  },
  data() {
    return {
      page: 1,
      header: {
        title: "Title",
        date: "Published At"
      },
      sort: {
        name: "",
        type: ""
      },
      search: {
        search: "",
        author: ""
      },
      searchProps: {
        search: true,
        author: true
      },
      links: {
        view: "view",
        edit: "edit",
        delete: "delete"
			},
			actionsBlock: ['Delete']
    };
  },
  created() {
    this.getParams();
    this.getPosts();
  },
  computed: {
    ...mapState(["dashboard"])
  },
  methods: {
		aplly () {
			this.$http
        .post(
          `/api/admin/posts/delete-multi`, {ids: this.dashboard.ids}
        )
        .then(res => {
					this.$toasted.show(res.data.message);
					// this.$store.commit('DEL_POST_DASHBOARD', id)
        })
        .catch(error => console.error(error));
		},
    view(slug) {
			this.$router.push({
				path: `/${slug}/preview/`
			});
    },
    edit(slug) {
      this.$router.push({
        path: `/draft/${slug}/`
      });
    },
    deletePosts(id) {
      this.$http
        .delete(
          `/api/posts/${id}`
        )
        .then(res => {
					this.$toasted.show(res.data.message);
					this.$store.commit('DEL_POST_DASHBOARD', id)
        })
        .catch(error => console.error(error));
    },
    getParams() {
      this.page = this.$route.query.page;
      this.sort.name = this.$route.query.sort;
      this.sort.type = this.$route.query.direction;
      this.search.search = this.$route.query.q;
      this.search.author = this.$route.query.author;
    },
    getPosts() {
      this.$http
        .get(
          `/api/admin/drafts?limit=20&page=${
            this.page
          }${this.updateSearch()}${this.sortUpdate()}`
        )
        .then(res => {
          this.$router.push({
            path: "/profile/dashboard/draft",
            query: this.query()
          });
          this.$store.commit("SET_DASHBOARD_POSTS", res.data.data);
          this.$store.commit("SET_DASHBOARD_PAGINATIONS", res.data.pagination);
        })
        .catch(error => console.error(error));
    },
    sortUpdate() {
      if (this.sort.name && this.sort.type) {
        return `&${this.sort.name}Sort=${this.sort.type}`;
      }
      return "";
    },
    updateSearch() {
      let search = "";
      if (this.search.search) {
        search = search + `&search=${this.search.search}`;
      }
      if (this.search.author) {
        search = search + `&user=${this.search.author}`;
      }
      return search;
    },
    getSort(sort) {
      this.page = 1;
      this.sort = sort;
      this.getPosts();
    },
    getSearch(search) {
      this.page = 1;
      this.search = search;
      this.getPosts();
    },
    openPage(page) {
      this.page = page;
      this.getPosts();
    },
    query() {
      let res = {};
      res["page"] = this.page;
      if (this.sort.name) {
        res["sort"] = this.sort.name;
        res["direction"] = this.sort.type;
      }
      if (this.search.search) {
        res["q"] = this.search.search;
      }
      if (this.search.author) {
        res["author"] = this.search.author;
      }
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.posts {
  display: grid;
}
.header {
  order: 3;
}
.search {
  order: 2;
}
.action {
	order: 5;
}
.pagination {
  order: 6;
}
.table-block {
  order: 4;
}
@media (max-width: 991px) {
  .table-block:nth-child(2n + 1) {
    background-color: #fafafa;
  }
  .header {
    order: 1;
  }
}
</style>
