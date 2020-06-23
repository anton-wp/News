<template>
  <div class="container wrapper-horizontal-verdict-card" :class="{back_block: type === 'minimal-block'}">
    <div class="row w-100 mx-0">
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6 pl-0">
        <!-- add go to post page {id} -->
        <nuxt-link :class="'image-'+type" :to="`/${post.slug}`">
          <img v-bind:src="post.featured.landscape" class="post-image" alt="">
        </nuxt-link>
      </div>
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6 px-0">
        <div class="information padding0">
          <div class="container-fluid">
            <news-card-header v-if="!tag" :category="post.category" colorScheme="dark" />
            <div class="row block wrapp">
              <!-- <h2  > -->
                <!-- add go to post page {id} -->
              <nuxt-link class="title" :to="`/${post.slug}`" v-if="type === 'full-block'">{{ post.title }}</nuxt-link>
              <nuxt-link class="title" :to="`/${post.slug}`" v-if="type === 'minimal-block'">{{ post.title }}</nuxt-link>
                <!-- <nuxt-link v-if="type === 'minimal-block'">{{ post.title }}</nuxt-link> -->
              <!-- </h2> -->
            </div>
            <div v-if="shortContent" class="shortContent">
              <p v-if="!background">The northern island of Hokkaido, off of Japan, acted swiftly during the early outbreak of COVID-19, as the officials [...]</p>
            </div>
            <div v-if="type === 'full-block' && !shortContent" class="row wrapp">
              <span class="about-news">{{ post.shortContent }}[...]</span>
            </div>
            <news-card-footer :author="post.author" :tag="tag" :publishedAt="post.publishedAt" colorScheme="light" :pending="false" :showMarks="false" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCardHeader from '~/components/news/NewsCardHeader'
import NewsCardFooter from '~/components/news/NewsCardFooter'
export default {
  components: {
    NewsCardHeader,
    NewsCardFooter
  },
  props: {
    type: String,
    background: Boolean,
    shortContent: Boolean,
		post: Object,
		tag: Boolean
	},
	provide() {
		return {
			id: this.post.id,
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/colors";

.nuxt-link {
  color: inherit;
}
.active {
  visibility: visible !important;
}

.image-full-block {
    max-width: 100%;

    .post-image {
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
    }
}

.image-minimal-block {
    max-width: 100%;

    .post-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.wrapper-horizontal-verdict-card {
  font-family: open sans, Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  margin: 10px 0 1em 0;

  .pad0-image {
    padding-left: 0px !important;
  }

  a {
    cursor: pointer;
  }

  .information {
    background-color: $white;
    padding: .9em 1.2em;
    height: auto;

    &.paddingBT0 {
      padding: 0 1.2em 0 0;
    }

    &.padding0 {
      padding: 0;
    }

    .author {
      font-size: 12.8px;
      font-weight: 600 !important;
      line-height: 19.2px;
      letter-spacing: -0.3px;
    }

    .container-fluid {
      .shortContent {
        p {
          // padding-top: 10px;
          min-height: 75px;
          margin-bottom: 0px;
          font-size: 17.6px;
          font-weight: 600;
        }
      }

      .about-news {
        font-weight: 600;
        font-size: 1.1em;

        line-height: 1.3;
        margin-top: .4em;
        letter-spacing: -.3px;
        font-family: "Open Sans";
      }

      .bywho {
        flex-wrap: wrap;
        margin-bottom: 5px;
        padding-top: .3em;
        font-size: .9em;
        letter-spacing: -.3px;
        user-select: none;
        position: relative;

        .username-link {
          cursor: pointer;
          color: $black;
          text-decoration: none;
          font-weight: 600;
          font-size: 12.8px;
          transition: color 0.3s;

          &:hover {
            color: $primary_color;
          }
        }
      }
    }

    .title {
      font-family: "Open Sans";
      font-size: 1.4em;
      line-height: 1.3em;
      margin-top: .3em;
      margin-bottom: .5em;
      transition: color .25s;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-weight: bold;
      cursor: pointer;
      user-select: none;
      // min-height: 93px;
      display: block;
      color: $black;
      text-decoration: none;

      &:hover {
        color: $doveGray;
      }
    }

    .wrapp {
      margin-left: 0;
      margin-right: 0;
      justify-content: space-between;
    }
  }
}

.back_block {
  background-color: $white;
  padding: 0;
}

@media (min-width: 576px) {
  .wrapper-horizontal-verdict-card {
    max-width: 100%;

    .information {
      .container-fluid {
        padding: 0;
      }
    }
  }
}

@media (max-width: 768px) {
  .pad0-image {
    padding: 0;

    .post-image {
      min-height: 350px;
    }
  }
}

@media (max-width: 576px) {
  .wrapper-horizontal-verdict-card {
    .information {
      &.padding0 {
        padding: .9em 1.2em .9em 1.2em !important;
      }
    }
  }
}
</style>
