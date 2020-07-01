<template>
    <div class="row align-justify next-section">
        <div class="column" v-if="posts.previous">
            <div class="link-wrapper">
                <i class="color-primary angle-left">
                    <svg width="40" height="40">
                        <use xlink:href="#angle-left" />
                    </svg>
                </i>
                <div class="info info-left">
                    <div class="label">Previous Post</div>
                    <nuxt-link
                        class="title text-overflow-clamp-3"
                        :to="`/${posts.previous.slug}`"
                    >{{posts.previous.title}}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="column column-right" v-if="posts.next">
            <div class="link-wrapper">
                <div class="info info-right">
                    <div class="label">Next Post</div>
                    <nuxt-link
                        class="title text-overflow-clamp-3"
                        :to="`/${posts.next.slug}`"
                    >{{posts.next.title}}</nuxt-link>
                </div>
                <i class="color-primary angle-right">
                    <svg width="40" height="40">
                        <use xlink:href="#angle-right" />
                    </svg>
                </i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        slug: String
    },
    data() {
        return {
            posts: Object
        };
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            this.$http
                .get(`/api/posts/${this.slug}/previous-next`)
                .then(res => {
                    this.posts = res.data;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
