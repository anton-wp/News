<template>
  <div class="routing">
    <template>
      <span class="breadcrumbs">
        label1
        <span class="arrow">
          >
        </span>
      </span>
      <a class="breadcrumbs">
        <span class="breadcrumbs">
          label3
          <span class="arrow">
            >
          </span>
        </span>
      </a>
    </template>
  </div>
</template>

<style lang="scss">
  @import "../../assets/utils/variables";

  .routing {
    max-width: $global-width;
    margin: 0 auto;
    position: relative;
    padding: 0 15px;

    .breadcrumbs {
      // padding: 0 4px 0 0;

      font-size: 11px;
      font-weight: 400;
      text-decoration: none;
      transition: 0.3s;
      color: $black;
      cursor: pointer;

      &:hover {
        color: #ff4242;
      }
    }

    .arrow {
      padding: 0 5px;
    }
  }
</style>
