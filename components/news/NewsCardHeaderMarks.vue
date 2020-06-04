<template>
  <div class="marks">
    <span class="mark-news">
      <svg width="15" height="15">
        <use xlink:href="#comment" />
      </svg>
      <span class="text">
        <!-- TODO go to single post page -->
        <a class="reviews-link" :class="colorScheme" href="#">0</a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="15" height="15">
        <use xlink:href="#votes" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <a class="reviews-link" :class="colorScheme" href="#">0</a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="15" height="15">
        <use xlink:href="#eye" />
      </svg>
      <!-- TODO go to single post page -->
      <span class="text">
        <a class="reviews-link" :class="colorScheme" href="#">0</a>
      </span>
    </span>
    <span class="bookmark-news">
      <!-- add function add this post to save -->
      <button v-if="!pending" class="bookmark">
          <svg width="20" height="20">
          <use xlink:href="#bookmark-empty" />
        </svg>
        <!-- <svg width="20" height="20">
          <use xlink:href="#bookmark" />
        </svg> -->
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    colorScheme: String,
    pending: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/utils/variables";
.light {
  color: $white
}

.dark {
  color: $black;
}

.bookmark-news {
  padding-left: 10px;

  .bookmark {
    fill: $primary_color;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
  }
}
.reviews-link {
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
  color: inherit;

  &:hover {
    color: $primary_color;
  }
}

.theme-wrapper {
  .theme {
    position: relative;
    font-weight: 800;
    font-size: .9em;
    text-transform: uppercase;
    padding-right: 10px;
    cursor: pointer;
    user-select: none;

    &::before {
      content: '';
      position: absolute;
      display: block;
      top: 20px;
      height: 3px;
      width: 40px;
      background-color: $primary_color;
    }
  }
}

.marks {
  .mark-news {
    padding: 0 5px;
    cursor: pointer;
    font-size: 14px;
    svg {
      fill: $primary_color;
    }
    .text {
      padding-left: 3px;
      transition: 0.3s;
    }

    &:hover {
      .text {
        color: $primary_color;
      }
    }
  }
}
</style>
