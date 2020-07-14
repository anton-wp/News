<template>
  <div class="posts">
    <search class="search" @getSearch="getSearch" :type="'comments'" :searchProps="searchProps" />
    <table-header class="header" :header="header" @getSort="getSort" />
    <table-block
      class="table-block"
      v-for="(post, index) in dashboard.posts"
      @view="view"
      @edit="edit"
      @deletePosts="deletePosts"
      :key="index"
      :titleComment="post.body"
      :commentResponse="post"
      :date="post.createdAt"
      :id="post.id"
      :author="post.user"
      :header="header"
      :links="links"
			:post="post.post"
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
import { mapState } from "vuex";
import Pagination from "~/components/profile/pagination";
import NotFound from "~/components/profile/dashboard/not-found-dashboard";

export default {
  layout: "profileSmall",
  middleware: "auth",
  components: {
    Search,
    TableHeader,
    TableBlock,
    TableFooter,
		Pagination,
		NotFound
  },
  data() {
    return {
			page: 1,
			type: 'blocked',
      header: {
        title: "Comment",
        response: "Response To",
        date: "Created At",
        // status: "Status"
      },
      sort: {
        name: "date",
        type: "ASC"
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
        view: "review",
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
        .$post(`/api/admin/comments/delete-multi`, { ids: this.dashboard.ids })
        .then(res => {
					this.$toasted.show(res.message);
					this.$store.commit("DEL_POSTS_DASHBOARD", this.dashboard.ids);
          this.$store.commit("CLEAR_DASHBOARD_IDS");
        })
        .catch(error => console.error(error));
    },
    view(slug, id) {
      this.$router.push({
        path: `/${slug}/comments/${id}`
      });
    },
    edit(slug) {
      this.$router.push({
        path: `/profile/dashboard/comments/${slug}/edit`
      });
    },
    deletePosts(id) {
      this.$axios
        .$delete(`/api/comments/${id}/delete`)
        .then(res => {
          this.$toasted.show(res.message);
          this.$store.commit("DEL_POST_DASHBOARD", id);
        })
        .catch(error => console.error(error));
    },
    getParams() {
      this.page = this.$route.query.page ? this.$route.query.page : 1;
      this.sort.name = this.$route.query.sort ? this.$route.query.sort : this.sort.name;
      this.sort.type = this.$route.query.direction ? this.$route.query.direction : this.sort.type;
      this.search.search = this.$route.query.q;
      this.search.status = this.$route.query.status;
      this.search.author = this.$route.query.author;
    },
    getPosts() {
			this.updateRouter();
			this.$store.commit("CLEAR_DASHBOARD_POSTS");
      this.$axios
        .$get(
          `/api/admin/comments${this.sortUpdate()}&type=${this.type}&limit=20&page=${
            this.page
          }${this.updateSearch()}`
				)

        .then(res => {
					console.log(res)
					this.$store.commit("CLEAR_DASHBOARD_IDS");
          this.$store.commit("SET_DASHBOARD_POSTS", res.data);
          this.$store.commit("SET_DASHBOARD_PAGINATIONS", res.pagination);
          if (this.dashboard.posts.length === 0 && this.pagination && this.pagination.pagesCount > 0) {
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
    updateRouter() {
      this.$router.push({
        path: "/profile/dashboard/blocked",
        query: this.query()
      });
    },
    sortUpdate() {
      if (this.sort.name && this.sort.type) {
        return `?orderBy=${this.sort.name}&order=${this.sort.type}`;
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

