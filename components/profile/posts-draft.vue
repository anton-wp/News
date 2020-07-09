<template>
  <div class="posts-draft">
    <div class="block">
      <nuxt-link class="link" :to="`/${post.slug}/edit`">
        <img v-if="!post.featured.original" src="/image/default_image_landscape.png" alt />
        <img v-if="post.featured.original" :src="post.featured.original" alt />
      </nuxt-link>
      <!-- <img *ngIf="post.featured.original" [src]="post.featured.landscape" alt /> -->
      <div class="content">
        <nuxt-link class="link" :to="`/draft/${post.id}`">
          <h5>{{post.title}}</h5>
        </nuxt-link>
        <span class="bottom">
          <nuxt-link
            class="link"
            :to="`/draft/${post.id}`"
            style="display: flex; align-items: center;"
          >
            <svg class="icon" width="17" height="17">
              <use xlink:href="#clock-o" />
            </svg>
            <p class="date-created">{{ new Date(post.publishedAt).toDateString() }}</p>
          </nuxt-link>
          <nuxt-link class="button-edit" :to="`/draft/${post.id}`">
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


