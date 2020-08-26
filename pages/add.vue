<template>
    <making-post add="true" />
</template>

<script>
import MakingPost from "~/components/making-post/MakingPost";

export default {
    middleware: ["auth", "role"],
    components: {
        MakingPost
    },

};
</script>

