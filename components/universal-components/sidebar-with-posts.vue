<template>
  <div>
    <div class="trigger-type-posts">
      <span class="trigger" :class="type === 'top' ? 'activeTab' : ''" @click="getPost('top')">top</span>
      <span class="trigger" :class="type === 'latest' ? 'activeTab' : ''" @click="getPost('latest')">latest</span>
    </div>
    <div class="row wrapper-side-post">
      <div class="col-sm-12 col-md-4 col-lg-12" v-for="post in posts" :key="post.id">
        <default-news-card :post="post" :padding="true" />
        <!-- <default-news-card :padding="true" />
        <default-news-card :padding="true" /> -->
        <!-- <vrd-vdc type="second-block" [defaultPost]="post" [padding]="true"></vrd-vdc> -->
      </div>
    </div>
  </div>
</template>

<script>
import DefaultNewsCard from '~/components/news/DefaultNewsCard'
import axios from 'axios'

export default {
  components: {
    DefaultNewsCard
  },
  data () {
    return {
      posts: [],
      type: ''
    }
  },
  beforeMount () {
    this.getPost('top')
  },
  methods:{
    getPost (type) {
      if(this.type !== type) {
        this.type = type
        axios.get(`/api/posts/query/sidebar?termSlug=&type=${type}&limit=3`)
        .then(res => {
          this.posts = res.data.data
        })
        .catch(error => console.error(error))
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../../assets/utils/colors";

  .trigger-type-posts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 1.3em;
    overflow: hidden;
    height: 25px;
    position: relative;
    .trigger {
      cursor: pointer;
      line-height: 1.2;
      background-color: #fff;
      z-index: 2;
      padding-right: .34em;
      padding-left: .34em;
      position: relative;
      margin-top: 0;
      color: #696969;
      font-size: 1.4em;
      font-weight: 700;
      line-height: 16px;
    }
    .activeTab {
      color: $primary_color;
    }
    &::after {
      content: '';
      position: absolute;
      top: 10px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #696969;
      z-index: 1;
    }
  }
  .col-sm-12 {
    padding-right: 15px !important;
    padding-left: 15px !important;
  }
</style>
