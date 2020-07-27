<template>
  <div class="gorizontal-news-card mb-0 mb-md-4">
    <div
      class="container wrapper-horizontal-verdict-card px-0 mb-0"
      :class="{back_block: type === 'minimal-block'}"
    >
      <div class="row w-100 mx-0">
        <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6 pl-0">
          <!-- add go to post page {id} -->
          <div class="position__verdict__default" v-if="post.verdictValue">
            <block-verdict :verdict="post.verdictValue" />
          </div>
          <nuxt-link :title="post.title" :class="'image-'+type" :to="`/${post.slug}`">
            <img v-bind:src="post.featured.landscape" class="post-image" alt />
          </nuxt-link>
        </div>
        <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6 pl-0 pr-3">
          <div class="information padding0">
            <div class="container-fluid">
              <news-card-header
              v-if="!tag"
              :category="post.category"
              :post="post"
              colorScheme="dark"
              :paddingTop="paddingTop"
              />
              <div class="row block wrapp">
                <!-- <h2  > -->
                <!-- add go to post page {id} -->
                <nuxt-link
                  class="title"
                  :to="`/${post.slug}`"
                  :title="post.title"
                  v-if="type === 'full-block'"
                >{{ post.title }}</nuxt-link>
                <nuxt-link
                  class="title"
                  :to="`/${post.slug}`"
                  :title="post.title"
                  v-if="type === 'minimal-block'"
                >{{ post.title }}</nuxt-link>
                <!-- <nuxt-link v-if="type === 'minimal-block'">{{ post.title }}</nuxt-link> -->
                <!-- </h2> -->
              </div>
              <div v-if="shortContent" class="shortContent">
                <p
                  v-if="!background"
                >The northern island of Hokkaido, off of Japan, acted swiftly during the early outbreak of COVID-19, as the officials [...]</p>
              </div>
              <div v-if="type === 'full-block' && !shortContent" class="row wrapp">
                <span class="about-news">{{ post.shortContent }}[...]</span>
              </div>
              <news-card-footer
                :author="post.author"
                :tag="tag"
                :publishedAt="post.publishedAt"
                colorScheme="light"
                :pending="false"
                :showMarks="false"
                :post="post"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardHeader from "~/components/news/NewsCardHeader";
import NewsCardFooter from "~/components/news/NewsCardFooter";
import BlockVerdict from "~/components/universal-components/block-verdict";
export default {
  components: {
    NewsCardHeader,
    NewsCardFooter,
    BlockVerdict,
  },
  props: {
    type: String,
    background: Boolean,
    shortContent: Boolean,
    post: Object,
    tag: Boolean,
    paddingTop: Boolean,
  },
  provide() {
    return {
      id: this.post.id,
    };
  },
  created() {
    console.log(this.paddingTop);
  },
};
</script>
