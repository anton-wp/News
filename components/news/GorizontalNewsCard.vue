<template>
  <div class="container wrapper-horizontal-verdict-card" :class="type">
    <div class="row">
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6">
        <!-- add go to post page {id} -->
        <a>
          <img src="/image/top-news.jpg" class="post-image" alt="">
        </a>
      </div>
      <div class="pad0-image col-12 col-sm-12 col-md-6 col-lg-6">
        <div class="information" :class="{padding0: type === 'minimal-block' || type === 'full-block', paddingBT0: type !== 'full-block'}">
          <div class="container-fluid">
            <news-card-header colorScheme="dark" />
            <div class="row block wrapp">
              <h2 class="title" >
                <!-- add go to post page {id} -->
                <a v-if="type === 'full-block'">title, ...</a>
                <a v-if="(type === 'minimal-block')">title, ...</a>
              </h2>
            </div>
            <div class="shortContent">
              <p v-if="!background">shortContent,[...]</p>
            </div>
            <div v-if="type === 'full-block'" class="row wrapp">
              <span class="about-news">HTML</span>
            </div>
            <news-card-footer colorScheme="light" :pending="false" :showMarks="false" />
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
  props: {
    type: String,
    background: Boolean
  },
  components: {
    NewsCardHeader,
    NewsCardFooter
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/colors";
.active {
  visibility: visible !important;
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

  .post-image {
    max-height: 230px;
    width: 100%;
    height: 100%;
    background-position: top;
    background-size: cover;
  }

  .information {
    background-color: $white;
    padding: .9em 1.2em;
    height: auto;

    &.paddingBT0 {
      padding: 0 1.2em 0 0;
    }

    &.padding0 {
      padding: 0 1.2em 0 0;
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

      &:hover {
        color: $doveGray;
      }

      a {
        color: $black;
        text-decoration: none;
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
