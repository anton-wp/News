<template>
    <post
        v-if="data"
        :data="data"
        tag
        :slug="$route.params.slug"
        :term="term"
        :pagination="pagination"
        :prev="prev"
        :next="next"
		review
    />
</template>

<script>
import Post from "@/components/layout/Post";

export default {
    components: {
        Post
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
    asyncData({ $axios, $router, params }) {
        const route = params.slug === "news" ? "posts/query/news" : params.slug;

        return $axios
            .$get(`/api/${route}?limit=12`)
            .then(response => {
                const tag = response.type === "feed";
                const type =
                    response.type === "feed" ? "category" : response.type;
                const data = response.data;
                let term = response.term || { name: "news" };

                if (type === "post") {
                    term = null;
                }
                const pagination = response.pagination;

                const prev = response.previous;
                const next = response.next;

                console.log(data);

                return { tag, type, data, term, pagination, prev, next };
            })
            .catch(error => {
                // $router.push('/');
            });
    }
};
</script>
