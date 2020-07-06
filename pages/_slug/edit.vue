<template>
    <making-post edit="true" />
</template>

<script>
import MakingPost from "~/components/making-post/MakingPost";

export default {
    middleware: ["auth", "role"],
    components: {
        MakingPost
    },

    props: {
        add: String,
        edit: String
    }
};
</script>

