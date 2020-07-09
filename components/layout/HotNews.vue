<template>
  <div class="hot-news-wrapper">
    <div class="hot-news">
      <div class="hot-news-title">
        Latest:
      </div>
      <div class="hot-news-item-list-wrapper">
        <div class="hot-news-item-list" :class="hoverClass || ''" @mouseenter="hoverClass='stop-animation'" @mouseleave="hoverClass=''">
          <div class="hot-news-item" v-for="(item, index) in header.news" :key="index">
            <nuxt-link class="hot-news-link" v-bind:to="`/l/${item.slug}`">
              {{ item.name }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="nav-search" @click="openSearch">
        <svg width="20" height="20">
          <use xlink:href="#search-icon" />
        </svg>
      </div>
    </div>
    <search-popup v-if="showPopusSearch" @closeSearch="closeSearch" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SearchPopup from '~/components/universal-components/popup-search.vue'

export default {
  components: {
    SearchPopup
  },
  data () {
    return {
      showPopusSearch: false,
			hoverClass: String,
      tags: []
    }
  },
  created () {
		// if(this.header.news.length === 0) {
		// 	this.getHotNews()
		// }
	},
	computed: {
		...mapState(['header'])
	},
  methods: {
    openSearch () {
      this.showPopusSearch = true
    },
    closeSearch () {
      this.showPopusSearch = false
    }
  }
}
</script>

