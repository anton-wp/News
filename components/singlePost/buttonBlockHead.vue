<template>
  <div class="col-12 blockHead">
    <h5 class="category-name">
      POLITICS
    </h5>
    <div class="blockAction">
      <a class="action">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        review
      </a>
      <a class="action">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        remove
      </a>
      <a class="action">
        <svg width="12" height="15">
          <use xlink:href="#delete" />
        </svg>
        delete
      </a>
      <a class="action">
        <svg width="12" height="15">
          <use xlink:href="#pencil" />
        </svg>
        edit
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/utils/variables";
  @import "../../assets/utils/colors";

  .blockHead {
    display: flex;
    align-items: center;

    .blockAction {
      display: inline-block;
      margin-left: auto;

      .action{
        cursor: pointer;
        text-decoration: none;
        padding: 4px 9px;
        margin: 0 0.9375rem;
        border: 1px solid;
        border-color: $primary_color;
        color: $primary_color;
        fill: $primary_color;
        transition: all .25s;
        border-radius: 4px;
        vertical-align: middle;
        align-items: center;
        letter-spacing: .8px;
        font-weight: 700;
        font-size: 10px;
        text-transform: uppercase;

        &:hover{
          color: $white;
          fill: $white;
          background-color: $button-hover-background;
          border-color: $button-hover-background;
        }

        svg {
          fill: inherit;
          font-size: 11px;
          margin-right: 5px;
          vertical-align: sub;
        }
      }
    }
  }
</style>
