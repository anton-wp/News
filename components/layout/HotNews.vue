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
		if(this.header.news.length === 0) {
			this.getHotNews()
		}
	},
	computed: {
		...mapState(['header'])
	},
  methods: {
		getHotNews () {
			this.$http.get(`/api/tags/featured-tags`)
				.then(res => this.$store.commit('SET_HEADER_HOT_NEWS', res.data.data))
				.catch(error => console.error(error))
		},
    openSearch () {
      this.showPopusSearch = true
    },
    closeSearch () {
      this.showPopusSearch = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
.hot-news-wrapper {
  font-family: 'Open Sans', Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
  margin-top: 72px;
  background: $wildSand;
  .hot-news {
    line-height: 1;
    max-width: $global-width;
    margin: 0 auto;
    padding: 10px 15px;
    display: grid;
    grid-gap: 12px;
    grid-template-columns: auto 1fr auto;
    font-size: 14px;
    .hot-news-title {
      padding-top: 3px;
      text-transform: uppercase;
      font-weight: 700;
      font-size: 14px;
    }
    .hot-news-item-list-wrapper {
      overflow-x: hidden;
    }

		.stop-animation {
			animation: rolling infinite linear 50s paused !important;
		}
    .hot-news-item-list {
      padding-top: 3px;
      // padding: 0 12px;
      line-height: 1;
      display: flex;
      width: fit-content;
      position: relative;
			animation: rolling infinite linear 50s ;
			@keyframes rolling {
        from {
          transform: translate(-0%, 0);
        }
        to {
          transform: translate(-50%, 0)
        }
      }
      .hot-news-item {
        padding: 0 12px;
        width: max-content;
        .hot-news-link {
          color: $black;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          &:hover {
            color: $hover_color;
          }
        }
      }
    }
    .nav-search {
      svg{
        cursor: pointer;
        fill: #F63E3C;
        &:hover {
          fill: #bc2d2d;
        }
      }
    }
  }
}
</style>
