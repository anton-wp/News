<template>
    <div v-if="$isAMP" class="col d-flex justify-end post-icons">
        <a href="#" class="post-icons__item">
            <svg width="20" height="20">
                <use xlink:href="#comment" />
            </svg>
            {{data.commentsCount ? data.commentsCount : 0}}
        </a>
        <a href="#" class="post-icons__item">
            <svg width="20" height="20">
                <use xlink:href="#votes" />
            </svg>
            {{data.votesCount ? data.votesCount : 0}}
        </a>
        <a href="#" class="post-icons__item">
            <svg width="20" height="20">
                <use xlink:href="#eye" />
            </svg>
            {{data.viewsCount ? data.viewsCount : 0}}
        </a>
    </div>
    <div v-else class="marks">
        <span class="mark-news" @click="scrollToComment">
            <svg width="20" height="20">
                <use xlink:href="#comment" />
            </svg>
            <span class="text">
                <a
                    class="reviews-link dark"
                    href="#"
                >{{data.commentsCount ? data.commentsCount : 0}}</a>
            </span>
        </span>
        <span class="mark-news">
            <svg width="20" height="20">
                <use xlink:href="#votes" />
            </svg>
            <span class="text">
                <a class="reviews-link dark" href="#">{{data.votesCount ? data.votesCount : 0}}</a>
            </span>
        </span>
        <span class="mark-news">
            <svg width="20" height="20">
                <use xlink:href="#eye" />
            </svg>
            <span class="text">
                <a class="reviews-link dark" href="#">{{data.viewsCount ? data.viewsCount : 0}}</a>
            </span>
        </span>
        <span class="bookmark-news">
            <bookmark />
        </span>
    </div>
</template>

<script>
import Bookmark from "~/components/universal-components/Bookmark";

export default {
    components: {
        Bookmark,
    },
    props: {
        data: Object,
    },
    methods: {
        scrollToComment() {
            this.$emit("scrollToComment");
        },
		},

		created() {
			console.log(this.data);
		}
};
</script>
