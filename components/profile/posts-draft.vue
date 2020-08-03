<template>
    <div class="posts-draft">
        <div class="block">
            <nuxt-link class="link" :to="`/draft/${post.slug}`">
                <img v-if="!post.featured.original" src="/image/default_image_landscape.png" alt />
                <img v-if="post.featured.original" :src="post.featured.wide" alt />
            </nuxt-link>
            <!-- <img *ngIf="post.featured.original" [src]="post.featured.landscape" alt /> -->
            <div class="content-draft">
                <nuxt-link class="link" :to="`/draft/${post.slug}`">
                    <h5>{{post.title}}</h5>
                </nuxt-link>
                <span class="bottom">
                    <nuxt-link
                        class="link"
                        :to="`/draft/${post.slug}`"
                        style="display: flex; align-items: center;"
                    >
                        <svg class="icon" width="17" height="17">
                            <use xlink:href="#clock-o" />
                        </svg>
                        <p class="date-created">{{ new Date(post.publishedAt).toDateString() }}</p>
                    </nuxt-link>
                    <nuxt-link class="button-edit" :to="`/draft/${post.slug}`">
                        <svg class="icon" width="17" height="17">
                            <use xlink:href="#pencil" />
                        </svg>
                        Edit
                    </nuxt-link>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: Object
    }
};
</script>


