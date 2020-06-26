<template>
    <component
        :is="type"
        :data="data"
        :tag="tag"
        :slug="$route.params.slug"
        :term="term"
        :pagination="pagination"
    />
</template>

<script>
import Category from "@/components/layout/Category";
import Post from "@/components/layout/Post";

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
            tag: false
        };
    },
    asyncData({ $axios, $router, params }) {
        const route = params.slug === "news" ? "posts/query/news" : params.slug;

        return $axios
            .$get(`/api/${route}?limit=12`)
            .then(response => {
                const tag = response.type === "feed";
                const type =
                    response.type === "feed" ? "category" : response.type;
                const data = response.data;
                const term = response.term || { name: "news" };
                const pagination = response.pagination;

                return { tag, type, data, term, pagination };
            })
            .catch(error => {
                // $router.push('/');
            });
    }
};
</script>


