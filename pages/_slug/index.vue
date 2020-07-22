<template>
  <component
    v-if="data"
    :is="type"
    :data="data"
    :slug="$route.params.slug"
    :term="term"
    :pagination="pagination"
    :prev="prev"
    :next="next"
    :headerMenu="headerMenu"
    :type="type"
    :tag="tag"
  />
</template>

<script>
import Category from "@/components/layout/Category";
import Post from "@/components/layout/Post";
import { error } from "util";

export default {
  amp: "hybrid",
  ampLayout: "default.amp",
  components: {
    Post,
    Category
  },
  data() {
    return {
      type: null,
      data: null,
      pagination: null,
      term: null,
      tag: false,
      prev: null,
      next: null
    };
  },
  // asyncData({ $axios, $router, params }) {
  //     const route = params.slug === "news" ? "posts/query/news" : params.slug;

  //     return $axios
  //         .$get(`/api/${route}?limit=12`)
  //         .then(response => {
  //             const tag = response.type === "feed";
  //             const type =
  //                 response.type === "feed" ? "category" : response.type;
  //             const data = response.data;
  //             let term = response.term || { name: "news" };

  //             if (type === "post") {
  //                 term = null;
  //             }
  //             const pagination = response.pagination;

  //             const prev = response.previous;
  //             const next = response.next;

  //             return { tag, type, data, term, pagination, prev, next };
  //         })
  //         .catch(error => {
  //             // $router.push('/');
  //         });
  // },

  async asyncData({ $axios, $router, params, redirect }) {
    try {
      const route = params.slug === "news" ? "posts/query/news" : params.slug;

      const dataCat = await $axios.$get(`/api/${route}?limit=12`);

      const tag = dataCat.type === "category";
      const type = dataCat.type === "feed" ? "category" : dataCat.type;
      const data = dataCat.data;
      let term = dataCat.term || { name: "news" };

      if (type === "post") {
        term = null;
      }
      const pagination = dataCat.pagination;

      const prev = dataCat.previous;
      const next = dataCat.next;

      const headerMenu = await $axios.$get(`/api/menu/header`);

      return {
        tag: tag,
        type: type,
        data: data,
        term: term,
        pagination: pagination,
        prev: prev,
        next: next,

        headerMenu: headerMenu.data
      };
    } catch (e) {
			redirect('/404');
    }
  }
};
</script>


