<template>
 <div class="hot-news-wrapper">
   <div class="hot-news">
    <div class="hot-news-title">Latest:</div>
    <div class="hot-news-item-list-wrapper">
      <div class="hot-news-item-list">
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
        <div class="hot-news-item">
          <a class="hot-news-link">lorem</a>
        </div>
      </div>
    </div>
    <div class="nav-search">
      <svg width="20" height="20">
       <use xlink:href="#search-icon" />
      </svg>
    </div>
   </div>
 </div>
</template>

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
    .hot-news-item-list {
      padding-top: 3px;
      // padding: 0 12px;
      line-height: 1;
      display: flex;
      width: fit-content;
      position: relative;
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
