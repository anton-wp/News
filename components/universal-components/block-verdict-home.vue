<template>
  <div class="block__verdict__home">
    <div class="verdict__home__img">
      <nuxt-link :to="`/${data.slug}`">
        <img :src="data.featured.wide_thumbnail" alt="data.title" />
      </nuxt-link>
    </div>
    <div class="verdict__home__content">
      <h2>
        <nuxt-link :to="`/${data.slug}`">{{ data.title }}</nuxt-link>
      </h2>
      <news-card-footer
        :author="data.author"
        :post="data"
        :tag="false"
        :publishedAt="data.publishedAt"
        colorScheme="light"
        :pending="false"
        :showMarks="false"
        :bottom="true"
      />
    </div>
  </div>
</template>

<script>
import NewsCardFooter from "~/components/news/NewsCardFooter";

export default {
  components: {
    NewsCardFooter
  },
  props: {
    data: Object
  },
  created() {
    console.log(this.data);
  }
};
</script>

<style lang="scss">
.block__verdict__home {
  display: flex;
  margin-bottom: 32px;

  &:hover {
    .verdict__home__img::before {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  .verdict__home__img::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    // background-color: rgba(0, 0, 0, 0.5);
  }
  .verdict__home__img {
    cursor: pointer;
    position: relative;
    align-self: center;
    width: 130px;
    -webkit-box-flex: 0;
    flex: 0 0 130px;

    img {
      width: 100%;
    }
  }
  .verdict__home__content {
    padding-left: 16px;
    color: black;
    flex-wrap: wrap;
    font-weight: 600;
    padding-top: 0.3em;
    // font-size: 0.7em;
    letter-spacing: -0.3px;
    h2 {
      cursor: pointer;
      margin-top: -0.3em;
      line-height: 1.2;
      transition: color 0.25s;
      letter-spacing: -0.3px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      max-height: calc(1.2em * 4);
      color: black;
      font-size: 16px;
      font-weight: 700;

      &:hover {
        color: #575757;
      }
    }
  }
}
</style>
