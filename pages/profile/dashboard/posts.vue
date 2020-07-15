<template>
  <div class="posts">
    <search class="search" @getSearch="getSearch" :type="'posts'" :searchProps="searchProps" />
    <table-header class="header" :header="header" @getSort="getSort" />
    <table-block
      class="table-block"
      v-for="(post, index) in dashboard.posts"
      @view="view"
      @edit="edit"
      @deletePosts="deletePosts"
      :key="index"
      :category="post.category"
      :title="post.title"
      :date="post.publishedAt"
      :status="post.status"
      :id="post.id"
      :slug="post.slug"
      :author="post.author"
      :header="header"
      :links="links"
    />
    <table-footer v-if="dashboard.posts.length > 0" class="action" :actionsBlock="actionsBlock" @aplly="aplly" />
    <pagination
      class="pagination"
      v-if="dashboard.paginations && dashboard.posts.length > 0"
      :pagination="dashboard.paginations"
      @openPage="openPage"
    />
		<not-found class="notFound" v-if="dashboard.posts.length === 0"/>
  </div>
</template>

<script>
import Search from "~/components/profile/dashboard/search";
import TableHeader from "~/components/profile/dashboard/table-header";
import TableFooter from "~/components/profile/dashboard/table-footer";
import TableBlock from "~/components/profile/dashboard/table-block";
import NotFound from "~/components/profile/dashboard/not-found-dashboard";
import { mapState } from "vuex";
import Pagination from "~/components/profile/pagination";

export default {
  layout: "profileSmall",
  middleware: "auth",
  components: {
    Search,
    TableHeader,
    TableBlock,
    Pagination,
		TableFooter,
		NotFound
  },
  data() {
    return {
      page: 1,
      header: {
        response: "Category",
        title: "Title",
        date: "Published At",
        status: "Status"
      },
      sort: {
        name: "",
        type: ""
      },
      search: {
        search: "",
        status: "",
        category: "",
        author: ""
      },
      searchProps: {
        search: true,
        status: true,
        category: true,
        author: true
      },
      links: {
        view: "view",
        edit: "edit",
        delete: "delete"
      },
      actionsBlock: ["Delete"]
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
    aplly() {
      this.$axios
        .$post(`/api/admin/posts/delete-multi`, { ids: this.dashboard.ids })
        .then(res => {
          this.$toasted.show(res.message);
          this.$store.commit("DEL_POSTS_DASHBOARD", this.dashboard.ids);
          this.$store.commit("CLEAR_DASHBOARD_IDS");
          if (this.dashboard.posts.length === 0) {
            if (this.page > 1) {
              this.page = this.page - 1;
              this.getPosts();
            } else {
              this.getPosts();
            }
          }
        })
        .catch(error => console.error(error));
    },
    view(slug, type) {
      if (type === "Published") {
        this.$router.push({
          path: `/${slug}`
        });
      } else {
        this.$router.push({
          path: `/${slug}/preview/`
        });
      }
    },
    edit(slug) {
      this.$router.push({
        path: `/${slug}/edit`
      });
    },
    deletePosts(id) {
      this.$axios
        .$delete(`/api/posts/${id}`)
        .then(res => {
          this.$toasted.show(res.message);
          this.$store.commit("DEL_POST_DASHBOARD", id);
        })
        .catch(error => console.error(error));
    },
    getParams() {
      this.page = this.$route.query.page;
      this.sort.name = this.$route.query.sort;
      this.sort.type = this.$route.query.direction;
      this.search.search = this.$route.query.q;
      this.search.status = this.$route.query.status;
      this.search.category = this.$route.query.category;
      this.search.author = this.$route.query.author;
    },
    getPosts() {
			this.updateRouter();
			this.$store.commit("CLEAR_DASHBOARD_POSTS");
      this.$axios
        .$get(
          `/api/admin/posts?limit=20&page=${
            this.page
          }${this.updateSearch()}${this.sortUpdate()}`
        )
        .then(res => {
          this.$store.commit("CLEAR_DASHBOARD_IDS");

          this.$store.commit("SET_DASHBOARD_POSTS", res.data);
          this.$store.commit("SET_DASHBOARD_PAGINATIONS", res.pagination);
        })
        .catch(error => console.error(error));
		},
		updateRouter () {
			  this.$router.push({
        path: "/profile/dashboard/posts",
        query: this.query()
      });
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
      if (this.search.status) {
        search = search + `&status=${this.search.status}`;
      }
      if (this.search.category) {
        search = search + `&category=${this.search.category}`;
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
      if (this.search.status) {
        res["status"] = this.search.status;
      }
      if (this.search.category) {
        res["category"] = this.search.category;
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
.notFound {
	order: 4;
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
