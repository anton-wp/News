<template>
  <div class="marks">
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#comment" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">
          {{author.commentsCount}}
        </a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#votes" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">
          {{author.verdictsCount}}
        </a>
      </span>
    </span>
    <span class="mark-news">
      <svg width="20" height="20">
        <use xlink:href="#eye" />
      </svg>
      <span class="text">
        <a class="reviews-link dark" href="#">
					{{author.followersCount}}
        </a>
      </span>
    </span>
    <span class="bookmark-news">
      <button class="bookmark">
        <svg width="20" height="20">
          <use xlink:href="#bookmark" />
        </svg>
        <!-- <svg width="20" height="20">
          <use xlink:href="#bookmark-empty" />
        </svg> -->
      </button>
    </span>
  </div>
</template>

<script>
export default {
	props:{
		author: Object
	}
}
</script>

<style lang="scss" scoped>
  @import "../../assets/utils/colors";

  .marks {
    margin-left: auto;

    @media screen and (max-width: 490px) {
      text-align: center;
    }

    .reviews-link {
      cursor: pointer;
      text-decoration: none;
      font-weight: 400;
      transition: color 0.3s;
      color: black;

      &:hover {
        color: $primary_color;
      }
    }

    .text {
      font-size: 20px;
      font-family: Open Sans, sans-serif !important;
    }

    .mark-news {
      padding: 0 5px;
      fill: $primary_color;
      cursor: pointer;

      .text {
        padding-left: 3px;
        transition: 0.3s;
        font-weight: 400;
        font-size: 20px;
      }

      &:hover {
        .text {
          color: $primary_color;
        }
      }
    }

    svg{
      vertical-align: text-top;
    }
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
</style>
