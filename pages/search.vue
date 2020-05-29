<template>
  <div class="policy-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 padding-0">
          <h5 class="search-name">
            SEARCH RESULTS FOR {{ stringSearch }}
          </h5>
          <!-- <h5
            class="category-name"
          >SEARCH RESULTS FOR {{ getSearchString() }}</h5> -->
          <div
            id="searchForm"
            class="primary-form"
          >
            <input
              type="search"
              name="q"
              class="search-filed"
              autocomplete="off"
              autocorrect="off"
              min="0"
            >
            <svg width="20" height="20">
              <use xlink:href="#search-icon" />
            </svg>
          </div>
          <!-- <ng-container *ngIf="store.posts.length > 0">
            <ng-container *ngFor="let post of store.posts">
              <vrd-gvc type="full-block" [text]="true" [horizontalPost]="post"></vrd-gvc>
            </ng-container>
          </ng-container> -->
        </div>
        <!-- <div class="col-lg-8 padding-0">
          <h4>Sorry, nothing to show</h4>
        </div> -->
        <div class="col-lg-4">
          <follow />
        </div>
      </div>
    </div>
    <!-- <div *ngIf="store.pagination.next" class="container">
      <div class="row">
        <div class="col-12">
          <div class="load-more-wrapper">
            <span (click)="loadMore()">load more</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Follow from '~/components/universal-components/followBlock.vue'

export default {
  components: {
    Follow
  },
  data () {
    return {
      stringSearch: ''
    }
  },
  beforeRouteUpdate (to, from, next) {
    // console.log(to.query.q)
    this.stringSearch = to.query.q
    next()
  },
  mounted () {
    // console.log(this.$route.query.q)
    this.stringSearch = this.$route.query.q
  }
}
</script>

<style lang="scss">
@import "../assets/utils/variables";
@import "../assets/utils/colors";

.background {
  background-color: $secondary-bgcolor;
}

.load-more-wrapper {
  margin-bottom: 3em;
  text-align: center;
  margin-top: 3em;
  span {
    position: relative;
    font-size: .95rem;
    padding: 1.15em 2.8em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .8px;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 0;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: $primary_color;
    color: $whiteFE;
    transition: background-color .25s ease-out,color .25s ease-out;
    &:hover {
    background-color: $button-hover-background;
    }
    &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: 30px;
    left: 2.8em;
    bottom: 0.8em;
    background-color: rgba(255, 255, 255, 0.3);
    }
  }
}

.policy-wrapper {
  margin-top: 20px;
  width: 100%;

  .container {
    max-width: $global-width;

    .padding-0 {
      padding: 0;
    }

    .search-name {
      text-transform: uppercase;
      font-size: 1.9em;
      margin: 0;
      position: relative;
      color: #6d6d6d;
      font-weight: bold;
      font-family: "Open Sans";
      padding-left: 10px;
      margin-bottom: 1em;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 35px;
        height: 3px;
        background-color: $primary_color;
        content: '';
        width: 1.9em;
      }
    }

    .primary-form {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 2.9em;
      font-size: 1.3em;
      position: relative;

      svg {
        fill: $primary_color;
        height: 20px;
        width: 20px;
        cursor: pointer;
        top: 15px;
        right: 20px;
        position: absolute;
      }

      input {
        width: 100%;
        font-weight: 600;
        padding: 0.4em 2em 0.4em 0.6em;
        border: 1px solid #8d8d8d;
        color: #0a0a0a;
      }
    }
  }
}

</style>
